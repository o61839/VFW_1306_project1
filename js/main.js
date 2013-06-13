/* 	Jenney Grover
	VFW 1306
	Project 1
	The Satchel
	June 13, 2013
*/

//JavaScript Methods: .getElementByID();

//main part of form
var nameBook 	= document.getElementById("bname");
var nameAuthor 	= document.getElementById("aname");
var isbnNumber 	= document.getElementById("isbn");
var readBook 	= document.getElementById("read");
var readBookNot = document.getElementById("not_read");
var dateAdded 	= document.getElementById("dateAdded");
var datePublish = document.getElementById("datePublished");
var rating		= document.getElementById("rating"); 
var genre		= document.getElementById("genre"); 
//list of genres
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
//optional part of form
var purchased 	= document.getElementById("purchased");
var borrowed 	= document.getElementById("borrowed");
var paperback 	= document.getElementById("paperback");
var hardcover 	= document.getElementById("hardcover");
var mobile 		= document.getElementById("mobile");
var fiction 	= document.getElementById("fiction");
var nonFiction 	= document.getElementById("nonfiction");
var comments 	= document.getElementById("comments");
//three buttons
var submitData 	= document.getElementById("submitButton");
var showData 	= document.getElementById("showSatchel");
var clearData 	= document.getElementById("emptySatchel");
//for the form...random number generator
var keyValue; 
var readingSelection = []; 
var permanentSelection = []; 
var coverSelection = []; 
var typeSelection = []; 

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
var readBookChoices = function(){
	//read not_read
	var selected 	= document.getElementById("myForm").choice;
	for(var s=0, t=selected.length; s<t; s++){
		if(selected[s].checked){
			readingSelection.push = selected[s].value; 
			return readingSelection;
		}
	}
};
var permanentBookChoices = function(){
	//read not_read
	var selectedP 	= document.getElementById("myForm").permanent;
	for(var s=0, t=selectedP.length; s<t; s++){
		if(selectedP[s].checked){
			permanentSelection.push = selectedP[s].value; 
			return permanentSelection;
		}
	}
};

var coverBookChoices = function(){
	//read not_read
	var selectedC 	= document.getElementById("myForm").cover;
	for(var s=0, t=selectedC.length; s<t; s++){
		if(selectedC[s].checked){
			coverSelection.push = selectedC[s].value; 
			return coverSelection;
		}
	}
};

var typeBookChoices = function(){
	//read not_read
	var selectedT 	= document.getElementById("myForm").type;
	for(var s=0, t=selectedT.length; s<t; s++){
		if(selectedT[s].checked){
			typeSelection.push = selectedT[s].value; 
			return typeSelection;
		}
	}
};
//submitInfo function goes with the submitData button (Put in Satchel)
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
	//radio buttons: read/not read; purchased/borrowed; 3 cover types; fiction/nonfiction
	//http://www.randomsnippets.com/2008/05/15/how-to-loop-through-checkboxes-or-radio-button-groups-via-javascript/
	/* this function doesn't work yet???
	function loopForm(forms){
		var cbResults = 'Checkboxes: ';
		var radioResults = 'Radio buttons: ';
		for (var i=0; i<form.elements.length; i++){
			if (form.elements[i].type == 'checkbox'){
				if (form.elements[i].checked == true){
					cbResults += form.elements[i].value + ' ';
				}
			}
			if (form.elements[i].type == 'radio'){
				if (form.elements[i].checked == true){
					radioResults += form.elements[i].value + ' ';
				}
			}
		}
		document.getElementById("cbResults").innerHTML = cbResults; 
		document.getElementById("radioResults").innerHTML = radioResults; 
	}
	myData.results		= [cbResults, radioResults]; */
	//need to call the functions for the radio buttons. 
	readBookChoices();
	permanentBookChoices(); 
	coverBookChoices(); 
	typeBookChoices();
	keyValue = Math.floor(Math.random()*100001);
	localStorage.setItem(keyValue, JSON.stringify(myData)); 
	alert("Your book is in your Satchel");
}

//showInfo function goes with the showData button (Show Satchel)
var showInfo = function (){

}

//clearInfo function goes with the clearData button (Empty Satchel)
var clearInfo = function (){
	var questionThem = confirm("Pressing OK will empty your Satchel. Are you sure?");
	if(questionThem){
		localStorage.clear()
		alert("Your Satchel is now empty!");
	} else {
		alert("Your books are safe in the Satchel"); 
	}
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
clearData.addEventListener("click", clearInfo);



