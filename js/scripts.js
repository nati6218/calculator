
var add = function(number1, number2){
return number1 + number2;
};

var substract = function(number1, number2){
  return number1 - number2;
};

var multiply = function(number1, number2){
  return number1 * number2;
};
var divide = function(number1, number2){
  return number1 / number2;
};
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var result = add(number1, number2);
  $("#output").text(result);
  });

  $("form#substract").submit(function(event) {
    event.preventDefault();
  var number1 = parseInt($("#less1").val());
  var number2 = parseInt($("#less2").val());
  var substract = parseInt(number1) - parseInt(number2);
  $("#output").text(substract);
  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
  var number1 = parseInt($("#multiply1").val());
  var number2 = parseInt($("#multiply2").val());
  var multiply = parseInt(number1) * parseInt(number2);
  $("#output").text(multiply);
  });

  $("form#divide").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var divide = (number1) / (number2);
    $("#output").text(divide);
  });
});
