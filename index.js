$(document).ready(function () {

    let search = document.getElementById("search");
    let submit = document.getElementById("submit");
    let language = document.getElementsByClassName("language-button");
    let translation = document.getElementsByClassName("translation");
    let gdpButton = document.getElementById("gdp-button");
    let gdpResult = document.getElementById("gdp-result");
    let current;
	var gdpValue = [];
    var gdpKey = [];
    
    let search2 = document.getElementById("search2");
    let submit2 = document.getElementById("submit2");
    let translation2 = document.getElementsByClassName("translation2");
    let language2 = document.getElementsByClassName("language-button2");
    let gdpButton2 = document.getElementById("gdp-button2");
    let gdpResult2 = document.getElementById("gdp-result2");
    let current2;
	var gdpValue2 = [];
	var gdpKey2 = [];

    submit.addEventListener("click", getInfo)

    submit2.addEventListener("click", getInfo2)

    gdpButton.addEventListener("click", function() {
        displayGDP("https://raw.githubusercontent.com/OggiDanailov/gdp-data/master/data.json")
    })

    gdpButton2.addEventListener("click", function() {
        displayGDP2("https://raw.githubusercontent.com/OggiDanailov/gdp-data/master/data.json")
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


    function getInfo2() {

        $.ajax({
            url: "https://restcountries.eu/rest/v2/name/" + search2.value,
            success: function(response) {

            // console.log(response)
            displayCountryInfo2(response)
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

    function displayCountryInfo2(country2) {
        current2 = country2[0].name;
        $("#country-name2").html("Country: " + country2[0].name);
        $("#country-capital2").html("Capital: " + country2[0].capital);
        $("#country-flag2").css({
            "background-image": "url(" + country2[0].flag + ")",
            "background-size": "auto 100%",
            });
        $("#country-currency2").html("Currency: " + country2[0].currencies[0].name);
        $("#country-pop2").html("Population: " + commafy(country2[0].population));

        for(let i = 0; i < language2.length; i++) {
            language2[i].addEventListener("click", function(event) {
                if(event.target.innerHTML === "FR") {
                    $(".translation2").html(country2[0].translations2.fr)
                } else if (event.target.innerHTML === "DE") {
                    $(".translation2").html(country2[0].translations2.de)
                } else if (event.target.innerHTML === 'JA') {
                    $(".translation2").html(country2[0].translations2.ja)
                }
            })
        } // <--- languageButtons2
    } // <--- displayCountryInfo2

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


            function displayGDP2 (url) {
                let graph2 = document.getElementById('graph2');
                $.ajax({
                    url: url,
                    success: function(gdpResponse2) {
                        let parsed2 = JSON.parse(gdpResponse2)
        
                        parsed2.forEach(function(country2) {
                            if(country2["Country Name"] === current2) {
                                var values2 = Object.values(country2)
                                var keys2 = Object.keys(country2)
                                $("#gdp-result2").html("$" + commafy(country2[2017]))
                                for(let i = 0; i < values2.length; i++) {
                                    if(values2[i] !== "" && typeof values2[i] === "number") {
                                        gdpValue2.push(values2[i])
                                        gdpKey2.push(keys2[i])
                                    }
                                }
                            }
                        })
                        Plotly.newPlot( graph2, [{
                        x: gdpKey2,
                        y: gdpValue2 }], {
                        margin: { t: 10 } } );
                    }

                })
            }


}) // <---jQuery