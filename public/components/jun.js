class Jun extends HTMLElement {
    static observedAttributes = ['iconColor', 'iconWidth'];

    connectedCallback() {
        const iconColor = this.attributes.iconColor.value || 'white';
        const iconWidth = this.attributes.iconWidth.value || '64px';
        this.innerHTML = `
        <svg viewBox="0 0 465.45 186.18" fill=${iconColor} width=${iconWidth}><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M465.45,69.82V186.18H418.9V69.82a23.27,23.27,0,0,0-46.53-.4V128c0,.25,0,.5,0,.75v57.44H325.81V185a58.56,58.56,0,0,1-11.62,1.16h0a58,58,0,0,1-38.63-14.68,69.81,69.81,0,0,1-112.64-55.14V46.54H139.64v69.82A69.82,69.82,0,0,1,0,116.36V93.09H46.55v23.27a23.27,23.27,0,0,0,46.54,0V46.54H46.55V0H209.46V116.36a23.27,23.27,0,0,0,46.54,0V0h46.55V128a11.64,11.64,0,0,0,11.63,11.64h0a11.63,11.63,0,0,0,11.62-11.34V0h46.56V4a69.84,69.84,0,0,1,93.08,65.84Z"/></g></g></svg>
        `;
    }
}

customElements.define('jun', Jun);
