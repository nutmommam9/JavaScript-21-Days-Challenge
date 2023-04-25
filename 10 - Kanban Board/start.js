(() => {
  // เริ่มเขียนโค้ด
  let draggingElem;

  function onDrageStart() {
    draggingElem = this; // this ดึงมาจาก taskElem
  }

  function onDrop() {
    this.append(draggingElem);
    draggingElem = null;
  }

  function onDragOver(event) {
    event.preventDefault();
  }

  function onDragEnter(event) {
    event.preventDefault();
  }

  function run() {
    const taskElem = Array.from(document.querySelectorAll('.task'));
    const dropZoneElem = Array.from(document.querySelectorAll('.drop-zone'));

    taskElem.forEach((taskElem) => {
      taskElem.addEventListener('dragstart', onDrageStart);
    });

    dropZoneElem.forEach((dropZoneElem) => {
      dropZoneElem.addEventListener('drop', onDrop);
      dropZoneElem.addEventListener('dragover', onDragOver);
      dropZoneElem.addEventListener('dragenter', onDragEnter);
    });
  }

  run();
})();
