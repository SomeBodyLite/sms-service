// stopCountdown() - Остановить таймер

var intervalId;

function setCountdown(targetDate) {
  var endDate = new Date(targetDate + 'Z').getTime();
  var maxDuration = 10 * 60 * 1000; // Максимальная длительность таймера в миллисекундах (10 минут)

  intervalId = setInterval(function () {
    var now = new Date().getTime();
    var distance = endDate - now;

    // Ограничение длительности таймера
    distance = Math.min(distance, maxDuration);
    // Визуальное представление таймера в виде прогрессбара
    var progressWidth = (distance / maxDuration) * 100;
    $(".progress-success").css("width", progressWidth + "%");

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var formattedTime = formatNumber(minutes) + ":" + formatNumber(seconds) + " left";
    $(".time").html(formattedTime);

    if (distance <= 0) {
      clearInterval(intervalId);
      $(".time").html("00:00 left");
      $(".progress-success").css("width", "0%");
    }
  }, 1000);

  function formatNumber(number) {
    return number < 10 ? "0" + number : number;
  }
}

function stopCountdown() {
  clearInterval(intervalId);
  $(".time").html("Time Stopped");
  $(".progress-success").css("width", "0%");
}

setCountdown("2024-01-10 10:45:00");

// Таймер на UTC + 0 время.
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