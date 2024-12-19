class Point {
    x: number;
    y: number;
    readonly version: string = "1.0.1";

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
        console.log("Hello");
    }
}

const point = new Point(10, 20);
point.x = 100;
console.log(`${point.x} -Hello- ${point.y}`);

/////////////////////////////////////////////////////////////////

// class Point {
//     x: any;
//     y: any;

//     // Constructor overload signatures
//     constructor(x: number, y: string);
//     constructor(s: string);
//     constructor(xs: any, y?: any);

//     // Constructor implementation
//     constructor(xOrString: any, yParam?: any) {
//         if (yParam === undefined) {
//             // Case for string constructor
//             this.x = 0;
//             this.y = xOrString;
//         } else {
//             // Case for number,string or any,any
//             this.x = xOrString;
//             this.y = yParam;
//         }
//     }
// }

// // ตัวอย่างการใช้งาน:
// const p1 = new Point(10, "hello");    // number, string
// const p2 = new Point("test");         // string
// const p3 = new Point(true, 42);       // any, any

/////////////////////////////////////////////////////////////////

// class Point {
//     private _x: number = 0;  // private property with underscore prefix

//     // Getter method - เพิ่มค่า x ขึ้น 1 ทุกครั้งที่เรียกใช้
//     get x(): number {
//         this._x = this._x + 1;
//         return this._x;
//     }

//     // Setter method
//     set x(value: number) {
//         this._x = value;
//     }
// }

// // สร้าง instance
// const p = new Point();

// // ทดสอบเรียกใช้ getter 3 ครั้ง
// console.log(p.x);  // จะได้ค่า 1
// console.log(p.x);  // จะได้ค่า 2
// console.log(p.x);  // จะได้ค่า 3

/////////////////////////////////////////////////////////////////

class Person {
    name: string = "";

    constructor(name: string) {
        this.name = name;
    }

    sayHi() {
        console.log(`Hi, I'm ${this.name}`);
    }
}

class Employee extends Person {
    salary: number = 0;

    constructor(name: string, salary: number) {
        super(name);
        this.salary = salary;
    }
}

// สร้าง instance ของ Employee
const person = new Employee("John", 15000);
person.sayHi();  // จะแสดงผล: Hi, I'm John