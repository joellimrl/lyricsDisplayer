var elementsInsideBody = [...document.body.getElementsByTagName("*")];
// This makes an array of everything inside the body tag

//a function that loops through every single item
function findAndReplace() {
	elementsInsideBody.forEach((element) => {
		element.childNodes.forEach((child) => {
			if (child.nodeType === 3) {
				replaceText(child);
			}
		});
	});
}

function replaceText(node) {
	let value = node.nodeValue;
	// woman
	value = value.replace(/\bman\b/g, "woman");
	value = value.replace(/\bMan\b/g, "Woman");
	value = value.replace(/\bmen\b/g, "women");
	value = value.replace(/\bMen\b/g, "Women");
	value = value.replace(/\bMAN\b/g, "WOMAN");
	value = value.replace(/\bMEN\b/g, "WOMEN");

	// female
	value = value.replace(/\bmale\b/g, "female");
	value = value.replace(/\bMale\b/g, "Female");
	node.nodeValue = value;
}

window.onload = findAndReplace();
