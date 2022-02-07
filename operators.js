class Operator {

    constructor() {
        this.prioriy = 0;
    }

    execute(operandStack) {
        throw new Error("Not implemented");
    }
}

class SumOperator extends Operator {

    constructor() {
        super();
        this.prioriy = 1;
    }

    execute(operandStack) {
        let firstOperand = operandStack.pop();
        let secondOperand = operandStack.pop();
        return firstOperand + secondOperand;
    }
}

class SubOperator extends Operator {

    constructor() {
        super();
        this.prioriy = 1;
    }

    execute(operandStack) {
        let secondOperand = operandStack.pop();
        let firstOperand = operandStack.pop();
        return firstOperand - secondOperand;
    }
}

class DivOperator extends Operator {

    constructor() {
        super();
        this.prioriy = 2;
    }

    execute(operandStack) {
        let secondOperand = operandStack.pop();
        let firstOperand = operandStack.pop();
        return firstOperand / secondOperand;
    }
}

class MulOperator extends Operator {

    constructor() {
        super();
        this.prioriy = 2;
    }

    execute(operandStack) {
        let firstOperand = operandStack.pop();
        let secondOperand = operandStack.pop();
        return firstOperand * secondOperand;
    }
}

class PowOperator extends Operator {

    constructor() {
        super();
        this.prioriy = 3;
    }

    execute(operandStack) {
        let firstOperand = operandStack.pop();
        let secondOperand = operandStack.pop();
        return secondOperand ** firstOperand;
    }
}

class DivModOperator extends Operator {

    constructor() {
        super();
        this.prioriy = 2;
    }

    execute(operandStack) {
        let secondOperand = operandStack.pop();
        let firstOperand = operandStack.pop();
        return firstOperand % secondOperand;
    }
}

class RootOperator extends Operator {

    constructor() {
        super();
        this.prioriy = 3;
    }

    execute(operandStack) {
        let operand = operandStack.pop()
        return Math.sqrt(operand);
    }
}


function operatorFactory(symbol) {
    switch (symbol) {
        case '+':
            return new SumOperator();
        case '-':
            return new SubOperator();
        case '*':
            return new MulOperator();
        case '/':
            return new DivOperator();
        case '%':
            return new DivModOperator();
        case '^':
            return new PowOperator();
        case 'sqrt':
            return new RootOperator();
        default:
            throw new Error("Unknown symbol" + symbol);
    }
}