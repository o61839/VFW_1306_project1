/* 	Jenney Grover
	VFW 1306
	Project 1
	The Satchel
	June 13, 2013
*/

//JavaScript Methods: .getElementByID();

var nameBook 	= document.getElementById("bname");
var nameAuthor 	= document.getElementById("aname");
var isbnNumber 	= document.getElementById("isbn");
var readBook 	= document.getElementById("read");
var readBookNot = document.getElementById("not_read");
var dateAdded 	= document.getElementById("dateAdded");
var datePublish = document.getElementById("datePublished");
var purchased 	= document.getElementById("purchased");
var borrowed 	= document.getElementById("borrowed");
var paperback 	= document.getElementById("paperback");
var hardcover 	= document.getElementById("hardcover");
var mobile 		= document.getElementById("mobile");
var fiction 	= document.getElementById("fiction");
var nonFiction 	= document.getElementById("nonfiction");
var comments 	= document.getElementById("comments");
var rating		= document.getElementById("rating"); 
var genre		= document.getElementById("genre"); 
var poetry 		= document.getElementById("poetry");
var paranormal 	= document.getElementById("paranormal");
var romance 	= document.getElementById("romance");
var classics 	= document.getElementById("classics");
var comicGraphic = document.getElementById("comic_graphic");
var scifi 		= document.getElementById("scifi");
var crime 		= document.getElementById("crime");
var fantasy 	= document.getElementById("fantasy");
var horror 		= document.getElementById("horror");
var witchesWizardsMagic = document.getElementById("witches_wizards_magic");
var autobiography = document.getElementById("autobiography");
var design 		= document.getElementById("design");
var houseGarden = document.getElementById("house_and_garden");
var music 		= document.getElementById("music");
var biography 	= document.getElementById("biography");
var businessFinance = document.getElementById("business_finance");
var languages 	= document.getElementById("languages");
var sports 		= document.getElementById("sports");
var recipes 	= document.getElementById("recipes");
var travelGuides = document.getElementById("travel_guides");
var trueCrime 	= document.getElementById("true_crime");
var healthMindBody = document.getElementById("health_mind_body");
var history 	= document.getElementById("history");
var religion 	= document.getElementById("religion");
var computers 	= document.getElementById("computers");
var technical 	= document.getElementById("technical");
var craftHobby 	= document.getElementById("craft_hobby");
var exercise 	= document.getElementById("exercise");
var submitData 	= document.getElementById("submitButton");
var showData 	= document.getElementById("showSatchel");
var clearData 	= document.getElementById("emptySatchel");
var keyValue; //for the form...random number generator

//JavaScript Methods: .getElementsByTagName(); 

var formAddBook = document.getElementsByTagName("form"); 

//arrays

var inputBoxes = [nameBook, nameAuthor,isbnNumber]; 

//Functions
//this is to set focus or deselect focus...but the focus options don't work. 
/*var changeBorder = function(){
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

var changeBorder = function(){
	for (var i = 0; j = inputBoxes.length; i<j; i++) {
		if 
			inputBoxes[i].setAttribute("class","hasFocus");
	}
}
*/

var submitInfo = function(){
	var myData = {}
	myData.nameBook 	= document.getElementById("bname").value;
	myData.nameAuthor 	= document.getElementById("aname").value;
	myData.isbnNumber 	= document.getElementById("isbn").value;
	myData.dateAdded 	= document.getElementById("dateAdded").value;
	myData.datePublish 	= document.getElementById("datePublished").value;
	myData.comments 	= document.getElementById("comments").value;
	myData.rating		= document.getElementById("rating").value; 
	myData.genre		= document.getElementById("genre").value; 
	keyValue = Math.floor(Math.random()*100001);
	localStorage.setItem(keyValue, JSON.stringify(myData)); 
	alert("Your book is in your Satchel");
}


//Methods
		/*nameBook.addEventListener("focus", changeBorder);
		nameBook.addEventListener("blur", changeBorder);
		nameAuthor.addEventListener("focus", changeBorder);
		nameAuthor.addEventListener("blur", changeBorder);
		isbnNumber.addEventListener("focus", changeBorder);
		isbnNumber.addEventListener("blur", changeBorder);
		comments.addEventListener("focus", changeBorder);
		comments.addEventListener("blur", changeBorder);*/
submitData.addEventListener("click", submitInfo);
//showData.addEventListener("click", showInfo);
//clearData.addEventListener("click", clearInfo);



