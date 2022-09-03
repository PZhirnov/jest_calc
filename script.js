"use strict";


class CalculatorAPP {
    #a;
    #b;
    validNumbers = {
        num_a: false,
        num_b: false,
        zero_b: false,
    };

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    set a(value) {
        this.validNumbers.num_a = !isNaN(value) && value != null ? true : false;
        this.#a = this.validNumbers.num_a ? Number(value) : undefined;
    }

    set b(value) {
        this.validNumbers.num_b = !isNaN(value) && value != null ? true : false;
        this.#b = this.validNumbers.num_b ? Number(value) : undefined;
        this.validNumbers.zero_b = true ? Number(value) != 0 : false;
    }

    addition() {
        if (this.validNumbers.num_a && this.validNumbers.num_b) {
            return this.#a + this.#b;
        } else {
            return undefined;
        }

    }

    substraction() {
        if (this.validNumbers.num_a && this.validNumbers.num_b) {
            return this.#a - this.#b;
        } else {
            return undefined;
        }
    }

    multiplication() {
        if (this.validNumbers.num_a && this.validNumbers.num_b) {
            return this.#a * this.#b;
        } else {
            return undefined;
        }
    }

    division() {
        if (this.validNumbers.num_a && this.validNumbers.num_b && this.validNumbers.zero_b) {
            return this.#a / this.#b;
        } else {
            return undefined
        }
    }
}

module.exports = { CalculatorAPP }


