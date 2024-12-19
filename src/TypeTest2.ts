const app_name = "My App";
const app_version = "1.0.0";
const myArray: number[] = [1, 2, 3];
let myArray2: any[] = [1, 2, 3, "Hello"];

function sayHello() {
  if (true) {
    var myName: string = "Bob";
    var myAge: number;
    var canVote = true;
    var i;
  }
  console.log(myName);
}

console.log(myArray2.pop());
console.log(myArray2.push("Prayut"));
console.log(myArray2);

// Tuple

let employee: [number, string, boolean] = [1, "Mister P", true];
console.log(employee[1]);

// Enum
enum WorkStatus {
  Task = 1,
  Working,
  Done,
}
// Tuple Array

let employee2: [number, string, boolean][] = [
  [1, "Mister P", true],
  [2, "Mister A", false],
];
console.log(employee2);
employee2.push([3, "Mister B", true]);
console.log(employee2);

console.log(WorkStatus.Done);
