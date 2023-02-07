class ModalWrapper extends HTMLElement {
  constructor() {
    super();
    console.log("Here");
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        background: hsl(0deg 0% 0% / 30%);
        position: fixed;
        inset: 0;

        display: grid;
        place-items: center;
      }
      .modal {
        width: 500px;
        padding: 2rem 1rem;
        border-radius: 10px;
        box-shadow: 
          5px 3px 30px hsl(0deg 0% 0% / 90%),
          5px 3px 10px 5px hsl(0deg 0% 0% / 30%);
        background: white;
      }
      slot[name="title"] {
        margin: 0;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    // implementation
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
      <style>${ModalWrapper.styles}</style>
      <div class="modal">
        <slot name="title"></slot>
      </div>
    `;
  }
}
console.log("here");
customElements.define("modal-wrapper", ModalWrapper);
