//Interface logic
$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    
    let androidIos = $("input:radio[name=android-ios]:checked").val();
    let mobileWeb = $("input:radio[name=mobile-web]:checked").val();
    let frontBack = $("input:radio[name=front-back]:checked").val();
    let difficulty = $("input:radio[name=difficulty]:checked").val();
    let logo = $("input:radio[name=logo]:checked").val();
    
    let cJs;
    let pythonJs;
    let swiftJs;
    let javascriptJs;
    
    businessLogic();
    
    $(".person1").text(businessLogic);

    function businessLogic () {
      if(androidIos === "android") {
        if(mobileWeb === "mobile") {
          if (difficulty != "easy") {
              cJs = "C#"; 
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
        else { 
          if (frontBack === "back") { 
            if (difficulty != "easy") { 
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
          else {
            if (difficulty != "easy") { 
              if (logo === "coffee" || logo === "snakes") { 
                $("#javascript").show();
              } 
              else {
                $("#c").show();
              }
            } 
            else { 
              if (logo === "coffee") {
                $("#javascript").show();
              } 
              else if (logo === "snakes") {
                $("#python").show();
              } 
              else if (logo === "musical") {
                $("#c").show();
              }
            }
          }
        }
      } 
      else {
        $("#swift").show();
      }
    } //this is the end of the function
    event.preventDefault();
  });
});