/* 	Jenney Grover
	VFW 1306
	Project 2 - redo
	June 15, 2013
*/

//Wait until the DOM is ready. 
window.addEventListener("DOMContentLoaded", function(){

	//getElementByID function. 
	function $(x){
		var theElement = document.getElementById(x);
		return theElement; 
	}
	
	//Create select field element and populate with the options
	function genreCategory (){
		var formTag 	= document.getElementsByTagName("myBookQuestions"), //formTag is an array of all the form tags. 
			selectLi 	= $("select"), //targets list item with id of select
			makeSelect	= document.createElement("select"); //creates HTML element select
			makeSelect.setAttribute("id", "genres"); 
		for (var i=0, j=booksGenres.length; i<j; i++) {//grab options in the variable array
			var makeOption = document.createElement("option"); 
			var optText = booksGenres[i]; 
			makeOption.setAttribute("value", optText); //not id but value in this tag
			makeOption.innerHTML = optText; 
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect); 
	}
	
	//Variable defaults
	var booksGenres 	= ["--Choose A Genre--", "autobiography", "biography", "business_finance", "classics", "comic_graphic", "computers", "cooking", "craft_hobby", "crime", "design", "exercise", "fantasy", "gardening_farming", "health_mind_body", "history", "horror", "house_and_garden", "languages", "music", "outdoor_activities", "paranormal", "poetry", "religion", "romance", "sports", "scifi", "technical", "travel_guides", "true_crime", "witches_wizards_magic", "woodworking"];
	genreCategory (); 

	//Set link & Submit Click Events
	/*var saveBook 		= $("submitButton"); 
	saveBook.addEventListener("click", submitInfo);
	var showBook 		= $("showSatchel"); 
	showBook.addEventListener("click", showInfo);
	var goToForm 		= $("goHome");
	goToForm.addEventListener("click", formHome);
	var emptySatchel 	= $("emptySatchel");
	emptySatchel.addEventListener("click", clearInfo);*/

}); 