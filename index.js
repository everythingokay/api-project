        $(document).ready(function (){
  
            let searchBox = document.getElementById("searchBox");
            let searchButton = document.getElementById("searchButton");

            searchButton.addEventListener("click", getInfo)

            function getInfo(){

                $.ajax({
                    url: "https://restcountries.eu/rest/v2/name/" + searchBox.value,
                    success: function(response) {

                        console.log(response)
                        displayCountryInfo(response)
                        displayFlag(response)
                    }
                }) 
            }

            
            function displayCountryInfo(countries){
                            $("#country-name").html("Name of the country: " + countries[0].name)
                            $("#country-capital").html("Capital: " + countries[0].capital)
                            $("#country-pop").html("Population: " + countries[0].population)
                            $("#country-currency").html("Currency: " + countries[0].currencies[0].name)
                        }

            function displayFlag(countries){
                let flagPic = document.createElement("div");
                flagPic.style.width = "200px";
                flagPic.style.height = "100px";
                flagPic.style.display = "block";
                flagPic.style.marginTop = "1vw";
                flagPic.style.backgroundImage = "url(" + countries[0].flag + ")";
                flagPic.style.backgroundSize = "100% 100%";
                document.body.appendChild(flagPic);           
            }


        
        })