// function sayHello(): number {
//     console.info("Hello World");
//     return 1;
// }

// console.log(sayHello());

// function sayHello(name: string, lastname: string = "None"): string {
//     return name + " " + lastname;
// }

// console.log("Hello " + sayHello("Supa"));

function sayHello(name: string = "None", lastname: string = "None"): string {
  return name + " " + lastname;
}

function sum(a: number, b: number, ...rest: number[]): number {
  return a + b + rest.reduce((acc, num) => acc + num, 0);
}

function add({ x, y: { x: number, y: number } }): number {
  return x + y;
}

console.log(add({ y: 5, x: 100 }));
console.log("Hello " + sum(1, 2, 3, 4, 5));
