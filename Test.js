function Test() {
    let s = "w";
    console.log('test', Number(s.charAt(0)));
    console.log(Number(s.charAt(0)) == NaN);
}
console.log(Test());