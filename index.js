// $(document).ready( function (){
//     function countries() {
//         $.ajax({
//             url: "https://restcountries.eu/rest/v2/all",
//             data: {s: input.value},
//             success: function(result) {
//                 listResults(result)
//                 listPosters(result)
//             }
//         })  
//     }
//     })


    $(document).ready(function (){
  

            $.ajax({
                url: "https://restcountries.eu/rest/v2/all",
                
                success: function(response) {
                    console.log(response)
                    getInfo(response)
                }
            }) 

            let searchBox = document.getElementById("searchBox");
            let searchButton = document.getElementById("searchButton");
            
            function getInfo(){

                document.body.innerHTML = response.name;

            }
        
        })