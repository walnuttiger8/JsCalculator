export class ControlButton {
    constructor(value) {
        this.value = value;
        this.element = $('<button/>', {
            class: 'control-button',
            text: value
        });
    }

    addClickHandler(handler) {
        let self = this
        this.element.click(function () {
            handler(self);
        });
    }
}


export function controlButtonFactory(symbols, handler) {
    let controlButtons = [];
    for (let i = 0; i < symbols.length; i++) {
        let controlButton = new ControlButton(symbols[i]);
        controlButton.addClickHandler(handler);
        controlButtons.push(controlButton);
    }
    return controlButtons;
}