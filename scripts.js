
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
     
/*
        var x = window.matchMedia("(max-width: 400px)")
        Size(x) // Call listener function at run time
        x.addListener(Size) // Attach listener function on state changes
  */      
        /*Funktion zum Wechsel zwischen den NavBars*//*
          function Size(x) {
                if (x.matches) { // If media query matches
                    {
                        document.getElementById("navsmall").style.display = "block";
                    }
                        {
                            document.getElementById("navsmall").style.display = "none";
                        }
                } 
                else {
                    document.getElementById("navsmall").style.display = "none";
                }
                {
                    document.getElementById("navsmall").style.display = "block";
                }
            }
        }
          */
         

function Test() {
    document.getElementById("navsmall").style.display = "block";

}
/*
    var x = window.matchMedia("(max-width: 400px)")
        Size(x) // Call listener function at run time
        
        //Funktion zum Wechsel zwischen den NavBars
        function Size(x) {
            if (x.matches) { // If media query matches
               
              */
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


