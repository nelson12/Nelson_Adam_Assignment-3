//Adam Nelson
//SDI Online
//05/22/2014
//Project 3

//Declaring variables
var game= "World of Warcraft";
var races= 14;
var classes=11;
var loggingIn="Password";
var yourRace= "Human"; 
var yourClass= "Hunter";
var start= 'Let\’s play!';
var hunter= true;
var petNames = [ "Lucy" , "Snowball" , "Frosty" ];

//Output
console.log(" You are playing " + game + ".");
console.log(" There are " + races + " races. ");
console.log(" There are " + classes + " classes. ");
console.log(" You will be using your " + loggingIn + " to authenticate. ");
console.log(" You will be a " + yourRace +  yourClass + ".");
console.log(" Come on " + start + "!"); 

//array procedure, argument, return
var petNames = [ "Lucy" , "Snowball" , "Frosty" ];
function getPetNames ( array ){
	console.log (" My pet's names are " + petNames);
}	
getPetNames(petNames);

//array method
var petNames = [ "Lucy" , "Snowball" , "Frosty" ];
petNames.push( " Vicious ");
console.log( " My new pet names are" + petNames );

//array property
var petNames = [ "Lucy" , "Snowball" , "Frosty" ];
var i = petNames.length;
for (var i=0; i < petNames.length; i++){
	console.log(" I have " + i + " pets. " );
} 

//confirm
hunter = confirm("Are you going to play a hunter?");
//boolean function, argument, return, nested conditional
function playHunter(name) {
	if (hunter == true){
		console.log("Great Let's Play!!!");
	}else{
		console.log("Try it over");
	};
	var excited = (" I am so glad that i am playing " + name);//local variable
	return excited;
};
var game= playHunter("Big Ben");
console.log(game);

 //for loop
for(var hunter = 5; hunter < 10; hunter = hunter+1) {
          console.log("value of hunter : " + hunter );
          console.log("\n");
      }

//prompt
var races= prompt("How many races do we have?");
//while loop
      while( races < 20 ) {
         console.log("value of races : " + races );
         races++;
         console.log("\n");
      }
      
//number function, arguments, return
function calcTime(loggedIn, researchTime) {
  	var totalTime= loggedIn * researchTime;
  	var timePlayed = ("You will have been playing " + totalTime + " hours");
	return timePlayed;
}
var time = calcTime(180, 240);
console.log (time);

//string function, arguments, return
function character(name, level) {
   var bestCharacter = name + level;
   var player = ( name + " is my favorite level " + level + "character, he is the best!");
   return player
}
var toon = character(" Beowolf " , 90 );
console.log(toon);

