/**
 * @author Balamurugan V <svbala99@gmail.com>
 */
(function ($) {
  "use strict";
  $(".sakura-falling").sakura();
})(jQuery);

$(document).on("click", function () {
  document.getElementById("my_audio").play();
});

// Set the date we're counting down to
var countDownDate = new Date("Jan 27, 2021 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("time").innerHTML =
    "<div class='wrap'><p class='date circle'>" +
    days +
    "&nbsp;Days</p>&nbsp;&#9201;&nbsp;&nbsp;<p class='date circle'>" +
    hours +
    "&nbsp;Hrs</p>&nbsp;&#9201;&nbsp;&nbsp;<p class='date circle'>" +
    minutes +
    "&nbsp;Mins</p>&nbsp;&#9201;&nbsp;&nbsp;<p class='date circle'>" +
    seconds +
    "&nbsp;Secs</p>&nbsp;&#9201;&nbsp;&nbsp; " +
    "</div>";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "We're married!";
  }
}, 1000);

// being a bit cool :p
var styles = [
  "background: linear-gradient(#D33106, #571402)",
  "border: 4px solid #3E0E02",
  "color: white",
  "display: block",
  "text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)",
  "box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
  "line-height: 40px",
  "text-align: center",
  "font-weight: bold",
  "font-size: 32px",
].join(";");

var styles1 = [
  "color: #FF6C37",
  "display: block",
  "text-shadow: 0 2px 0 rgba(0, 0, 0, 1)",
  "line-height: 40px",
  "font-weight: bold",
  "font-size: 32px",
].join(";");

var styles2 = [
  "color: teal",
  "display: block",
  "text-shadow: 0 2px 0 rgba(0, 0, 0, 1)",
  "line-height: 40px",
  "font-weight: bold",
  "font-size: 32px",
].join(";");
