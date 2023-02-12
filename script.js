$(".estimate").click(function () {
  var fee = parseFloat($("#course-fee").val()) / 2;
  var exchangeRate = parseFloat($(".exchange-rate").val());
  var scholarship = parseFloat($(".scholarship").val()) * -1;
  var medicalAUD = 1500;
  var flightCost = 2000;
  var immiAUD = 638;
  var surAUD = 2000;
  var totalCost =
    fee +
    exchangeRate +
    medicalAUD +
    flightCost +
    immiAUD +
    surAUD -
    scholarship;
  $(".tuition-fee-AUD").html(fee);
  $(".tuition-fee-NPR").html(fee * exchangeRate);
  $(".scholarship-AUD").html(fee * (scholarship / 100));
  $(".scholarship-NPR").html(fee * (scholarship / 100) * exchangeRate);
  $(".medical-NPR").html(exchangeRate * medicalAUD);
  $(".medical-AUD").html(medicalAUD);
  $(".immi-AUD").html(immiAUD);
  $(".immi-NPR").html(exchangeRate * immiAUD);
  $(".sur-AUD").html(surAUD);
  $(".sur-NPR").html(exchangeRate * surAUD);
  $(".flight-AUD").html(flightCost);
  $(".flight-NPR").html(exchangeRate * flightCost);
  $(".total-AUD").html(totalCost);
  $(".total-NPR").html(totalCost * exchangeRate);
});
document.querySelector(".AustraliaPC").addEventListener("click", function () {
  document.querySelector(".Australia-defination").classList.remove("hide");
});
document.querySelector(".closeButton").addEventListener("click", function () {
  document.querySelector(".Australia-defination").classList.add("hide");
});
// alert("I am here");
