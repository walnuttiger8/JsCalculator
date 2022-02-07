import {Rpn} from "./rpn.js";

export class Calculator {

	calculate(input) {
	    let rpn = new Rpn()
        let expression = rpn.convert(input);
        return rpn.evaluate(expression);
	}
}