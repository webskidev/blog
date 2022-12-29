const template = document.createElement('template');

template.innerHTML = `
  <navbar>
    <ul>
      <li>Blog</li>
      <li>O mnie</li>
    </ul>
  </navbar>
`

export class BlogNavbar extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}