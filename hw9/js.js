	function User (firstName, lastName,age,tel,city){
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.tel = tel;
		this.city = city;
	function getFullName(){
		return firstName + ' ' + lastName;
	}
	this.sayHi = function (){
		console.log( "Hi!" + ', ' + getFullName() );
	},
	this.getGreeting = function(){
		return console.log(this)
	}
	this.addFriends = function(){
		return console.log(Bob.firstName + ' friends with '   +  Stew.firstName);
	}
	}


var Bob = new User("Bob","Swift",24,2323232324, 'Los angeles');
var Stew = new User("Stew","Taylor",27,667787878, 'New York');
var Jack = new User("Jack","Jonson",24,778798098990, 'Texas');
Bob.sayHi();
Bob.getGreeting();
Stew.sayHi();
Stew.getGreeting();
Jack.sayHi();
Jack.getGreeting();
Bob.addFriends()