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
    
    if(androidIos === "android"){//if this is true do not show swift
      if(mobileWeb === "mobile") {//if this is true do not show javascript
        if (difficulty != "easy"){ //do not show python/javascript/swift)
            $("#c").show();
          } else {
            if (logo === "snakes" || logo === "coffee") {
            $("#python").show();
            } else if (logo === "musical" || logo === "birds"){
              $("#c").show();
            } 
          }
      } else if (mobileWeb === "web"){ //showing javascript
        

      }
    } else{
      $("#swift").show();
    }
  });
});