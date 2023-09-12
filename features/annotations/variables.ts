// 변수 선언과 초기화가 동시에 이루어지면 타입 추론이 일어난다. (apples: number)
let apples = 5;
apples = 'delicious'; // apples의 타입이 number로 추론되었기 때문에 에러가 발생한다.

// 동시에 이루어지지 않으면 타입 추론이 일어나지 않는다. (apples: any)
let speed;
speed = 'fast';
speed = 10; // any 타입이기 때문에 에러가 발생하지 않는다.

let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
//* 1) 변수 선언을 하고 초기화를 나중에 할 때
//* 2) 추론이 불가능한 타입을 사용할 때
//* 3) 함수가 any 타입을 반환하는데, 그 값을 명확히 하고 싶을 때

// JSON.parse()는 다양한 타입을 반환할 수 있기 때문에 타입 추론이 일어나지 않는다.
// 따라서 coordinates의 타입은 any가 된다.
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}: any
