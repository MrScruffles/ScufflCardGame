// Dark Theme
var container = document.querySelector('.container');
var themeButton = document.querySelector('.darkButton');

themeButton.onclick = function (event) {
	this.classList.toggle("darkButton_dark");
	container.classList.toggle("container_dark");
};

// Calculator
var result = document.querySelector("input.inputWrap__result");
var number = document.querySelectorAll("._number");
var equality = document.querySelector("._action[action=equality]");
var clear = document.querySelector("._action[action=clear]");
var negate = document.querySelector("._action[action=negate]")
var point = document.querySelector("._action[action=point]")

number.forEach(function (elem) {
	var n = elem.innerText;
	elem.onclick = function (event) { return result.value = result.value + n; };
});

var buffer = [];

var evaluate = function (buffer) {
	var secondArgument = buffer.pop().value;
	var operator = buffer.pop().value;
	var firstArgument = buffer.pop().value;

	if (operator === "plus") {
		return firstArgument + secondArgument;
	}
	else if (operator === "minus") {
		return firstArgument - secondArgument;
	}
	else if (operator === "multiplication") {
		return firstArgument * secondArgument;
	}
	else if (operator === "divide") {
		return firstArgument / secondArgument;
	}
	else if (operator === "percent") {
		return firstArgument % secondArgument;
	}
};

var opCallback = function (actionName) {
	return function (event) {
		if (buffer && buffer.length) {
			buffer.push({ type: "value", value: parseFloat(result_1.value, 10) });

			var result_1 = evaluate(buffer);
			buffer.push({ type: "value", value: result_1 });
			buffer.push({ type: "action", value: actionName });
			result_1.value = "";
		}
		else {
			buffer.push({ type: "value", value: parseFloat(result.value, 10) });
			buffer.push({ type: "action", value: actionName });
			result.value = "";
		}
	};
};

for (var i = 0, mathAction = ["plus", "minus", "multiplication", "divide", "percent"]; i < mathAction.length; i++) {
	var actionName = mathAction[i];
	mathOperator = document.querySelector("._action[action=" + actionName + "]")
	mathOperator.onclick = opCallback(actionName);
}

equality.onclick = function (event) {
	buffer.push({ type: "value", value: parseFloat(result.value, 10) });
	result.value = evaluate(buffer).toString();
};

clear.onclick = function (event) {
	result.value = "";
	while (buffer.length)
		buffer.pop();
};

negate.onclick = function (event) {
	return result.value = -parseFloat(result.value, 10);
};
point.onclick = function (event) {
	return result.value = parseFloat(result.value) + '.';
};
