class ChosenNumbersWrapper extends HTMLElement {
  /** @type {Array.<number>} */
  #chosenNumbers = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
      :host {
        border: 2px solid white;
        grid-column: 1 / 4;

        display: flex;
        flex-wrap: wrap;
        align-items: start;
        align-content: start;
        padding: 20px;
        gap: 4px;
      }
      bingo-number {

        font-size: ${20 / 16}rem;
        font-weight: 600;

      }
    `;
  }

  updateChosenNumbers() {
    this.#chosenNumbers = this.getAttribute("chosen-numbers")?.split(" ").map(el => parseInt(el)) ?? [];

    // for (const num of this.#chosenNumbers) {
    //   // console.log(num);
    //   const chosenSquare = this.shadowRoot.querySelector(`bingo-number[value="${num}"]`);
    //   if (!chosenSquare) continue;

    //   if (!chosenSquare.hasAttribute("chosen")) {
    //     chosenSquare.toggleAttribute("chosen");
    //   }
    // }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    let innerHTML = /* html */`
      <style>${ChosenNumbersWrapper.styles}</style>
    `;

    for (const number of this.#chosenNumbers) {
      innerHTML += /* html */`
        <bingo-number value="${number}"></bingo-number>
      `;
    }

    this.shadowRoot.innerHTML = innerHTML;
  }

  static get observedAttributes() {
    return ["chosen-numbers"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "chosen-numbers") {
      this.updateChosenNumbers();
      this.render();
    }
  }
}

window.customElements.define("chosen-numbers-wrapper", ChosenNumbersWrapper);
