// Utility functions for getting text and word objects from a text bank

// Gets all the objects with a specific attirbute
function get_by_attr(wbank, attribute) {
	var words = [];
	for (var i = wbank.length - 1; i >= 0; i--) {
		if(attribute in wbank[i]) words.push(wbank[i]);
	}
	return words;
}
exports.get_by_attr = get_by_attr;

// Gets all the objects with multiple attributes.
function get_by_attrs(wbank /*Arbuments*/) {
	var words = [];
	for (var i = wbank.length - 1; i >= 0; i--) {
		for(var j = 1; j < arguments.length;j++) {
			if(arguments[j] in wbank[i]) words.push(wbank[i]);
		}
	}
	return words;
}
exports.get_by_attrs = get_by_attrs;


function get_by_name(wbank, name) {
	var words = [];
	for (var i = wbank.length - 1; i >= 0; i--) {
		if(wbank[i].name == name) {
			words.push(wbank[i]);
			return words;
		}
	}
	return words;
}
exports.get_by_name = get_by_name;