import { NumbersPool, setPlayer } from "../helpers";

class NumbersWrapper extends HTMLElement {
  /** @property {Array.<number>} */
  #chosenNumbers = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.userType = this.getAttribute("user-type");
    this.amount = parseInt(this.getAttribute("amount"));

    // Read chosen-numbers info. Default: empty arr []
    this.updateChosenNumbers();
    this.innitBingoNumbers();
  }

  static get styles() {
    return /* css */`
      :host {
        flex: 1;

        --spacing: 6px;
        /* 
        display: grid;
        grid-template: repeat(3, 1fr) / repeat(5, 1fr);
        */
       display: flex;
       flex-wrap: wrap;
       justify-content: center;

        margin: var(--spacing);
        margin-top: 0;
        gap: var(--spacing);

        font-size: 1.2rem;
        font-weight: 600;
      }
    `;
  }

  innitBingoNumbers() {
    const newPool = new NumbersPool(30); // Cambiar a 90
    newPool.pullMultiple(this.amount);
    this.bingoNumbers = newPool.numbersList;
  }

  updateChosenNumbers() {
    this.#chosenNumbers = this.getAttribute("chosen-numbers")?.split(" ").map(el => parseInt(el)) ?? [];

    for (const num of this.#chosenNumbers) {
      // console.log(num);
      const chosenSquare = this.shadowRoot.querySelector(`bingo-number[value="${num}"]`);
      if (!chosenSquare) continue;

      if (!chosenSquare.hasAttribute("chosen")) {
        chosenSquare.toggleAttribute("chosen");
      }
    }

    /* Verifica si se acabó toda la cartilla */
    const allChildren = this.shadowRoot.querySelectorAll("bingo-number[chosen]");
    if (allChildren.length === this.amount) {
      setPlayer(this.userType);
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    let innerHTML = /* html */`
      <style>${NumbersWrapper.styles}</style>
    `;
    // const arr = randomizeNumbers(15).until(90);

    for (const value of this.bingoNumbers) {
      innerHTML += /* html */`
        <bingo-number value="${value}"></bingo-number>
      `;
    }

    this.shadowRoot.innerHTML = innerHTML;
  }

  static get observedAttributes() {
    return ["chosen-numbers"];
  }

  attributeChangedCallback(name) {
    if (name === "chosen-numbers") {
      this.updateChosenNumbers();
    }
  }
}

window.customElements.define("numbers-wrapper", NumbersWrapper);
