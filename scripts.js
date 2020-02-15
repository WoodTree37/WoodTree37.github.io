
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


