class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHtml = `
            <div class="header">
                <jun />
                <github />
            </div>
        `;
    }
}

customElements.define('custom-header', CustomHeader);
