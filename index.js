        $(document).ready(function (){
  
            let searchBox = document.getElementById("searchBox");
            let searchButton = document.getElementById("searchButton");

            searchButton.addEventListener("click", getInfo)

            function getInfo(){

                $.ajax({
                    url: "https://restcountries.eu/rest/v2/name/" + searchBox.value,
                    success: function(response) {
                        // console.log(response)
                        displayCountryInfo(response)
                    }
                }) 

            }

            function displayCountryInfo(countries) {
                for(let i = 0; i < countries.length; i++) {
                    $("#country-name").html("Name of the country: " + countries[0].name)
                    $("#country-capital").html("Capital: " + countries[0].capital)
                }
            }

            // https://restcountries.eu/rest/v2/capital/{capital}

        
        })