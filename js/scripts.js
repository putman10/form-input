$(document).ready(function() {
  $(".order-entry").submit(function(event) {
  var firstName = $("#first-name").val();
  var lastName = $("#last-name").val();
  var addressOne = $("#inputAddress").val();
  var addressTwo = $("#inputAddress2").val();
  var cityName = $("#inputCity").val();
  var stateName = $("#inputState").val();
  var zipCode = $("#inputZip").val();
  $("#greeting").html(firstName + " " + lastName);
  $("#addressLineOne").html(addressOne + "<br>" + addressTwo);
  $("#addressLineTwo").html(cityName + ", " + stateName + " " + zipCode);
  $(".receipt").show();
  event.preventDefault();
  });
});
