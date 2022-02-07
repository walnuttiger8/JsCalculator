export class Rpn {
    _isNumeric(str) {
        if (typeof str != "string") return false
        return !isNaN(str) &&
            !isNaN(parseFloat(str))
    }

    convert(input) {
        let result = [];
        let operatorStack = [];

        input.forEach((element) => {
            if (element === "") {
                return;
            }

            if (this._isNumeric(element)) {
                result.push(Number(element));
                return;
            }
            let operator = operatorFactory(element);

            if (operatorStack.length === 0 || operatorStack[operatorStack.length - 1].prioriy < operator.prioriy) {
                operatorStack.push(operator);
                return;
            }

            while (operatorStack[operatorStack.length - 1].prioriy >= operator.prioriy) {
                result.push(operatorStack.pop());
            }
        });

        while (operatorStack.length > 0) {
            result.push(operatorStack.pop());
        }


        return result;
    }

    evaluate(expression) {
        let stack = [];

        expression.forEach((element) => {
            if (element instanceof Operator) {
                let result = element.execute(stack);
                stack.push(result);
            } else {
                stack.push(element);
            }
        });

        return stack.pop();
    }
}