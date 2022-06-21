class calculator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add() {
        return this.x + this.y;
    }

    substract() {
        return this.x - this.y;
    }

    multiply() {
        return this.x * this.y;
    }

    divide() {
        if (this.y !== 0) {
            return this.x/this.y;
        } else {
            return "You can't divide by 0";
        }
    }

}

module.exports = calculator;