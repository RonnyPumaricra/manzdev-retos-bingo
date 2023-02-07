class BingoNumber extends HTMLElement {
  constructor() {
    super();
    this.value = this.getAttribute("value");
  }

  static get styles() {
    return /* css */`
      bingo-number {
        background: white;
        display: grid;
        place-items: center;

        width: 50px;
        height: 45px;
      }
      bingo-number[chosen] {
        background: transparent;
        text-decoration: line-through;
      }

      
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
      <style>${BingoNumber.styles}</style>
      ${this.value}
    `;
  }
}

window.customElements.define("bingo-number", BingoNumber);
