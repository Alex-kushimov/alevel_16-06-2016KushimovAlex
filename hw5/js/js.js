


function myFunction (){
  var choise	= event.target.value;
	document.getElementById("demo2").innerHTML = event.target.value;

var userChoice = choise;
var computerChoice = Math.random();

if (computerChoice < 0.34) {
    computerChoice = "rock";
    document.getElementById("demo").innerHTML = "Rock";
}
else if(computerChoice <= 0.67 && computerChoice >= 0.34) {
    computerChoice = "paper";
    document.getElementById("demo").innerHTML = "Paper";
}
else {
    computerChoice = "scissors";
    document.getElementById("demo").innerHTML = "Scissors";
}

function compare(choice1,choice2){
if (choice1 === choice2){
  document.getElementById("demo3").innerHTML = "The result is a tie!";
}
else if (choice1 === "rock"){
  if (choice2 === "scissors"){
    document.getElementById("demo3").innerHTML = "You wins";
  }else{
    document.getElementById("demo3").innerHTML = "You loose";
  }
}

else if (choice1 === "paper"){
  if (choice2 === "rock"){
    document.getElementById("demo3").innerHTML = "Your wins";
  }else{
    document.getElementById("demo3").innerHTML = "You loose";
  }
}

else if (choice1 === "scissors"){
  if (choice2 === "paper"){
    document.getElementById("demo3").innerHTML = "You wins!";
  }else{
    document.getElementById("demo3").innerHTML = "You loose";
  }
}
};
compare (userChoice, computerChoice);

 };