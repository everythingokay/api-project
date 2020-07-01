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


// let searchBox = document.getElementById("searchBox");
// let searchButton = document.getElementById("searchButton");
// searchButton.addEventListener("click", function(){

//     $(document).ready(function (){
  

//         $.ajax({
//             url: "https://restcountries.eu/rest/v2/all",
//             data: {s: searchBox.value},
//             success: function(response) {
//                 console.log(response)
//                 getInfo(response)
//             }
//         }) 
        
//         function getInfo(){

//             $("body") = response.name;

//         }
    
//     })



// })

    // $(document).ready(function (){
  

    //         $.ajax({
    //             url: "https://restcountries.eu/rest/v2/all",
    //             data: {s: searchBox.value},
    //             success: function(response) {
    //                 console.log(response)
    //                 getInfo(response)
    //             }
    //         }) 
            
    //         function getInfo(){

    //             document.body.innerHTML = response.name;

    //         }
        
    //     })


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