//Interface logic
$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const androidIos = $("input:radio[name=android-ios]:checked").val();
    const mobileWeb = $("input:radio[name=mobile-web]:checked").val();
    const frontBack = $("input:radio[name=front-back]:checked").val();
    const difficulty = $("input:radio[name=difficulty]:checked").val();
    const logo = $("input:radio[name=logo]:checked").val();
    let codingLanguage;
    businessLogic();
    $(".language").text(codingLanguage);
    show();

    function businessLogic () {
      if(androidIos === "android") {
        if(mobileWeb === "mobile") {
          if (difficulty != "easy") {
            codingLanguage = "C#";
          } 
          else {
            if (logo === "snakes" || logo === "coffee") {
              codingLanguage = "Python";
            } 
            else {
              codingLanguage = "C#";
            } 
          }
        } 
        else { 
          if (frontBack === "back") { 
            if (difficulty != "easy") { 
              codingLanguage = "C#";
            } 
            else {
              if (logo === "snakes" || logo === "coffee") {
                codingLanguage = "Python";
              } 
              else {
                codingLanguage = "C#";
              } 
            }
          } 
          else {
            if (difficulty != "easy") { 
              if (logo === "coffee" || logo === "snakes") { 
                codingLanguage = "JavaScript";
              } 
              else {
                codingLanguage = "C#";
              }
            } 
            else { 
              if (logo === "coffee") {
                codingLanguage = "JavaScript";
              } 
              else if (logo === "snakes") {
                codingLanguage = "Python";
              } 
              else if (logo === "musical") {
                codingLanguage = "C#";
              }
            }
          }
        }
      } 
      else {
        codingLanguage = "Swift";
      }
    }
    function show(){
      if (codingLanguage === "C#") {
        $("#c").show();
      }
      else if (codingLanguage === "Python") {
        $("#python").show();
      }
      else if (codingLanguage === "JavaScript") {
        $("#javascript").show();
      }
      else {
        $("#swift").show();
      }
    }
  });
});