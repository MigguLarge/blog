const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const matter = require('gray-matter');

const md = new MarkdownIt();

const program = new Command();

program.version('0.1.0');

program.parse;

const postsDirectory = path.join(process.cwd(), '_posts');

function markdownToHtml(markdown) {
    return md.render(markdown);
}

function getPostFiles() {
    return fs.readdirSync(postsDirectory);
}

function getPostInfo(postFileName, fields = []) {
    const slug = postFileName.replace(/\.md$/, '');
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    let list = {};
    fields.forEach((field) => {
        if (field === 'slug') {
            list[field] = slug;
        }
        if (field === 'content') {
            list[field] = content;
        }
        if (typeof data[field] !== 'undefined') {
            list[field] = data[field];
        }
    });

    return list;
}

function getAllPost(fields = []) {
    const postFiles = getPostFiles();
    const posts = postFiles
        .map((postFile) => getPostInfo(postFile, fields))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

function layout(title, inner, componentsRoute) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <title>${title}</title>
            <script src="${componentsRoute}" defer></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js"></script>
            <script>hljs.highlightAll();</script>
            <style>
                :root {
                    --black: #232323;
                    --white: #fff;
                    --gray: hsl(0 0% 50%);
                }

                body,html {
                    color: var(--black);
                    background-color: var(--white);
                    margin: 0;
                    padding: 0;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                }

                a {
                    color: var(--black);
                    text-decoration: none;
                }
            </style>
        </head>
        <body>
            <custom-header></custom-header>
            ${inner}
        </body>
        </html>
    `;
}

const postList = getAllPost([
    'title',
    'author',
    'date',
    'slug',
    'thumbnail',
    'content',
    'banner',
]);

fs.writeFileSync(
    './public/index.html',
    // `
    //     <!DOCTYPE html>
    //     <html>
    //     <head>
    //         <meta charset="UTF-8">
    //         <title>Home | JUN</title>
    //     </head>
    //     <body>
    //     <ul>
    //         ${postList
    //             .map((post) => `<li>${post.title} | ${post.slug}</li>`)
    //             .join('')}
    //     </ul>
    //     </body>
    //     </html>
    // `,
    layout(
        'Home | JUN',
        `
            <style>
                .main {
                    margin: 0 20vw;
                }

                .post-list {
                    width: 100%;
                    padding: 0;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: .5em;
                }

                @media screen and (max-width: 864px) {
                    .post-list {
                        grid-template-columns: repeat(3, 1fr);
                    }

                    .main {
                        margin: 0 10vw;
                    }
                }

                @media screen and (max-width: 576px) {
                    .post-list {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    
                    .main {
                        margin: 0 1em;
                    }
                }
            </style>
            <div class="main">
                <ul class="post-list">
                    ${postList
                        .map(
                            (post) =>
                                `<post-list-item post-href="./posts/${post.slug}.html" post-thumbnail="./img/${post.thumbnail}" post-title="${post.title}" post-date="${post.date}" post-author="${post.author}"></post-list-item>`,
                        )
                        .join('')}
                </ul>
            </div>
        `,
        './components.js',
    ),
);

postList.map((post) =>
    fs.writeFileSync(
        `./public/posts/${post.slug}.html`,
        layout(
            `${post.title} | ${post.author}`,
            `
                <post-main post-title="${post.title}" post-author="${
                post.author
            }" post-date="${post.date}" post-banner="../img/${
                post.banner
            }">${markdownToHtml(post.content)}</post-main>
			<style>
				img {
					width: 50%;
				}
			</style>
            `,
            `../components.js`,
        ),
        'utf8',
        'w+',
    ),
);
