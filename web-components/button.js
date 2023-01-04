let template = document.createElement('template');

template.innerHTML = /* html */`
  <style>
    .button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 1rem 3.2rem;
      background: none;
      border: 1px solid var(--color-primary);
      border-radius: 24px;
      color: var(--color-primary);
      background: var(--color-background);
      letter-spacing: 0.5px;
      cursor: pointer;
      font-size: 1.8rem;
    }
  </style>

  <button class="button">
    <slot></slot>
  </button>
`

export class BlogButton extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}