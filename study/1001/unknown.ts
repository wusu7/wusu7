//unknown 타입의 매개변수를 받아, 숫자일 경우 제곱을 출력하고 문자열이면 길이를 출력하는 함수를 작성해보세요.
function printValue(value: unknown) {
  //함수를 작성해보세요
  //unknown 탑입의 매개변수를 바다
  //숫자일 경우 제곱을 출력하고 문자열이면 길이를 출력하는
  if (typeof value === "number") {
    console.log(value * value);
  } else if (typeof value === "string") {
    console.log(value.length);
  }
}
//외부 API로부터 unknown 타입의 값을 받아,
// 객체인지 확인한 뒤
// 속성 값을 출력하는 예제를 작성하세요.
function externalApi(data: unknown) {
  if (typeof data === "object" && data !== null && "name" in data) {
    console.log(data.name);
  }
}
//사용자 정의 타입 가드 (isProduct)를 만들어
// unknown 값이 특정 인터페이스를 만족하는지 검사해보세요.
