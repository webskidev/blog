const template = document.createElement('template');

template.innerHTML = `
  <style>
    a {
      text-decoration: none;
      color: var(--font-color-primary);
    }
    
    a:hover {
      color: var(--color-primary);
    }

    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  </style>

  <header class="navbar">
    <a href="#">webskydev</a>
    <nav>
      <ul>
        <li>Blog</li>
        <li>O mnie</li>
      </ul>
    </nav>
  </header>
`

export class BlogNavbar extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}