function getFirstLetterFromFirstName(names) {
	var letter = [];
	

	for (var i = 0; i < names.length; i++) {
		var object = names[i];
		var firstletter = object.firstName;
		var lettertoextract = firstletter[0];

		letter.push(lettertoextract.toUpperCase());
	}

	return letter;	
}



var names = [{
  firstName: "pedro",
  lastName: "Paramo"
}, {
  firstName: "chuck",
  lastName: "Norris"
}, {
  firstName: "vicente",
  lastName: "Fernandez"
}, {
  firstName: "electric",
  lastName: "Blue"
}];

getFirstLetterFromFirstName(names); // => ["P", "C", "V", "E"]

console.log(getFirstLetterFromFirstName(names));