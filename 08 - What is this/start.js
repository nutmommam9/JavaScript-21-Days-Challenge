(() => {
  // เริ่มเขียนโค้ด

  // 1. Lexical scope & Dynamic scope
  // function printName(){
  //   console.log(this);
  // };

  // printName();

  // 2. How to know what is "this"?
  // function printName(){
  //   console.log(this);
  //   console.log(`My name is ${this.name}`);
  // };

  //// 2.1 Invoker object
  // const thatton = { name: 'Thatton', printName };
  // const nut = { name: 'Nut', printName};

  // thatton.printName();
  // nut.printName();

  // 2.2 Global object (window, global)
  // name = 'Global';
  // printName();

  //// 2.3 Constructor function
  // function Person(name){
  //   this.name = name;
  //   this.printName = printName;
  // }

  // const thatton = new Person('Thatton');

  // thatton.printName();

  // 3. call(), apply(), and bind()
  function printName(nationality, city) {
    console.log(this);
    console.log(`My name is ${this.name}, I'm ${nationality} and am living in ${city}`);
  }

  function Person(name, nationality, city) {
    this.name = name;
    this.nationality = nationality;
    this.city = city;

    printName(this.nationality, this.city);
    printName.call(this, this.nationality, this.city);
    printName.apply(this, [this.nationality, this.city]);
    
    const printThatton = printName.bind(this);
    printThatton(this.nationality, this.city);
  }

  const thatton = new Person('Thatton', 'Thai', 'KhonKaen');

})();
