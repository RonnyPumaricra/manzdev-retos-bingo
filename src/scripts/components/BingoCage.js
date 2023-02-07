class BingoCage extends HTMLElement {
  constructor() {
    super();
    // implementation
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        color: hsl(0deg 0% 20% / 20%);
        cursor: pointer;
        background-image: radial-gradient(
          #eeeeee,
          currentColor
        );
        border-radius: 50%;
        border: 2px solid black;
        transition: color 200ms;
        user-select: none;
      }
      :host(:hover) {
        color: hsl(221deg 90% 80% / 30%);
      }
      a {
        display: block;
        border-radius: 8px;
        position: relative;
        
        font-size: 1.5rem;
        color: white;
        text-decoration: none;
      }

      a:before {
        content: "";
        position: absolute;
        inset: 0;

        border-radius: inherit;

        background: hsl(20deg 90% 35%);
      }

      div {
        isolation: isolate;
        padding: .5rem 1rem;
        background: hsl(10deg 100% 45%);
        
        border-radius: inherit;

        transition: transform 200ms;
      }

      :host(:hover) div {
        transform: translateY(-0.5rem);
      }
      :host(:active) div {
        transform: translateY(-0.1rem);
        transition-duration: 50ms;
      }
    `;
  }

  connectedCallback() {
    // implementation
    this.shadowRoot.innerHTML = /* html */`
      <style>${BingoCage.styles}</style>
      ${this.render()}
    `;
  }

  render() {
    return /* html */ `
      <a href="#">
        <div>Sacar número</div>
      </a>
    `;
  }
}

window.customElements.define("bingo-cage", BingoCage);
