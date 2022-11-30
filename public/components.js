class IconJun extends HTMLElement {
    connectedCallback() {
        const iconColor = this.getAttribute('iconColor') || 'white';
        const iconWidth = this.getAttribute('iconWidth') || '64px';
        this.innerHTML = `
        <svg viewBox="0 0 465.45 186.18" fill=${iconColor} width=${iconWidth}><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M465.45,69.82V186.18H418.9V69.82a23.27,23.27,0,0,0-46.53-.4V128c0,.25,0,.5,0,.75v57.44H325.81V185a58.56,58.56,0,0,1-11.62,1.16h0a58,58,0,0,1-38.63-14.68,69.81,69.81,0,0,1-112.64-55.14V46.54H139.64v69.82A69.82,69.82,0,0,1,0,116.36V93.09H46.55v23.27a23.27,23.27,0,0,0,46.54,0V46.54H46.55V0H209.46V116.36a23.27,23.27,0,0,0,46.54,0V0h46.55V128a11.64,11.64,0,0,0,11.63,11.64h0a11.63,11.63,0,0,0,11.62-11.34V0h46.56V4a69.84,69.84,0,0,1,93.08,65.84Z"/></g></g></svg>
        `;
    }
}

class IconGithub extends HTMLElement {
    connectedCallback() {
        const iconColor = this.getAttribute('iconColor') || 'white';
        const iconWidth = this.getAttribute('iconWidth') || '64px';
        this.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.58 31.77" fill=${iconColor} width=${iconWidth}><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.82.15,1.11-.36,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3,6.3,0,0,1,1.67-4.37,5.94,5.94,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67A5.91,5.91,0,0,1,25,11.07a6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z" /></g></g></svg>
        `;
    }
}

class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                .header {
                    width: 100$;
                    border-bottom: 1px solid black;
                    margin: 0;
                    padding: 2em 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            </style>
            <div class="header">
                <svg viewBox="0 0 465.45 186.18" class="header__jun" fill="var(--black)" width="128px"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M465.45,69.82V186.18H418.9V69.82a23.27,23.27,0,0,0-46.53-.4V128c0,.25,0,.5,0,.75v57.44H325.81V185a58.56,58.56,0,0,1-11.62,1.16h0a58,58,0,0,1-38.63-14.68,69.81,69.81,0,0,1-112.64-55.14V46.54H139.64v69.82A69.82,69.82,0,0,1,0,116.36V93.09H46.55v23.27a23.27,23.27,0,0,0,46.54,0V46.54H46.55V0H209.46V116.36a23.27,23.27,0,0,0,46.54,0V0h46.55V128a11.64,11.64,0,0,0,11.63,11.64h0a11.63,11.63,0,0,0,11.62-11.34V0h46.56V4a69.84,69.84,0,0,1,93.08,65.84Z"/></g></g></svg>
            </div>
        `;
    }
}

// Attributes: href(post link), thumbnail, title, date, author
class PostListItem extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'post-list-item');

        const postLink = document.createElement('a');
        postLink.href = this.getAttribute('post-href');

        const postThumbnail = document.createElement('img');
        postThumbnail.setAttribute('class', 'post-thumbnail');
        postThumbnail.src = this.hasAttribute('post-thumbnail')
            ? this.getAttribute('post-thumbnail')
            : './img/default-image.jpg';

        const postTitle = document.createElement('span');
        postTitle.setAttribute('class', 'post-title');
        postTitle.textContent = this.getAttribute('post-title');

        const postInfo = document.createElement('span');
        postInfo.setAttribute('class', 'post-info');
        const d = new Date(`${this.getAttribute('post-date')}`);
        postInfo.textContent = `${d.getFullYear()}-${
            d.getMonth() + 1
        }-${d.getDate()} | ${this.getAttribute('post-author')}`;

        const style = document.createElement('style');
        style.textContent = `
            a {
                color: var(--black);
                text-decoration: none;
            }

            .post-list-item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                border: 1px solid var(--black);
            }

            .post-thumbnail {
                margin: 0;
                padding: 0;
                width: 100%;
                aspect-ratio: 1;
                object-fit: cover;
                margin-bottom: .5em;
            }

            .post-title {
                margin: 0;
                margin-left: .5rem;
                display: block;
                font-size: 1.25em;
            }

            .post-info {
                font-size: 0.75em;
                color: var(--gray);
                margin: 0;
                margin-top: 0.25rem;
                margin-left: .5rem;
                margin-bottom: .5rem;
                padding: 0;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(postLink);
        postLink.appendChild(postThumbnail);
        postLink.appendChild(postTitle);
        wrapper.appendChild(postInfo);
    }
}

// class PostListItem extends HTMLElement {
//     constructor() {
//         super();

//         this.innerHTML = `
//             <div class="post-list-item">
//                 <a href=${this.getAttribute('href')}>
//                     <div class="post-link">
//                         <img src=${this.getAttribute(
//                             'thumbnail',
//                         )} class="post-thumbnail" />
//                         <h1 class="post-title">${this.getAttribute(
//                             'title',
//                         )}</h1>
//                     </div>
//                 </a>
//                 <div class="post-info">
//                     <span class="post-date">${this.getAttribute('date')}</span>
//                     <span class="post-author">${this.getAttribute(
//                         'author',
//                     )}</span>
//                 </div>
//             </div>
//         `;
//     }
// }

