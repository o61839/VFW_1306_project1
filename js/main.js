/* 	Jenney Grover
	VFW 1306
	Project 1
	The Satchel
	June 13, 2013
*/

//Wait until DOM is ready. 
window.addEventListener("DOMContentLoaded", function (){

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
	var showGo		= document.getElementById("goHome");
	//for the form...random number generator
	var keyValue; 
	var readingSelection = []; 
	var permanentSelection = []; 
	var coverSelection = []; 
	var typeSelection = []; 
	//container to hold the form's information (i.e. the Book Info)
	var myData = {}

	//JavaScript Methods: .getElementsByTagName(); 

	var formAddBook = document.getElementsByTagName("form"); 

	//arrays

	var resultsMyData = myData; 

	//Functions

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
		//permanent or borrowing
		var selectedP 	= document.getElementById("myForm").permanent;
		for(var s=0, t=selectedP.length; s<t; s++){
			if(selectedP[s].checked){
				permanentSelection.push = selectedP[s].value; 
				return permanentSelection;
			}
		}
	};

	var coverBookChoices = function(){
		//hardcover, paperback, mobile
		var selectedC 	= document.getElementById("myForm").cover;
		for(var s=0, t=selectedC.length; s<t; s++){
			if(selectedC[s].checked){
				coverSelection.push = selectedC[s].value; 
				return coverSelection;
			}
		}
	};

	var typeBookChoices = function(){
		//fiction, non-fiction
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
		myData.nameBook 	= document.getElementById("bname").value;
		myData.nameAuthor 	= document.getElementById("aname").value;
		myData.isbnNumber 	= document.getElementById("isbn").value;
		myData.dateAdded 	= document.getElementById("dateAdded").value;
		myData.datePublish 	= document.getElementById("datePublished").value;
		myData.comments 	= document.getElementById("comments").value;
		myData.rating		= document.getElementById("rating").value; 
		myData.genre		= document.getElementById("genre").value;
		myData.comments		= document.getElementById("comments").value;  
		//radio buttons: read/not read; purchased/borrowed; 3 cover types; fiction/nonfiction
		readBookChoices();
		permanentBookChoices(); 
		coverBookChoices(); 
		typeBookChoices();
		keyValue = Math.floor(Math.random()*100001);
		localStorage.setItem(keyValue, JSON.stringify(myData)); 
		alert("Your book is in your Satchel");
	};

	//showInfo function goes with the showData button (Show Satchel)
	var showInfo = function (){
		submitData.style.visibility = "hidden"; 
		showData.style.display = "none"; 
		showGo.style.display = "inline"; 
		//formAddBook.style.display = "none";
		//create new tags for data
		//grandparent = mainContent (body of html)
		//resultsMyData = array for data content
		var myNewDiv 		= document.createElement("div"); //parent
		myNewDiv.setAttribute("id", "book"); 
		var myNewList 		= document.createElement("ul");  //child
		myNewList.setAttribute("id", "bookInfo");
		document.body.appendChild(myNewDiv); 
		myNewDiv.appendChild(myNewList);
		for(i=0, j=resultsMyData.length; i<j; i++){
			var myNewLItag	= document.createElement("li"); //another child
			myNewLItag.innerHTML = resultsMyData(i);
			myNewList.appendChild(myNewLItag); 
			var key = localStorage.key(i); 
			var value = localStorage.getItem(key); 
			//convert the string from local storage value back to an object
			var object = JSON.parse(value);
			var makeSubList = document.createElement("ul"); 
			myNewLItag.appendChild(makeSubList); 
			for(var n in object){
				var makeSubli = document.createElement("li");
				makeSubList.appendChild(makeSubli);
				var bookInfoList = object[n][0]+" "+obj[n][1]; 
				makeSubli.innerHTML = bookInfoList;
			}
		}	
	};

	//clearInfo function goes with the clearData button (Empty Satchel)
	var clearInfo = function (){
		if(localStorage.length ===0){
			alert("There are no books in your Satchel to remove."); 
		} else {
			var questionThem = confirm("Pressing OK will empty your Satchel. Are you sure?");
			if(questionThem){
			localStorage.clear()
			alert("Your Satchel is now empty!");
			} else {
			alert("Your books are safe in the Satchel"); 
			}
		}
	};

	//returnHome function returns the two buttons and shows the Form and hides the Satchel
	var returnHome = function (){
		submitData.style.visibility = "visible"; 
		showData.style.display = "inline"; 
		showGo.style.display = "none"; 
		//formAddBook.style.display = "inline";
		//hides the satchel <myNewDiv>
		//shows the form again <myForm>
	};


	//Methods

	submitData.addEventListener("click", submitInfo);
	showData.addEventListener("click", showInfo);
	clearData.addEventListener("click", clearInfo);
	goHome.addEventListener("click", returnHome);


});
