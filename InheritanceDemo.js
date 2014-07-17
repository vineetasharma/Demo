function User(name){
    var name=name;
    this.getname=function(){
        return name;
    }
}
function Employee(name,salary){
    User.call(this,name);
    var salary=salary;
    this.getSalary=function(){
        return salary;
    }
}
Employee.prototype.constructor=Employee;
var obj=new Employee('vini','10000');
console.log(obj.getname());//vini
console.log(obj.getSalary());//10000
console.log(this.name);//undefined
console.log(this.salary);//undefined

var obj1=new Employee('sari','20000');
console.log(obj1.getname());//vini
console.log(obj1.getSalary());//10000
console.log(this.name);//undefined
console.log(this.salary);//undefined


//console.log(this.salary);//undefined*/



/*


*//*
 Define the Person constructor
function Person(firstName) {
    this.firstName = firstName;
}
Person.prototype.walk = function(){
   console.log("I am walking!");
};
Person.prototype.sayHello = function(){
    console.log("Hello, I'm " + this.firstName);
};

function Student(firstName, subject) {

    Person.call(this, firstName);


    this.subject = subject;
};


Student.prototype = Object.create(Person.prototype); // See note below

Student.prototype.constructor = Student;

Student.prototype.sayHello = function(){
    console.log("Hello, I'm " + this.firstName + ". I'm studying " + this.subject + ".");
};

Student.prototype.sayGoodBye = function(){
   console.log("Goodbye!");
};

var student1 = new Student("Janet", "Applied Physics");
student1.sayHello();   // "Hello, I'm Janet. I'm studying Applied Physics."
student1.walk();       // "I am walking!"
student1.sayGoodBye(); // "Goodbye!"

console.log(student1 instanceof Person);  // true
console.log(student1 instanceof Student); // true
*/
