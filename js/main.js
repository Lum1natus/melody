$(document).ready(function () {
  var currentFloor = 2; // переменная с текущим этажом
  var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
  var counterUp = $(".counter-up");  // стрелка увеличения этажа
  var counterDown = $(".counter-down"); // стрелка уменьшения этажа
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");

  //функция при наведении мышью на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currentFloor); // записываем значение этажа в счетчик
  });

  floorPath.on('click', toggleModal);
  modalCloseButton.on('click', toggleModal);
  viewFlatsButton.on("click", toggleModal);

  counterUp.on("click", function () {   // отслеживаем клик по кнопке вверх
    if (currentFloor < 18) {            // проверяем значение этажа, не должно быть >18
      currentFloor++;                   // прибавляем один этаж
    usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });              // форматируем переменную с этажом
      $(".counter").text(usCurrentFloor);  // записываем значение этажа в счетчик
      floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  })

  counterDown.on('click', function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
  function toggleModal() {
    modal.toggleClass("is-open");
  }

});