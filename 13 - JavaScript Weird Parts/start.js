(() => {
  // เริ่มเขียนโค้ด

  // 1. NaN
  if (NaN * 1 === NaN) {
    console.log("Equal");
  }

  const result = 1 / "hello";
  // ใช้ function Number.isNaN() เพื่อเช็ค NaN
  if (Number.isNaN(result)) {
    console.log('Equal to NaN');
  }

  // 2. Type Coercion
  if (3 > 2 > 1) {
    console.log('Inside');
  }

  console.log(2 - '1'); // 1 <Integer>
  console.log(2 + '1'); // 21 <String> <เพราะสัญลักษณ์ '+','-'>
  console.log(2 + Number.parseInt('1', 10));

  console.log(true + true);

  // 3. Interpreter & Compiler

  function getPerson(){
    return 
    {
      name: 'Thatton'
    };
  }

  console.log(getPerson())

  // 4. Checking Object Type
  const person = {};
  if(typeof person === 'object' && person !== null) {
    console.log('Yes, obejct');
  }

})();