class PostMain extends HTMLElement {
    constructor() {
        super();

        // const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'post-main');

        const postHeader = document.createElement('div');
        postHeader.setAttribute('class', 'post-header');

        const postBanner = document.createElement('img');
        postBanner.src = this.getAttribute('post-banner');
        postBanner.setAttribute('class', 'post-banner');

        const postInfo = document.createElement('div');
        postInfo.setAttribute('class', 'post-info');

        const postTitle = document.createElement('h1');
        postTitle.setAttribute('class', 'post-title');
        postTitle.textContent = this.getAttribute('post-title');

        const postAuthor = document.createElement('p');
        postAuthor.setAttribute('class', 'post-author');
        postAuthor.textContent = this.getAttribute('post-author');

        const postDate = document.createElement('p');
        postDate.setAttribute('class', 'post-date');
        const d = new Date(this.getAttribute('post-date'));
        postDate.textContent = `${d.getFullYear()}-${
            d.getMonth() + 1
        }-${d.getDate()}`;

        const postContent = document.createElement('div');
        postContent.setAttribute('class', 'markdown-body post-content');
        postContent.innerHTML = this.innerHTML;
        this.innerHTML = '';

        const style = document.createElement('style');
        style.textContent = `
            .post-main {
                width: calc(100% - 20vw);
                margin: 2em auto;
            }

            .post-info {
                padding: 1em;
                padding-top: 0;
                display: flex;
                align-items: center;
                border-bottom: 1px solid var(--gray)
            }

            .post-title {
                margin: 0;
                padding: 0;
            }

            .post-author {
                margin: 0 1rem;
                padding: 0 1rem;
                border-right: 1px solid black;
                border-left: 1px solid black;
                display: inline-block;
            }

            .post-date {
                margin: 0;
                padding: 0;
                display: inline-block;
            }

            .post-content {
                padding: 1em;
                width: 100%;
                background-color: var(--white);
            }

            .post-banner {
                width: 100%;
                aspect-ratio: 2 / 1;
                object-fit: cover;
                margin-bottom: 1em;
            }

            @media screen and (max-width: 864px) {
                .post-info {
                    flex-direction: column;
                }

                .post-author {
                    border: none;
                    margin: 0;
                    padding: 0;
                }
            }

            @media screen and (min-width: 577px) and (max-width: 864px) {
                .post-main {
                    width: calc(100% - 5vw);
                }

                .post-content {
                    padding: .5em;
                }
            }

            @media screen and (max-width: 576px) {
                .post-main {
                    width: 100%;
                    margin-top: 0;
                }

                .post-content {
                    padding: .5em;
                }
            }
        `;

        // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown-light.css" integrity="sha512-1d9gwwC3dNW3O+lGwY8zTQrh08a41Ejci46DdzY1aQbqi/7Qr8Asp4ycWPsoD52tKXKrgu8h/lSpig1aAkvlMw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute(
            'href',
            'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown-light.css',
        );
        linkElem.setAttribute(
            'integrity',
            'sha512-1d9gwwC3dNW3O+lGwY8zTQrh08a41Ejci46DdzY1aQbqi/7Qr8Asp4ycWPsoD52tKXKrgu8h/lSpig1aAkvlMw==',
        );
        linkElem.setAttribute('crossorigin', 'anonymous');
        linkElem.setAttribute('referrerpolicy', 'no-referrer');

        const hljsLink = document.createElement('link');
        const hljsSrc = document.createElement('script');
        const hljsScript = document.createElement('script');
        hljsLink.setAttribute('rel', 'stylesheet');
        hljsLink.setAttribute(
            'href',
            'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/github.min.css',
        );
        hljsSrc.setAttribute(
            'src',
            'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js',
        );
        hljsScript.textContent = `hljs.highlightAll();`;

        this.appendChild(hljsLink);
        // shadow.appendChild(hljsSrc);
        // shadow.appendChild(hljsScript);
        this.appendChild(style);
        this.appendChild(linkElem);
        this.appendChild(wrapper);
        wrapper.appendChild(postHeader);
        postHeader.appendChild(postBanner);
        postHeader.appendChild(postInfo);
        postInfo.appendChild(postTitle);
        postInfo.appendChild(postAuthor);
        postInfo.appendChild(postDate);
        wrapper.appendChild(postContent);
    }
}

customElements.define('icon-jun', IconJun);
customElements.define('icon-github', IconGithub);
customElements.define('custom-header', CustomHeader);
customElements.define('post-list-item', PostListItem);
customElements.define('post-main', PostMain);
