// Parent class
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    eat() {
      console.log(`${this.name} is eating.`);
    }
  }
  
  // Child class inheriting from Animal
  class Dog extends Animal {
    constructor(name, breed) {
      // Call the constructor of the parent class
      super(name);
      this.breed = breed;
    }
  
    bark() {
      console.log(`${this.name} is barking.`);
    }
  }
  
  // Creating instances
  const myAnimal = new Animal("Lion");
  myAnimal.eat(); // Outputs: Lion is eating.
  
  const myDog = new Dog("Buddy", "Golden Retriever");
  myDog.eat();    // Outputs: Buddy is eating.
  myDog.bark();   // Outputs: Buddy is barking.
  