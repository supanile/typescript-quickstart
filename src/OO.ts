class Human {
  name: string = "";
  lastname: string = "";
  age: number = 0;

  sayHello() {
    return "Hello ! I'm " + this.name + " and " + this.age + " years old.";
  }
}

const user1: any = new Human();
user1.name = "Supawuay Huakich";
user1.age = 22;
console.log(user1.sayHello());
