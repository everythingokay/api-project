        $(document).ready(function (){
  
            let searchBox = document.getElementById("searchBox");
            let searchButton = document.getElementById("searchButton");

            searchButton.addEventListener("click", getInfo)

            function getInfo(){

                $.ajax({
                    url: "https://restcountries.eu/rest/v2/name/" + searchBox.value,
                    success: function(response) {
                        console.log(response)
                        displayCountryName(response)
                    }
                }) 


                

            }

            function displayCountryName(countries){
                $("#country-name").html("Name of the country: " + countries[0].name)
            }



        
        })