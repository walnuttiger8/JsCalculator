import {Calculator} from "./calculator.js";
import {InputGateway} from "./input_gateway.js";
import {controlButtonFactory} from "./control_button.js";

const container = $("#container");
const buttonContainer = $(".control-button-wrapper");
const input = new InputGateway();
const calculator = new Calculator();

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operations = ['+', '-', '*', '/', '%', 'sqrt', '^'];
const commands = ['C'];


function controlButtonClickHandler(controlButton) {
    input.sendSymbol(controlButton.value);
}

function equalButtonClickHandler() {
    let v = input.getValue();
    let result = calculator.calculate(v);
    input.sendSymbol(result);
}


$(function () {
    container.append(input.container);

    let c = numbers.concat(operations.concat(commands));

    let controls = controlButtonFactory(c, controlButtonClickHandler);

    controls = controls.concat(controlButtonFactory(['='], equalButtonClickHandler))


    controls.forEach((control) => {
        buttonContainer.append(control.element);
    });

});


