let template = document.createElement('template');

template.innerHTML = /* html */`
  <style>
    .footer {
      padding: 2.4rem;
      text-align: center;
      border-top: solid 1px var(--color-light-gray);
      background: var(--color-background);
      margin-top: 20rem;
    }

    a {
      text-decoration: none;
      color: var(--color-primary);
    }

    a:hover, a:focus {
      color: var(--color-primary-accent);
    }

  </style>
  <footer class="footer">
    <a href="#">&copy;webskydev</a>
  </footer>
`

export class BlogFooter extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}