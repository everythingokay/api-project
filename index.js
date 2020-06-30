$(document).ready( function (){

	$.ajax({
		url: "https://restcountries.eu/rest/v2/all",
		success: function(result) {
			console.log(result)
		}
	})	
})