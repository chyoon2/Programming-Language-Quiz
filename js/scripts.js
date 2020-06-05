//Businasty logic

//Interface logic
$(document).ready(function() {
  $("form#form-one").submit(function(event) {
    event.preventDefault();
    const spirit =  $("input:radio[name=mobile-web]:checked").val();
    const season =  $("input:radio[name=android-ios]:checked").val();
    const spirit =  $("input:radio[name=front-back]:checked").val();
    const season =  $("input:radio[name=difficulty]:checked").val();
    const season =  $("input:radio[name=logo]:checked").val();
    
  });
});