class BingoCard extends HTMLElement {
  constructor() {
    super();
    this.userType = this.getAttribute("type");
    // Read chosen-numbers info. Default: empty string
    this.chosenNumbers = this.getAttribute("chosen-numbers") ?? "";

    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        margin: 25px;
        background: var(--primary);
        box-shadow: 2px 2px 8px 0 hsl(0deg 0% 10% / 80%);
        display: flex;
        flex-direction: column;
      }

      h2 {
        margin-block: .5rem;
        color: white;

        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
      }
    `;
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.render();
  }

  render() {
    return /* html */`
      <style>${BingoCard.styles}</style>
      <h2>${this.userType}</h2>
      <numbers-wrapper user-type="${this.userType}" amount="15"></numbers-wrapper>
    `;
  }

  static get observedAttributes() {
    return ["chosen-numbers"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "chosen-numbers") {
      this.shadowRoot.querySelector("numbers-wrapper").setAttribute("chosen-numbers", newVal);
    }
  }
}

customElements.define("bingo-card", BingoCard);
