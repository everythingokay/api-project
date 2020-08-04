$(document).ready(function () {

    let search = document.getElementById("search");
    let submit = document.getElementById("submit");
    let language = document.getElementsByClassName("language-button");
    let gdpButton = document.getElementById("gdp-button");
    let current;
	var gdpValue = [];
	var gdpKey = [];


    submit.addEventListener("click", getInfo)

    gdpButton.addEventListener("click", function() {
        displayGDP("https://raw.githubusercontent.com/OggiDanailov/gdp-data/master/data.json")
   })

    function getInfo() {

        $.ajax({
            url: "https://restcountries.eu/rest/v2/name/" + search.value,
            success: function(response) {

            // console.log(response)
            displayCountryInfo(response)
            }
        })
    }

    function displayCountryInfo(countries) {
        current = countries[0].name;
        $("#country-name").html("Country: " + countries[0].name);
        $("#country-capital").html("Capital: " + countries[0].capital);
        $("#country-flag").css({
            "background-image": "url(" + countries[0].flag + ")",
            "background-size": "auto 100%",
            });
        $("#country-currency").html("Currency: " + countries[0].currencies[0].name);
        $("#country-pop").html("Population: " + commafy(countries[0].population));

        for(let i = 0; i < language.length; i++) {
            language[i].addEventListener("click", function(event) {
                if(event.target.innerHTML === "FR") {
                    $(".translation").html(countries[0].translations.fr)
                } else if (event.target.innerHTML === "DE") {
                    $(".translation").html(countries[0].translations.de)
                } else if (event.target.innerHTML === 'JA') {
                    $(".translation").html(countries[0].translations.ja)
                }
            })
        } // <--- languageButtons
    } // <--- displayCountryInfo

            function commafy(num) {
                var str = num.toString().split('.');
                if (str[0].length >= 5) {
                    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
                }
                if (str[1] && str[1].length >= 5) {
                    str[1] = str[1].replace(/(\d{3})/g, '$1 ');
                }
                return str.join('.');
            }

            function displayGDP (url) {
                let graph = document.getElementById('graph')
                $.ajax({
                    url: url,
                    success: function(gdpResponse) {
                        let parsed = JSON.parse(gdpResponse)
        
                        parsed.forEach(function(country) {
                            if(country["Country Name"] === current) {
                                var values = Object.values(country)
                                var keys = Object.keys(country)
                                $("#gdp-result").html("$" + commafy(country[2017]))
                                for(let i = 0; i < values.length; i++) {
                                    if(values[i] !== "" && typeof values[i] === "number") {
                                        gdpValue.push(values[i])
                                        gdpKey.push(keys[i])
                                    }
                                }
                            }
                        })
                        Plotly.newPlot( graph, [{
                        x: gdpKey,
                        y: gdpValue }], {
                        margin: { t: 10 } } );
                    }

                })
            }


}) // <---jQuery