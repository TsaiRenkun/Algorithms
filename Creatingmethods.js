function Person(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    //Creating a method using object
    this.name = function() {return this.firstName + " " + this.lastName;};
}

var MyName = new Person("renkun", "tsai", "24")

console.log(MyName)
console.log("Created a method to be used " + MyName.name())

