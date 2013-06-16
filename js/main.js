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
	};
	
	//Create select field element and populate with the options
	function genreCategory (){
		var formTag 	= document.getElementsByTagName("myBookQuestions"), //formTag is an array of all the form tags. 
			selectLi 	= $("selectGenre"), //targets list item with id of select
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
	};
	
	//functions to read the radio buttons
	//could use the - var selected = document.forms[0].choice; - as another options instead of getElementById("myBookQuestions").choice;
	function readBookChoices(){
		//read not_read
		var selected 	= document.getElementById("myBookQuestions").choice;
		for(var s=0, t=selected.length; s<t; s++){
			if(selected[s].checked){
				readingSelection = selected[s].value; 
				return readingSelection;
			}
		}
	};
	
	function permanentBookChoices(){
		//permanent or borrowing
		var selectedP 	= document.getElementById("myBookQuestions").permanent;
		for(var s=0, t=selectedP.length; s<t; s++){
			if(selectedP[s].checked){
				permanentSelection = selectedP[s].value; 
				return permanentSelection;
			}
		}
	};

	function coverBookChoices(){
		//hardcover, paperback, mobile
		var selectedC 	= document.getElementById("myBookQuestions").cover;
		for(var s=0, t=selectedC.length; s<t; s++){
			if(selectedC[s].checked){
				coverSelection = selectedC[s].value; 
				return coverSelection;
			}
		}
	};

	function typeBookChoices(){
		//fiction, non-fiction
		var selectedT 	= document.getElementById("myBookQuestions").type;
		for(var s=0, t=selectedT.length; s<t; s++){
			if(selectedT[s].checked){
				typeSelection = selectedT[s].value; 
				return typeSelection;
			}
		}
	};
	
	//function to reset the form after saving. 
	function resetForm(){
			document.getElementById("myBookQuestions").reset();
   	};
   	
   	function toggleControls(n){
		switch(n){
			case "on":
				$("myBookQuestions").style.display = "none"; //the form
				$("emptySatchel").style.display = "inline"; //the red button
				$("submitButton").style.visibility = "hidden"; //purple button
				$("showSatchel").style.display = "none"; //green button
				$("goHome").style.display = "inline"; //green button to go home 
				$("bookInfoDisplay").style.display = "block"; //the book information
				break;
			case "off":
				$("myBookQuestions").style.display = "block"; //the form
				$("emptySatchel").style.display = "inline"; //the red button
				$("submitButton").style.visibility = "visible"; //purple button
				$("showSatchel").style.display = "inline"; //green button
				$("goHome").style.display = "none"; //green button to go home 
				$("bookInfoDisplay").style.display = "none"; //the book information
				break;
			default:
				return false; 
		}
	};
	
	//function to save the form data into local storage. 
	function submitInfo(){
		keyValue 			= Math.floor(Math.random()*100001);
		//Gather up all our form field values and store in an object. 
		//Object properties contain array with the form label and input value. 
		readBookChoices();
		permanentBookChoices();
		coverBookChoices();
		typeBookChoices();
		var myData			= { 
		//used the returns from the functions and set those as the variables for these arrays.
			nameBook 	: ["Name: ", $("bname").value],
			nameAuthor 	: ["Author: ", $("aname").value],
			isbnNumber 	: ["ISBN: ", $("isbn").value],
			readBook	: ["Read: ", readingSelection],
			rating		: ["Rate: ", $("rating").value],
			dateAdded 	: ["Added: ", $("dateAdded").value],
			datePublish : ["Published: ", $("datePublished").value],
			genre		: ["Genre: ", $("genres").value],
			purchased	: ["Purchased: ", permanentSelection],
			cover		: ["Cover: ", coverSelection],
			fiction		: ["Type: ", typeSelection],
			comments 	: ["Comments: ", $("comments").value]
		};
		//Save data into Local Storage: use Stringify to convert our object to a string by using JSON.stringify
		localStorage.setItem(keyValue, JSON.stringify(myData)); 
		alert("Your book is in your Satchel");
		resetForm(); 
	};
	
	//Write data from Local Storage to Browser
	function showInfo(){
		toggleControls("on");
		if(localStorage.length === 0){
				alert("Your Satchel is empty.");
		}
		var makeDiv 	= $("bookInfoDisplay"); 
		var makeList 	= document.createElement("ul");
		makeDiv.appendChild(makeList);  
		for(var i=0, j=localStorage.length; i<j; i++){
			var makeli 	= document.createElement("li");
			makeList.appendChild(makeli); 
			var key 	= localStorage.key(i); 
			var value 	= localStorage.getItem(key);
			//convert string from local storage value back to an object by using JSON.parse
			var obj 	= JSON.parse(value);   
			var makeSubList	= document.createElement("ul"); 
			makeli.appendChild(makeSubList); 
			for(var n in obj){
				var makeSubli = document.createElement("li");
				makeSubList.appendChild(makeSubli); 
				//the [n] is the var/text group within the array of data
				//[0] is the array's 1st set which is the name
				//[1] is the array's 2nd set which is the data information for the book
				var optSubText = obj[n][0]+" "+obj[n][1]; 
				makeSubli.innerHTML = optSubText; 
			}
		}
	};
	
	//clearInfo function goes with the clearData button (Empty Satchel)
	var clearInfo = function (){
		if(localStorage.length === 0){
			alert("There are no books in your Satchel to remove."); 
		} else {
			var questionThem = confirm("Pressing OK will empty your Satchel. Are you sure?");
			if(questionThem){
			localStorage.clear()
			alert("Your Satchel is now empty!");
			} else {
			alert("Your books are safe in the Satchel"); 
			}
			window.location.reload();
			return false; 
		}
	};

	//returnHome function returns the two buttons and shows the Form and hides the Satchel
	var returnHome = function (){
		toggleControls("off");
		resetForm();		
	};
	
	//Variable defaults
	var booksGenres 	= ["--Choose A Genre--", "autobiography", "biography", "business finance", "classics", "comic graphic", "computers", "cooking", "craft & hobby", "crime", "design", "exercise", "fantasy", "gardening & farming", "health & mind & body", "history", "horror", "house & garden", "languages", "music", "outdoor activities", "paranormal", "poetry", "religion", "romance", "sports", "scifi", "technical", "travel guides", "true crime", "witches & wizards & magic", "woodworking"];
	var readingSelection;
	var permanentSelection; 
	var coverSelection; 
	var typeSelection;  
	genreCategory ();  
	
	//Set link & Submit Click Events
	var saveBook 		= $("submitButton"); 
	saveBook.addEventListener("click", submitInfo);
	var showBook 		= $("showSatchel"); 
	showBook.addEventListener("click", showInfo);
	var goToForm 		= $("goHome");
	goToForm.addEventListener("click", returnHome);
	var emptySatchel 	= $("emptySatchel");
	emptySatchel.addEventListener("click", clearInfo);


}); 