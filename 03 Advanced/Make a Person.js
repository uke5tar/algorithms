/* --- TASK ---

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

*/


var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    var firstName = firstAndLast.split(" ")[0];
    var lastName = firstAndLast.split(" ")[1];
    
    this.getFirstName = function() {
        return firstName;
    };
    
    this.getLastName = function() {
        return lastName;
    };
    
    this.getFullName = function() {
      return firstName + " " + lastName;
    };
    
    this.setFirstName = function(first) {
        firstName = first;
        return firstName;
    };
    
    this.setLastName = function(last) {
        lastName = last;
        return lastName;
    };
    
    this.setFullName = function(full) {
        firstName = full.split(" ")[0];
        lastName = full.split(" ")[1];
        return firstName + " " + lastName;
    };
  
};

var bob = new Person('Bob Ross');
bob.getFullName();
