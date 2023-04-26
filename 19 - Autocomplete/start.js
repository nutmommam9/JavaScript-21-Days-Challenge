(() => {
  // เริ่มเขียนโค้ด
  const carBrands = [
    "BMW",
    "Maserati",
    "Mercedes Benz",
    "Ferrari",
    "Toyota",
    "Honda",
    "Hyundai",
  ];

  const searchElem = document.querySelector(".search");

  function clearResults(){
    const ulElem = document.querySelector('.results');
    if(ulElem) {
      document.body.removeChild(ulElem);
    }
  }

  function selectCarBrand(event){
    searchElem.value = event.target.innerText;
    clearResults();
  }

  function onInput(event) {
    const inputText = event.target.value.toLowerCase();

    const matchCarBrands = carBrands.filter((carBrand) =>
      carBrand.toLowerCase().startsWith(inputText)
    );

    const ulElem = document.createElement("ul");
    ulElem.classList.add("results");

    matchCarBrands.forEach((carBrands) => {
      const liElem = document.createElement("li");
      liElem.innerText = carBrands;
      liElem.onclick = selectCarBrand;
      ulElem.appendChild(liElem);
    });
    document.body.appendChild(ulElem);
  }

  function run() {
    searchElem.addEventListener("input", onInput);
    document.addEventListener('click', clearResults);
  }

  run();
})();
