function setCountdown(targetDate) {
  // Установка даты окончания
  var endDate = new Date(targetDate).getTime();

  // Обновление таймера каждую секунду
  var x = setInterval(function () {
    // Текущая дата и время
    var now = new Date().getTime();

    // Разница между текущей датой и датой окончания
    var distance = endDate - now;

    // Расчет времени (дни, часы, минуты, секунды)
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Форматирование времени в виде (DD:HH:MM:SS)
    var formattedTime = formatNumber(minutes) + ":" + formatNumber(seconds) + " left";
    console.log("(" + formatNumber(days) + ":" + formatNumber(hours) + ":" + formatNumber(minutes) + ":" + formatNumber(seconds) + ")");

    // Вывод оставшегося времени в элемент с классом "time"
    $(".time").html(formattedTime);

    // Че делать если таймер закончился
    if (distance < 0) {
      clearInterval(x);
      $(".time").html("00:00 left");
    }
  }, 1000);

  // Функция для форматирования числа с добавлением ведущего нуля
  function formatNumber(number) {
    return number < 10 ? "0" + number : number;
  }
}
// Вызов таймера. Год-месяц-дата чч:мм:сс
setCountdown("2023-12-26 15:10:00");


// function setCountdown(targetDate) {
//   // Получаем дату окончания в миллисекундах с учетом UTC
//   var endDate = new Date(targetDate + 'Z').getTime();

//   var x = setInterval(function () {
//     // Получаем текущее время в миллисекундах с учетом UTC
//     var now = new Date().getTime();

//     var distance = endDate - now;

//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     var formattedTime = formatNumber(minutes) + ":" + formatNumber(seconds) + " left";
//     console.log("(" + formatNumber(days) + ":" + formatNumber(hours) + ":" + formatNumber(minutes) + ":" + formatNumber(seconds) + ")");

//     $(".time").html(formattedTime);

//     if (distance < 0) {
//       clearInterval(x);
//       $(".time").html("00:00 left");
//     }
//   }, 1000);

//   function formatNumber(number) {
//     return number < 10 ? "0" + number : number;
//   }
// }

// // Пример вызова функции с передачей даты
// setCountdown("2024-01-07T20:43:00");