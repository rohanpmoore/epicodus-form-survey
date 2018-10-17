$(document).ready(function(){
  $("#surveyForm").submit(function(event) {
    var name = $("input#fullName").val();
    var born = $("#born").val();
    var drink = $("#beverage").val();
    var color = $("#color").val();
    var gender = $("input:radio[name=gender]:checked").val();

    $(".nameField").text(name);
    $(".birthField").text(born);
    $(".drinkField").text(drink);
    $(".colorField").text(color);
    $(".genderField").text(gender);

    $("#infoReturn").show();
    $("#surveyField").hide();

    event.preventDefault();
  });
});
