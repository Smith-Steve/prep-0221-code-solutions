var person = {
  firstName: 'Steve',
  lastName: 'Smith',
  hobby: 'coding'
};

var fullName = person.firstName + ' ' + person.lastName;
person.job = 'coder';
person.previousJob = 'Data Analyst';

console.log(person);
console.log('The person\'s full name is: ' + fullName);
console.log(fullName + '\'s job is to be a : ' + person.job);
console.log(fullName + '\'s previous job was a: ' + person.previousJob);
console.log('This is a console log of the entire person object. Let\'s see if it worked!');
console.log(person);

var myCar = { make: 'Chrysler', model: 'GT Lebaron', year: 1986, interior: 'Cheetah-Zebra' };
console.log(myCar);

myCar['owner'] = fullName;
myCar['color'] = 'dark blue';
console.log(`${myCar.owner} is the owner of the ${myCar.year} ${myCar.make} ${myCar.model}`);
console.log(person);
console.log(fullName);
console.log(myCar);
