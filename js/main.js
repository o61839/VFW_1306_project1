/* 	Jenney Grover
	VFW 1306
	Project 1
	The Satchel
	June 13, 2013
*/

//JavaScript Methods: .getElementByID();

var nameBook = document.getElementById("bname");
var nameAuthor = document.getElementById("aname");
var isbnNumber = document.getElementById("isbn");
var readBook = document.getElementById("read");
var readBookNot = document.getElementById("not_read");
var dateAdded = document.getElementById("dateAdded");
var datePublished = document.getElementById("datePublished");
var purchased = document.getElementById("purchased");
var borrowed = document.getElementById("borrowed");
var paperback = document.getElementById("paperback");
var hardcover = document.getElementById("hardcover");
var mobile = document.getElementById("mobile");
var fiction = document.getElementById("fiction");
var nonFiction = document.getElementById("nonfiction");
var submitButton = document.getElementById("submitButton");
var comments = document.getElementById("comments");
var poetry = document.getElementById("poetry");
var paranormal = document.getElementById("paranormal");
var romance = document.getElementById("romance");
var classics = document.getElementById("classics");
var comicGraphic = document.getElementById("comic_graphic");
var scifi = document.getElementById("scifi");
var crime = document.getElementById("crime");
var fantasy = document.getElementById("fantasy");
var horror = document.getElementById("horror");
var witchesWizardsMagic = document.getElementById("witches_wizards_magic");
var autobiography = document.getElementById("autobiography");
var design = document.getElementById("design");
var houseGarden = document.getElementById("house_and_garden");
var music = document.getElementById("music");
var biography = document.getElementById("biography");
var businessFinance = document.getElementById("business_finance");
var languages = document.getElementById("languages");
var sports = document.getElementById("sports");
var recipes = document.getElementById("recipes");
var travelGuides = document.getElementById("travel_guides");
var trueCrime = document.getElementById("true_crime");
var healthMindBody = document.getElementById("health_mind_body");
var history = document.getElementById("history");
var religion = document.getElementById("religion");
var computers = document.getElementById("computers");
var technical = document.getElementById("technical");
var craftHobby = document.getElementById("craft_hobby");
var exercise = document.getElementById("exercise");

//JavaScript Methods: .getElementsByTagName(); 

var formAddBook = document.getElementsByTagName("form"); 

//arrays

var inputBoxes = [nameBook, nameAuthor,isbnNumber]; 

//Functions
//this is to set focus or deselect focus...but the focus options don't work. 
var changeBorder = function(){
	if (i < inputBoxes.length) {
		i=o
		i++
		inputBoxes[i].setAttribute("class","hasFocus");
	} else {
		i=o
		i++
		inputBoxes[i].removeAttribute("class","hasFocus");
	}
}

nameBook.addEventListener("focus", changeBorder);
nameBook.addEventListener("blur", defaultBorder);
nameAuthor.addEventListener("focus", changeBorder);
nameAuthor.addEventListener("blur", defaultBorder);
isbnNumber.addEventListener("focus", changeBorder);
isbnNumber.addEventListener("blur", defaultBorder);
comments.addEventListener("focus", changeBorder);
comments.addEventListener("blur", defaultBorder);
console.log(nameBook); 