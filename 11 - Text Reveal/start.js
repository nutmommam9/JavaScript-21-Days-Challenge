(() => {
  // เริ่มเขียนโค้ด
  function onScroll(){
    const sectionElem = Array.from(document.querySelectorAll('section'));

    sectionElem.forEach((sectionElem) => {
      const imgElem = sectionElem.querySelector('img');
      const textElem = sectionElem.querySelector('.text');

      const scrollPosition = window.pageYOffset;
      const revealPosition = imgElem.offsetTop + imgElem.offsetHeight / 10;

      if (scrollPosition >= revealPosition) {
        textElem.classList.add('reveal');
      }
    })
  };

  function run(){
    document.addEventListener('scroll', onScroll);
  }

  run();
})();
