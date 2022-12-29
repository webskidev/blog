let template = document.createElement('template');

template.innerHTML = `
  <footer>
    Copyright
  </footer>
`

export class BlogFooter extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}