function greet(name: string): string {
  return `Hello, ${name}`;
}
console.log(greet("John"));

//typescript 기본 자료형
//숫자
let age: number = 20;
age = 20.5;
//age = "20";  숫자인데 문자열 지정으로 오류
const PI: number = 3.14;
//전통적으로 상수는 대문자로 써왔다.

//문자열
let nickname: string = "John";
nickname = "Doe";
//redeclare 중복될때 나오는 에러

//불리언
let isActive: boolean = true;
