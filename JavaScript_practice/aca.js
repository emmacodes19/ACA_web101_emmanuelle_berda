// 1. Follow the instructions in each of the comment lines like the one you're reading now. 

// the var below is a keyword in JS that says to the computer, "Hey, we're creating a bucket to hold data".
var myNullValue = null;
// the name "myTruthyValue" is the name we gave to that bucket.
var myTruthyValue = true;
// the single " = " sign assigns the value of "false" to the bucket. Go to line 10 and try it yourself.
var myFalseyValue = false;

// 2. assign the variable below a number. hint: type in " = 11; " after myNumber
var myNumber
// 3. assign the variable below a different number
var mySecondNumber;

// 4. assign the variable below a string value with " ". Make it a greeting like: "Hello"
var myDoubleQuotedVar;

// 5. assign the variable below a string value with ''. Make it a name like: 'Leila'
var mySingleQuotedVar;

// 6. Declare and name a variable then assign it the value of anything you'd like on line 22.


// 7. Do the same this here on line 25.


// 8. Now go to line 60 and replace the OOO with your variable name on line 22 and replace XXX with the variable name on line 25.

// 9.  When you replace them on line 60, come back here and scroll through the comments and code to see if you can make sense of it all. 

// This function takes in two numbers as parameters and returns the greater one. 
function compareTwoNumbers(a, b) {
  if (a > b) {
    console.log("CompareTwoNumber: Number 'a' is greater " + a)
  }
  else{
    console.log("CompareTwoNumber: Number 'b' is greater " + b)
  }
}

// This block is a function that takes to arguments and returns them together in one line. This is called "concatenation"
function concatGreetingWithName(greeting, name){
  return console.log("Your greeting is: " + greeting + " " + name)
}

// This function takes in two parameters and compares them. If they are strictly equal or if they are not. 
function isEqualTo(first, second) {
  if(first === second){
    return console.log("The two variables " + first + " and " + second + " are equal to each other." )
  } else {
    return console.log("The two variables " + first + " and " + second + " are NOT equal to each other." )
  }
}

// this line calls/invokes the function compareTwoNumbers and passes it myNumber and mySecondNumber as arguments
compareTwoNumbers(myNumber, mySecondNumber)
// this line calls concatGreetingWithName and passes it the two arguments
concatGreetingWithName(myDoubleQuotedVar, mySingleQuotedVar)
// This line calls the isEqualTo function
isEqualTo(OOO, XXX)

// 10. Click the run button at the top. 

// 11. Lastly, play around with the code. Change the variables and pass in differnt names into the function calls on line 53, 55 and 57. You can mess anything up. And always look at the output on the right. 




