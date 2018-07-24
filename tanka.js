


// Bank of words used in Tanka generation

var bank = [
   {
   	  'name':'trees',
   	  'plural':true,
   	  'object':true,
   	  'syl':1
   },
   {
   	  'name':'you',
   	  'singular':true,
   	  'pronoun':true,
   	  'object':true,
   	  'syl':1
   },
   {
   	  'name':'i',
   	  'singular':true,
   	  'pronoun':true,
   	  'object':true,
   	  'syl':1
   },
   {
   	  'name':'the grass',
   	  'singular':true,
   	  'object':true,
   	  'syl':2
   },
   {
   	  'name':'flourishes',
   	  'singular':true,
   	  'action':true,
   	  'syl':3
   }
];



// Gets all the words with a specific attirbute
function get_by_attr(wbank, attribute) {
	var words = [];
	for (var i = wbank.length - 1; i >= 0; i--) {
		if(attribute in wbank[i]) words.push(wbank[i]);
	}
	return words;
}

// Gets all the words with multiple attributes.
function get_by_attrs(wbank /*Arbuments*/) {
	var words = [];
	for (var i = wbank.length - 1; i >= 0; i--) {
		for(var j = 1; j < arguments.length;j++) {
			if(arguments[j] in wbank[i]) words.push(wbank[i]);
		}
	}
	return words;
}