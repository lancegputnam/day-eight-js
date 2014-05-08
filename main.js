//This is a simple function that squares a number when it is entered into X//
function square (x) {
	return x * x;
}

//This function takes the first initials of one's first, middle, and last name//
function abbreviateName (first, middle, last) {
 return first [0] + middle [0] + last [0];
}

//This is a simple variable. When you enter this into the console is reads as x.
// You can input a number and use a less than or greater than sign and it will come up as true or false.
var x = 12

//This is a cubed function. Enter in a value for X and the number is cubed//
function cube (x) {
 return x * x * x; 
}

//This is a variable and the value of x is inserted into the console log.//
var x = 12 
console.log (x * 8)

//If you type in person, my first, middle, and last name will appear//
var person = { 
 firstName: "Lance",
 middleName: "Grayson",
 lastName: "Putnam",
}

// This is a function that adds and multiplies a,b, and c. When you enter three numbers into the 
//parentheses, the correct sum (d) will pop out. 
function calculate(a,b,c) {
	d = (a+b) * c;
	return d;
}

//With this function, you enter your person.enterRealName followed by your name in parentheses. A 
//message will follow afterwards.
person.enterRealName = function (newName) {
 this.firstName = newName;
 return "Congratualtions, you know your name!.";
}

//This is a variable and when personTwo is entered in the browser the full name will come up//
var personTwo = {
   fullname: "Lance Grayson Putnam"
}

//This is a variable that logs into a sentence in the console.//
var fullname = "Lance Putnam"

var age = 24

console.log ("Hey, my name is", fullname, "I'm", age, "years old.");

//This prompt will pop up when the page is refreshed and you will have the option to enter 
//in a password. 
var surname = prompt('Hey Kid, Will You Type in Your Password?');

//This alert will pop up after the prompt goes away. It is an alert that you must select to 
//continue to the page. 
var name = alert('You Are Entering a Danger Zone');

//* This is to calculate the ages of the following students. 
// Just enter myAge in the browser followed by the six different ages in parentheses seperated by commas. 
//The total age will then appear
function myAge (tad, joe, whitney, lance, luke, william) {
	return tad + joe + whitney + lance + luke + william;
};

//This is a function with a greater or less than part. If the object is less than 0, the answer
//will start with 'begin' and is greater than 0, will start 'end'
function than(i) {
   if (i < 0)
   return ('begin:' + i);
   if (i > 0);
   return ('end:' + i);
};

// When you write the variable, hello, it pops out a different sentence.
var hello = function () {
  console.log("i am saying hello");
};

//This is an array of numbers. If you input myArray1, the list of numbers will appear. You can input myArray1.reverse() to 
//receive the array of numbers in reverse. 
var myArray1 = [1,3,5,7,9] 

//This is an add function. Insert two numbers for a and b and they will be added together. 
function add(a, b) {
  return a + b;
}

//This is a function that alerts. When you enter yell with a word in parentheses, the message
//pops up with two exclamation points//
function yell(message) {
  alert(message + "!!");
}

//This is a percentage function. Enter an amount and the amounnt will be be divided by 4//
function makeAddFunction(amount) {
    return .25 * amount;
}

//This is the push method than can add something to the end as an attachment//
//The push method can take multiple arguments, each of which will attach to the array in the order 
//it was passed in. It appends them in a left-right fashion.
var data = [ "X" ]; {
	data.push( "A" );
	data.push( "B", "C" );
	console.log( data );
};

//The unshift works at the beginning of the array. The unshift inserts the specified content as the first child of each 
//element. It preprends them in a right-left fashion. 
var data = [ "X" ];
	data.unshift( "A" );
	data.unshift( "D", "E" );
	console.log( data );

//This variable has three different parts. You can type me, me.name, and me.age to receive three different outputs. 
var me = {name: "Lance Putnam", age: 24}

//This is an array of numbers. When you input this into the browser with .length, the length of the spaces of the array pops out.
var = [5,5,5,5,5].length

//In this array, the .join tag joins the set of numbers together. 
var= [5, 5, 5, 5, 5].join
var= [5, 5, 5, 5, 5].join()

//In this array, the words between the quotation marks are placed in between the spaces of the numbers. 
var= [5,5,5,5,5].join("ineedabeer")

//In this, the .pop is used to pop out the last number in the array, which is 5.
var= [3, 3, 3, 4, 5].pop()

//In this sequence, the .pop takes out [false,0]
var = [12, "bourbon", true, [false, 0]].pop()

//In this sequence, .shift takes out the first item in the sequence, the 12
var = [12, "bourbon", true, [false, 0]].shift()

//When you enter this shift into the console, it pulls the first element out of the array and returns it. 
//It outputs A for Shift and ["B","C"] for data 
var data = ["A", "B", "C"]; {
	console.log( data.shift() );
	console.log( data );
};

//In this function, you can type drinks into the console and it will return with a phrase
function drinks() {
 return "We still have nothing to drink."; 
}

// This is a variable with names and values for the painting. //
var canvas = {
	name: "Loud Minds",
	length: 36, 
	width: 24,
	cost: 40,
	retail: 250 
}

//This is a function to determine the profit in dollars by subtracting the cost from the retail. //
function profitindollars (painting) {
	return profit.retail - profit.cost;
}

//This is a function to determine the profit in a percentage format//
function profitinpercentage (painting) {
	return profit.retail / profit.cost;
}

console.log( 'Profit from Loud Minds:', profitindollars(canvas) );

console.log('Profit Margin from Loud Minds:' , profitinpercentage(canvas));

// A split is used, which takes out the e's in the sentence. 
var = "Drink Beer All the Time".split("e")

//This is a slice. Slices do not alter the original array. It will return blue and oragne. 
var colors = ["Green", "Blue", "Orange", "Yellow", "Red"];
var colors = colors.slice(1, 3);

//This is for a variable with the values for a painting 
var painting = {
	series: 4
	color: function () {
		return "Blue";
	}
}

//The painting will be series of 4 and color of blue. 
console.log(painting.series)

console.log(painting.color)



