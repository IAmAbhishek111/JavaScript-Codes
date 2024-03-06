# JavaScript and Classes

## OOPS
- Object-oriented programming (OOP) is a programming paradigm that uses objects, which are instances of classes, to organize code.


## why use OOPS in JS:
-  Using OOP in JavaScript brings structure, reusability, and maintainability to your code, making it easier to develop, understand, and enhance over time

## Concept of OOPS:

# Object-Oriented Programming in JavaScript

This repository demonstrates the core Object-Oriented Programming (OOP) concepts in JavaScript. Each concept is explained with code examples.

## Concepts:

1. **Objects:**
- Objects in JavaScript are key-value pairs that can represent real-world entities. You can create objects using literal notation or the Object constructor.

   - Example: [Objects](examples/objects.js)
     ```javascript
     // Object literal notation
     const person = {
       name: 'John Doe',
       age: 25,
       greet: function() {
         console.log(`Hello, my name is ${this.name}`);
       }
     };

     // Accessing object properties
     console.log(person.name); // John Doe
     person.greet(); // Hello, my name is John Doe
     ```

2. **Classes:**
- ES6 introduced the class keyword, allowing a more structured way to create objects. Classes act as blueprints for objects.

   - Example: [Classes](examples/classes.js)
     ```javascript
     // Class declaration
     class Animal {
       constructor(name) {
         this.name = name;
       }

       speak() {
         console.log(`${this.name} makes a sound.`);
       }
     }

     // Creating instances
     const dog = new Animal('Dog');
     dog.speak(); // Dog makes a sound.
     ```

3. **Inheritance:**
- Inheritance allows a class to inherit properties and methods from another class. This promotes code reusability.

   - Example: [Inheritance](examples/inheritance.js)
     ```javascript
     // Inheritance
     class Dog extends Animal {
       constructor(name, breed) {
         super(name); // Call the parent class constructor
         this.breed = breed;
       }

       bark() {
         console.log('Woof!');
       }
     }

     // Creating an instance of the derived class
     const labrador = new Dog('Buddy', 'Labrador');
     labrador.speak(); // Buddy makes a sound.
     labrador.bark(); // Woof!
     ```

4. **Encapsulation:**
- Encapsulation is about bundling data and methods that operate on that data within a single unit, often a class.

   - Example: [Encapsulation](examples/encapsulation.js)
     ```javascript
     // Encapsulation
     class Counter {
       #count = 0; // Private field

       increment() {
         this.#count++;
       }

       getCount() {
         return this.#count;
       }
     }

     const counter = new Counter();
     counter.increment();
     console.log(counter.getCount()); // 1
     ```

5. **Polymorphism:**
- Polymorphism allows objects to be treated as instances of their parent class, enabling flexibility and code extensibility.

   - Example: [Polymorphism](examples/polymorphism.js)
     ```javascript
     // Polymorphism
     function makeSound(animal) {
       animal.speak();
     }

     makeSound(new Animal('Cat')); // Cat makes a sound.
     makeSound(new Dog('Buddy', 'Labrador')); // Buddy makes a sound.
     ```




