function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('The result of add two numbers is: ', addTwoNumbersResult);

function convertHoursToMinutes(number) {
  return number * 60;
}

var hoursToMinuteResult = convertHoursToMinutes(2);
console.log('The result of the number of hours is: ', hoursToMinuteResult);

function personalizeGreeting(name) {
  console.log('Hello ', name);
}

var returnPersonalizedGreeting = personalizeGreeting('Steve');
console.log(returnPersonalizedGreeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var resultAddAndMultiplyBy5 = addAndMultiplyBy5(5, 5);
console.log(resultAddAndMultiplyBy5);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var resultMultiplyAndDivideBy5 = multiplyAndDivideBy5(5, 5);
console.log(resultMultiplyAndDivideBy5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var resultSubtractTwoNumbers = subtractTwoNumbers(2, 5);
console.log(resultSubtractTwoNumbers);

function getCircleCircumference(radius) {
  var diameter = 2 * Math.PI * radius;
  return diameter;
}

var circle = getCircleCircumference(5);
console.log(circle);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('steve', 'smith');
console.log(fullName);

function cube(number) {
  return Math.pow(number, 3);
}
var resultCube = cube(5);
console.log(resultCube);
