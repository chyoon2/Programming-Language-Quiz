//Businasty logic

//Interface logic
$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    let androidIos = $("input:radio[name=android-ios]:checked").val();
    let mobileWeb = $("input:radio[name=mobile-web]:checked").val();
    let frontBack = $("input:radio[name=front-back]:checked").val();
    let difficulty = $("input:radio[name=difficulty]:checked").val();
    let logo = $("input:radio[name=logo]:checked").val();
    $("#swift").show();
  });
});