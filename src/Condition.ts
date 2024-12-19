if (true && false) {
  console.log("✅Always executed.");
} else {
  console.log("❌Never executed.");
}

if (false || true) {
  console.log("❌Never executed.");
}

let x: number = 10, y: number = 20;

if (x < y) {
    console.log('x น้อยกว่า y');
} else if (true) {
    console.log('เงื่อนไขเป็นจริงเสมอ');
} else {
    console.log('ไม่มีเงื่อนไขใดเป็นจริง');
}

// Ternary Operator
let x: number = 10, y: number = 20;

x > y ? console.log('✅') : console.log('❌');


// Switch Case

let selectMenu: number = 2;

switch(selectMenu-1) {
    case 0:
        console.log("Hello");
        break;
    case 1:
        console.log("World");
        break;
    case 2:
        console.log("Hello World");
        break;
}