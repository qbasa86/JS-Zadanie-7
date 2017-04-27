var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = [];
allNames = allNames.concat(maleNames, femaleNames);
var newName = "Marian";
if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
}