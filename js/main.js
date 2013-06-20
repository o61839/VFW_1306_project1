/* 	Jenney Grover
	VFW 1306
	Project 2 and 3
	June 13, 2013
	June 20, 2013
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
	function submitInfo(key){
		//If there is no key, this means this is a brand new item and we need a new key
		if(!key){
			keyValue 			= Math.floor(Math.random()*100001);
		} else {
			//otherwise we will set the id (keyValue) to the existing key (key) so that it will save over the data. 
			//the key is the same key that's been passed along from the editSubmit event handler
			//to the validate function, and then passed here, into the submitInfo function
			keyValue			= key;
		}	
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
			dateAdded 	: ["Added: ", $("dateAdded").value],
			datePublish : ["Published: ", $("datePublished").value],
			genre		: ["Genre: ", $("genres").value],
			readBook	: ["Read: ", readingSelection],
			rating		: ["Rate: ", $("rating").value],
			purchased	: ["Purchased: ", permanentSelection],
			cover		: ["Cover: ", coverSelection],
			fiction		: ["Type: ", typeSelection],
			comments 	: ["Comments: ", $("comments").value]
		};
		//Save data into Local Storage: use Stringify to convert our object to a string by using JSON.stringify
		localStorage.setItem(keyValue, JSON.stringify(myData)); 
		alert("Your book is in your Satchel");
		//sets focus to the top of the form.
		document.getElementById("bookInfoDisplay").focus();
		resetForm(); 
	};
	
	//Write data from Local Storage to Browser
	function showInfo(){
		toggleControls("on");
		if(localStorage.length === 0){
				alert("Your Satchel is empty.");
				toggleControls("off"); //saves user a step to getting back to the form. 
		} else {
			var makeDiv 	= $("bookInfoDisplay"); 
			var makeList 	= document.createElement("ul");
			makeDiv.appendChild(makeList);  
			for(var i=0, j=localStorage.length; i<j; i++){
				var makeli 	= document.createElement("li");
				var linksLi = document.createElement("li"); 
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
					makeSubList.appendChild(linksLi);
					//the [n] is the var/text group within the array of data
					//[0] is the array's 1st set which is the name
					//[1] is the array's 2nd set which is the data information for the book
					var optSubText = obj[n][0]+" "+obj[n][1]; 
					makeSubli.innerHTML = optSubText; 
				}
				//function edit/delete links
				makeItemLinks(localStorage.key(i), linksLi); //create links for each item in localStorage
			}
		}
		document.getElementById("bookInfoDisplay").focus();
	};
	
	//function edit/delete links
	function makeItemLinks(key, linksLi){
		//add edit single item link
		var editLink = document.createElement('a'); 
		editLink.href = "#"; 
		editLink.key = key; //key is from showInfo function var key
		var editText = "Edit Book"; 
		editLink.addEventListener("click", editItem)
		editLink.innerHTML = editText; 
		linksLi.appendChild(editLink); 
		//add line break
		var breakTag = document.createElement("br"); 
		linksLi.appendChild(breakTag); 
		//add delete single item link
		var deleteLink = document.createElement('a'); 
		deleteLink.href = "#"; 
		deleteLink.key = key; 
		var deleteText = "Delete Book";
		deleteLink.addEventListener("click", deleteItem); 
		deleteLink.innerHTML = deleteText; 
		linksLi.appendChild(deleteLink); 
	}; 
	
	//repopulates the fields of the form so we can edit the information. 
	function editItem(){
		//Grab the data from our item from Local Storage 
		var value = localStorage.getItem(this.key); //editLink.key b/c the function is attached
		var myData = JSON.parse(value); 
		//show the form
		toggleControls("off"); 
		//populate the form fields with the current localStorage Values. 
		$("bname").value = myData.nameBook[1]; 
		$("aname").value = myData.nameAuthor[1];
		$("isbn").value = myData.isbnNumber[1];
		$("dateAdded").value = myData.dateAdded[1];
		$("datePublished").value = myData.datePublish[1];
		$("genres").value = myData.genre[1];
		var selected = document.getElementById("myBookQuestions").choice;
		for(var s=0, t=selected.length; s<t; s++){
			if(selected[s].value == "read" && myData.readBook == "read"){
				selected[s].setAttribute("checked", "checked"); 
			} else if (selected[s].value == "not_read" && myData.readBook == "not_read") {
				selected[s].setAttribute("checked", "checked");
			}
		}
		$("rating").value = myData.rating[1];
		var selectedP 	= document.getElementById("myBookQuestions").permanent;
		for(var s=0, t=selectedP.length; s<t; s++){
			if(selectedP[s].value == "purchased" && myData.purchased == "purchased"){
				selectedP[s].setAttribute("checked", "checked");
			} else if (selectedP[s].value == "borrowed" && myData.purchased == "borrowed"){
				selectedP[s].setAttribute("checked", "checked");
			}
		}
		var selectedC 	= document.getElementById("myBookQuestions").cover;
		for(var s=0, t=selectedC.length; s<t; s++){
			if(selectedC[s].value == "paperback" && myData.cover == "paperback"){
				selectedC[s].setAttribute("checked", "checked");
			} else if (selectedC[s].value == "hardcover" && myData.cover == "hardcover"){
				selectedC[s].setAttribute("checked", "checked");
			} else if (selectedC[s].value == "mobile" && myData.cover == "mobile"){
				selectedC[s].setAttribute("checked", "checked");
			}
		}
		var selectedT 	= document.getElementById("myBookQuestions").type;
		for(var s=0, t=selectedT.length; s<t; s++){
			if(selectedT[s].value == "fiction" && myData.fiction == "fiction"){
				selectedT[s].setAttribute("checked", "checked");
			} else if (selectedT[s].value == "nonfiction" && myData.fiction == "nonfiction"){
				selectedT[s].setAttribute("checked", "checked");
			} 
		}
		$("comments").value = myData.comments[1];
		
		//Remove the initial listener from the input "submitButton". 
		saveBook.removeEventListener("click", submitInfo)
		//change "submitButton" value to Edit book. 
		$("submitButton").value = "Edit Book"; 
		var editSubmit = $("submitButton");
		//save the key value established in this function is a product of the editSubmit function
		//so we can use that value when we save the data we edited. 
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key; 
		document.getElementById("bookInfoDisplay").focus();
	};
	
	//validating the stored data so we can re-save it instead of saving a new item.
	
	function validate(e){
		//define the elements we want to check
		var getBname = $("bname"); 
		var getAname = $("aname");
		var getISBN = $("isbn"); 
		var getDateAdded = $("dateAdded");
		var getDatePubl = $("datePublished");
		var getGenres = $("genres"); 
		//Get Error Messages
		var messageAry = []; 
		
		//reset error messages
		errMsg.innerHTML = ""; 
		getBname.style.border = "1px solid black";
		getAname.style.border = "1px solid black"; 
		getISBN.style.border = "1px solid black";
		getGenres.style.border = "1px solid black";
		
		//book name validation
		if(getBname.value === ""){
			var bNameError = "Please add your book's name."; 
			getBname.style.border = "3px solid red"; 
			messageAry.push(bNameError);
		}
		//author validation
		if(getAname.value === ""){
			var aNameError = "Please add your book's author."; 
			getAname.style.border = "3px solid red"; 
			messageAry.push(aNameError);
		}
		//ISBN validation ***This does not work yet
		/*if(getISBN.length == 10){
			if(getISBN.length == 13){
				//do nothing? 
				//tried to do !== 10/13 
				//tried to do == !10 & !13
				//neither worked.
			} else {
				var isbnError = "Please correct the book's ISBN-10 or ISBN-13."; 
				getISBN.style.border = "3px solid red"; 
				messageAry.push(isbnError);
			}
		}
		*/
		
		//Genre validation
		if(getGenres.value == "--Choose A Genre--"){
			var genreError = "Please choose a genre."; 
			getGenres.style.border = "3px solid red"; 
			messageAry.push(genreError);
		}
		
		//move error messages to screen
		if(messageAry.length >= 1){
			for(i=0, j=messageAry.length; i<j; i++){
				var txt = document.createElement("li"); 
				txt.innerHTML = messageAry[i]; 
				errMsg.appendChild(txt); 
			}
			e.preventDefault(); 
			//turns focus to top of form.
			document.getElementById("bname").focus(); 
			return false; 	
		} else {
			//run store data function if all is OK. 
			//send key value from edit function
			//remember this key value was passed through the editSubmit eventListener as a property
			submitInfo(this.key); 
		}
	//possibly add dates back in here...or verify that the date added to library is after the date published.
	/*
	function dateCheck (){
		take the date date added to library
		subtract
		date published
		if # < 0 
		then shoot out an error
		b/c date added to library can not be before date published
	}
	*/ 
	}; 
	
	//deleting one item from localStorage
	function deleteItem(){
		var questionThem = confirm("Pressing OK will remove the book from the Satchel. Are you sure?");
			if(questionThem){
			localStorage.removeItem(this.key)
			alert("This book was successfully deleted from the Satchel.")
			} else {
			alert("Your book is safe in the Satchel"); 
			}
			document.getElementById("bookInfoDisplay").focus();
	};
	
	//clearInfo function goes with the clearData button (Empty Satchel)
	var clearInfo = function (){
		if(localStorage.length === 0){
			alert("There are no books in your Satchel to remove.");
			window.location.reload();  
		} else {
			var questionThem = confirm("Pressing OK will empty your Satchel. Are you sure?");
			if(questionThem){
				localStorage.clear()
				alert("Your Satchel is now empty!");
				window.location.reload();
			} else {
				alert("Your books are safe in the Satchel");
				window.location.reload(); 
			}
			document.getElementById("bookInfoDisplay").focus(); 
		}
	};

	//returnHome function returns the two buttons and shows the Form and hides the Satchel
	var returnHome = function (){
		toggleControls("off");
		document.getElementById("bookInfoDisplay").focus();	
	};
	
	//Variable defaults
	var booksGenres 	= ["--Choose A Genre--", "autobiography", "biography", "business finance", "classics", "comic graphic", "computers", "cooking", "craft & hobby", "crime", "design", "exercise", "fantasy", "gardening & farming", "health & mind & body", "history", "horror", "house & garden", "languages", "music", "outdoor activities", "paranormal", "poetry", "religion", "romance", "sports", "scifi", "technical", "travel guides", "true crime", "witches & wizards & magic", "woodworking"];
	var readingSelection;
	var permanentSelection; 
	var coverSelection; 
	var typeSelection;  
	genreCategory (); 
	var errMsg = $("errors"); 
  
	
	//Set link & Submit Click Events
	var saveBook 		= $("submitButton"); 
	saveBook.addEventListener("click", validate);
	var showBook 		= $("showSatchel"); 
	showBook.addEventListener("click", showInfo);
	var goToForm 		= $("goHome");
	goToForm.addEventListener("click", returnHome);
	var emptySatchel 	= $("emptySatchel");
	emptySatchel.addEventListener("click", clearInfo);


}); 