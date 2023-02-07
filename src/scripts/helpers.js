/** Crear lista aleatoria
 * @param {number} lim
*/
export const getRand = lim => Math.ceil(Math.random() * lim);

/* https://www.joshwcomeau.com/snippets/javascript/range/ */
export const range = (start, end, step = 1) => {
  const output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

/**
 * Posee una lista de números escogidos y una función para elegir uno nuevo, dentro del límite establecido
*/
export class NumbersPool {
  #numbersList = [];
  constructor(limit) {
    this.limit = limit;
  }

  get numbersList() {
    return this.#numbersList;
  };

  pullNumber = () => {
    const { limit } = this;

    /** Crea un array de los números sin escoger, es decir, los que no están en @argument this.numbersList */
    const unchosenNums = range(1, limit + 1).filter(num => this.numbersList.indexOf(num) === -1);

    /* Todos los números fueron elegidos */
    if (unchosenNums.length === 0) return null;

    // Un número al azar de los sin escoger
    const newNumber = unchosenNums[getRand(unchosenNums.length) - 1];
    this.numbersList.push(newNumber);
    return newNumber;
  };

  pullMultiple(times) {
    for (let i = 0; i < times; i++) {
      this.pullNumber();
    }
  }
}

export const bothPlayers = {
  player: "0",
  pc: "0"
};

export function setPlayer(playerType) {
  bothPlayers[playerType] = "1";
}
