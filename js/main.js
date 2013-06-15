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
	
	//functions to read the radio buttons
	var readBookChoices = function(){
		//read not_read
		var selected 	= document.getElementById("myBookQuestions").choice;
		for(var s=0, t=selected.length; s<t; s++){
			if(selected[s].checked){
				readingSelection.push = selected[s].value; 
				return readingSelection;
			}
		}
	};
	var permanentBookChoices = function(){
		//permanent or borrowing
		var selectedP 	= document.getElementById("myBookQuestions").permanent;
		for(var s=0, t=selectedP.length; s<t; s++){
			if(selectedP[s].checked){
				permanentSelection.push = selectedP[s].value; 
				return permanentSelection;
			}
		}
	};

	var coverBookChoices = function(){
		//hardcover, paperback, mobile
		var selectedC 	= document.getElementById("myBookQuestions").cover;
		for(var s=0, t=selectedC.length; s<t; s++){
			if(selectedC[s].checked){
				coverSelection.push = selectedC[s].value; 
				return coverSelection;
			}
		}
	};

	var typeBookChoices = function(){
		//fiction, non-fiction
		var selectedT 	= document.getElementById("myBookQuestions").type;
		for(var s=0, t=selectedT.length; s<t; s++){
			if(selectedT[s].checked){
				typeSelection.push = selectedT[s].value; 
				return typeSelection;
			}
		}
	};
	
	//function to save the form data into local storage. 
	function submitInfo(){
		keyValue 			= Math.floor(Math.random()*100001);
		//Gather up all our form field values and store in an object. 
		//Object properties contain array with the form label and input value. 
		var myData			= {}; 
			myData.nameBook 	= ["Name", $("bname").value];
			myData.nameAuthor 	= ["Author", $("aname").value];
			myData.isbnNumber 	= ["ISBN", $("isbn").value];
			myData.dateAdded 	= ["Added", $("dateAdded").value];
			myData.datePublish 	= ["Published", $("datePublished").value];
			myData.comments 	= ["Comments", $("comments").value];
			myData.rating		= ["Rate", $("rating").value]; 
			myData.genre		= ["Genre", $("genre").value];
			myData.readBook		= ["Read", readBookChoices];
			myData.purchased	= ["Purchased", permanentBookChoices];
			myData.cover		= ["Cover", coverBookChoices];
			myData.fiction		= ["Type", typeBookChoices];
		//Save data into Local Storage: use Stringify to convert our object to a string.
		localStorage.setItem(keyValue, JSON.stringify(myData)); 
		alert("Your book is in your Satchel");
		resetForm(); 
	}
	
	//Variable defaults
	var booksGenres 	= ["--Choose A Genre--", "autobiography", "biography", "business_finance", "classics", "comic_graphic", "computers", "cooking", "craft_hobby", "crime", "design", "exercise", "fantasy", "gardening_farming", "health_mind_body", "history", "horror", "house_and_garden", "languages", "music", "outdoor_activities", "paranormal", "poetry", "religion", "romance", "sports", "scifi", "technical", "travel_guides", "true_crime", "witches_wizards_magic", "woodworking"];
	genreCategory (); 

	//Set link & Submit Click Events
	var saveBook 		= $("submitButton"); 
	saveBook.addEventListener("click", submitInfo);
/*	var showBook 		= $("showSatchel"); 
	showBook.addEventListener("click", showInfo);
	var goToForm 		= $("goHome");
	goToForm.addEventListener("click", resetForm);
	var emptySatchel 	= $("emptySatchel");
	emptySatchel.addEventListener("click", clearInfo);
*/

}); 