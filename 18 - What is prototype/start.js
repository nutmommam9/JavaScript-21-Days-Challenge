(() => {
  // เริ่มเขียนโค้ด

  // 1. Class vs Prototype
  // class Person {

  // }

  // const thatton = new Person();
  // console.log(thatton)

  // 2. What's prototype?
  // const name = 'Thatton';
  // console.log(name.__proto__);

  // const arr = [];
  // console.log(arr.__proto__);

  // 3. Prototype chain
  // const name = 'Thatton';
  // console.log(name.__proto__);
  // console.log(name.toLocaleString());

  // 4. Extend a prototype
  const name = "Thatton";
  function sayHello(val) {
    console.log(`Hello ${val}`);
  }

  String.prototype.sayHello = sayHello;
  console.log(name.__proto__);
  name.sayHello("World");
})();
