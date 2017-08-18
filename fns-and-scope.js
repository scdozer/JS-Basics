//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler (name){
  if (name === "Tyler"){
    return true;
  }
  return false;
}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName(){
  var name = prompt('Enter Your Name');
  return name;
}


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome(getName){
  alert ("Welcome, " + getName);
}


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

//Parameters are used in function declaration. Arguments are what is invoked.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //0, null, NaN, undefined, '', false


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName() {
  return "Scott";
}



//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName();
alert (newMyName);

//Now alert the result of invoking newMyName



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn(){
  return function(){
    newMyName;
  }
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();
