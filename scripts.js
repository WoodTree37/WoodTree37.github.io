
/* Navigation Menu when small*/
  function Drop() {
  document.getElementById("myDropdown").classList.toggle("show");
 }
        
        // Close the dropdown if the user clicks outside of it
            window.onclick = function(e) {
            if (!e.target.matches('.dropbtn')) {
            var myDropdown = document.getElementById("myDropdown");
                if (myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show');
                }
            }
        }
     

// PAM Matura
function PAMMAHelp() {
    if (window.confirm("This Site can only run if it is supported by the people. \n Will you contribute to this site?")) {    
      window.alert("Thank you!\n\n You can use the Contribute Button to send you Summarys");
    } 
    else {
      PAMMAHelp();
    }   
}


              function Darkmode() {
                                      
                 var body = document.body;
                 body.classList.toggle("dark-mode");
 
                 if(document.querySelector('.Titel')== null) {
                    var element = document.querySelector('.Titel-dark'); 
                 }
                 else {
                    var element = document.querySelector('.Titel'); 
                 }                
                 element.classList.toggle("Titel");                               
                 element.classList.toggle("Titel-dark");   

                 var dark = document.querySelectorAll("#dark"); 
                 var leng = dark.length;
                    for(var i=0; i < leng; i++) 
                    {
                    dark[i].classList.toggle("Darktheme");
                    dark[i].classList.toggle("Lighttheme");     
                    }
              }
                 


//Cookies
/*////////////////////////////////////////////////////////////////////////////////////////*/

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function changeCookieDark() {
    Darkmode();
    var dark = getCookie("darkmode");
    if (dark == "" || null || "off") 
    {     
        setCookie("darkmode", "on", 365);
    } 
    if (dark == "on") {
      setCookie("darkmode", "off", 365);     
      }   
    }
  
//Getting a specific cookie

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
    return "";
}

  function checkCookie() {
    var username = getCookie("username");
    if (username != "") 
    {} 
    else {
      username = prompt("Please enter your name:", "");
      if (username != "" && username != null) {
        setCookie("username", username, 365);
      }
    }
  }

  //Filters
  /*_________________________________________________________________________________--*/

  function funfKL() {
    var x = document.querySelectorAll("#funefKL");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  
  
    

