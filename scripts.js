
        /* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
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
     

        
//Funktion zum Wechsel zwischen den NavBars           
    function Size() {
        var x = window.innerWidth
            
        if(x<=800){
            Small();
        }
        else {
            Big();
        } 
        window.addEventListener("resize", Size);
        window.addEventListener("load", Size);  //required?
    }

            function Small() { 
                {
                    document.getElementById("navsmall").style.display = "flex";                 
                    document.getElementById("navbig").style.display = "none";
                }
            } 

            function Big() {
                {
                    document.getElementById("navbig").style.display = "flex";
                    document.getElementById("navsmall").style.display = "none";        
                }
            }

// PAM Matura
function PAMMAHelp() {
    if (confirm("Will you contribute to this site?")) {    
      window.alert("Thank you!");
    } else {
      PAMMAHelp();
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
    if (username != "") {
     alert("Welcome again " + username);
    } else {
      username = prompt("Please enter your name:", "");
      if (username != "" && username != null) {
        setCookie("username", username, 365);
      }
    }
  }