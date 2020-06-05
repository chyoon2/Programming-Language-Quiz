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
    
    if(androidIos === "ios"){
      $("#swift").show();
    } else{
      if(mobileWeb === "mobile") {//if this is true do not show javascript
        if (difficulty != "easy"){ //do not show python
          if(logo === "birds"){
            $("#swift").show();
          } else if (logo ==="musical") {
            $("#c").show();
          }
        } else {
          if (logo === "snakes") {
          $("#python").show();
          } else if (logo === "birds"){
            $("#swift").show();
          } else if (logo === "musical"){
            $("#c").show();
          }
        }
      }
      } 
      //else if (mobileWeb === web) { if this true do not show swift

      // }

      // }
  });
});