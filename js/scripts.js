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
    
    if(androidIos === "android") {
      if(mobileWeb === "mobile") {//if this is true do not show javascript
        if (difficulty != "easy") { //do not show python/javascript/swift)
            $("#c").show();
          } 
          else {
            if (logo === "snakes" || logo === "coffee") {
              $("#python").show();
            } 
            else {
              $("#c").show();
            } 
          }
      } 
      else if (mobileWeb === "web") { //showing javascript-web
        if (frontBack === "back") { //no longer js
          if (difficulty != "easy") { //no python
            $("#c").show();
          } 
          else if (difficulty === "easy"){ //with python
            if (logo === "snakes" || logo === "coffee") {
              $("#python").show();
              } 
              else if (logo === "musical" || logo === "birds"){
                $("#c").show();
              } 
          }
        }else if (frontBack === "front"){ //showing js
          if (difficulty != "easy"){ //no python
            if (logo === "coffee" || logo === "snakes"){ //no python
              $("#javascript").show();
            } 
            else if (logo === "musical" || logo === "birds") {
              $("#c").show();
            }
          } 
          else if (difficulty === "easy"){ //js c python
            if (logo === "coffee"){
              $("#javascript").show();
            } 
            else if (logo === "snakes"){
              $("#python").show();
            } 
            else if (logo === "musical"){
              $("#c").show();
            }
          }
        }
      }
    } 
    else{
      $("#swift").show();
    }
  });
});