$(document).ready( function (){

    let input = document.getElementById("input")
    let submit = document.getElementById("submit")

    submit.addEventListener("click", getCountryInfo)

    function getCountryInfo() {
        $.ajax({
            url: "https://restcountries.eu/rest/v2/name/" + input.value,
            success: function(result) {
                console.log(result)
            }
        })
     }	
})