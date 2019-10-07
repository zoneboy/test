
var myInput = document.getElementsByTagName("TEXTAREA")[0];
var button = document.getElementById("myButton");
var myTxt = document.getElementById("txt");
var resetButton = document.getElementById("reset");
var getId = document.getElementsByClassName('demoid');


//This is the code that returns the total characters
function inputCharacters() {
	return myInput.value.length;
}

//This is the code that returns the total words
//It includes the regex to prevent space from being counted
function inputWords() {
	var words = myInput.value;
	words =  words.replace(/(^\s*)|(\s*$)/gi,"");
	words = words.replace(/[ ]{2,}/gi, " ");
	words = words.replace(/\n /,"\n");
	var ecch = words.split(' ');
	return (ecch.length);
}

// This is the words function. I set it an attribute of demoid
//This demoid make it possible for me to reset the field in reset() function
function addTextAgain() {
	var text = document.createElement("span");
	text.setAttribute("class", "demoid");
	text.innerText = ("The " + "number of words is" + " " + inputWords());
	myTxt.appendChild(text);
}

// This is the characters function. I set it an attribute of demoid
//This demoid make it possible for me to reset the field in reset() function
function addText() {
	var text = document.createElement("span");
	text.setAttribute("class", "demoid");
	text.innerText = ("The " + "number of characters is" + " " + inputCharacters());
	myTxt.appendChild(text);
}

// This is the function that tells what happens when Analyse button is clicked
function buttonClick() {
	button.addEventListener("click", function gyu() {
		if(inputCharacters() > 0){
			addText();
			addTextAgain();
			button.disabled = true;
		} 
	}, false);
}

buttonClick();

//Reset function to clear text area
function reset() {
	if(inputCharacters() > 0){
			myInput.value = "";
	}		
}
// This is the function that tells what happens when reset button is clicked
// I iterated over the getId which is the text reported back after you click analyse
//The iteration make it possible for me to now delete all by using reset button
resetButton.addEventListener("click", function() {
	reset();
	button.disabled = false;
	for (var i = 0; i < getId.length; i++){
		// console.log(d[i])
		getId[i].style.display = 'none';
	}
});