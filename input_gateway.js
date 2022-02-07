export class InputGateway {
	constructor () {
		this.value = "";
		this.container = $("<div/>", {
			class: "input-gateway"
		});
	}

	_isNumber(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	}

	sendSymbol(symbol) {
		if (symbol === "C") {
			this._clear();
		} else if (this._isNumber(symbol)) {
			this.value += symbol;
		} else {
			this.value += " " + symbol + " ";
		}
		this._updateContainer();
	}

	_updateContainer() {
		this.container.text(this.value);
	}

	_clear() {
		this.value = "";
		this._updateContainer();
	}

	getValue() {
		let v = this.value.trim().split(' ');
		this._clear();
		return v;
	}
}	