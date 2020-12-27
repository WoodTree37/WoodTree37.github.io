
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



  //Countdown
/*_________________________________________________________________________________--*/
function timer() {
var countDownDate = new Date("May 29, 2020 12:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance =  now - countDownDate;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("timer").innerHTML = days + "days ";

}, 1000);
}


/* ScrollBar*/
function scrollBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scrollBar").style.width = scrolled + "%";
}