const template = document.createElement('template');


template.innerHTML = /* html */`
  <style>
    a {
      text-decoration: none;
      color: var(--color-primary);
    }

    a:hover, a:focus {
      color: var(--color-primary-accent);
    }

    .logo {
      font-weight: 700;
    }

    .navbar {
      display: grid;
      grid-auto-columns: 1fr;
      grid-auto-flow: column;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 4.8rem;
      border-bottom: 1px solid var(--color-light-gray);
      background: var(--color-background);
      position: sticky;
      top: 0;
    }

    .nav-links {
      list-style-type: none;
      display: flex;
      align-items: center;
      gap: 2.4rem;
    }

  </style>

  <header class="navbar">
    <span class="logo">webskydev</span>
    <nav>
      <ul class="nav-links">
        <li><a href="">blog</a></li>
        <li><a href="">about me</a></li>
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