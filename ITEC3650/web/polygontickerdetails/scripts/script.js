function GetStock() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $("#myform");
    
    // Validate all of the for elements
    form.validate();
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        var StockSymbol = document.getElementById("StockSymbol").value;
        var apiKey = "35eaVfKsObXpSg2O4kMLj9udr2DgVW1f"

        /* URL for AJAX Call */
        var myURL = "https://api.polygon.io/v1/meta/symbols/" + StockSymbol + "/company?apiKey=" + apiKey;

        /* AJAX Method (POST or GET) */
        var myMethod = "GET";

        /* Make sure the document is ready */
        $(document).ready(function() { 

            /* Perform AJAX call - Note that the AJAX function 
               does not have a selector */

            $.ajax({
              method: myMethod,
              url: myURL
            })

            /* AJAX complete - result is in msg */
            .done(function( msg ) {

                /* Your code to process the result goes here - 
                   display the returned message */
                document.getElementById("company").innerHTML = msg.name;
                document.getElementById("address").innerHTML = msg.hq_address;
                document.getElementById("employees").innerHTML = msg.employees;
                document.getElementById("ceo").innerHTML = msg.ceo;
                document.getElementById("url").innerHTML = msg.url;
                document.getElementById("url").href = msg.url;
                document.getElementById("logo").src = msg.logo;
            })
            
            /* AJAX complete with error - probably invalid stock ticker symbol */
            .fail(function( msg ) {

                /* Your code to process the result goes here - 
                   display the returned message */
                alert("Stock Not Found - Status: " + msg.status)
            });
        });
    }
}
