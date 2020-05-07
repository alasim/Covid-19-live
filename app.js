$(document).ready(function () {
    var count;
    var sortedCountry = 0;
    var sortedCases = 0;
    var sortedTodayCases = 0;
    var sortedRecovred = 0;
    var sortedDeaths = 0;
    var sortedTodayDeaths = 0;
    var sortedActiveCases = 0;
    var sortedCritical = 0;
    var arrProps = [
                  "country",
                  "cases",
                  "todayCases",
                  "recovered",
                  "deaths",
                  "todayDeaths",
                  "active",
                  "critical",
              ];
    let url = "https://corona.lmao.ninja/v2/countries"
    //    let url = "https://coronavirus-19-api.herokuapp.com/v2/countries"

    axios.get(url)
        .then(response => {
            for (var i = 0; i < response.data.length; i++) {

                if (response.data[i].country == "Bangladesh") {
                    console.log(response.data[i]);
                    $("title").text("Bangladesh(" + response.data[i].cases + ") | Coronavirus updates(Live)");
                    $(".bdCountry").text(response.data[i].country);
                    $(".bdCases").text(response.data[i].cases);
                    $(".bdTodayCases").text(response.data[i].todayCases);
                    $(".bdRecovered").text(response.data[i].recovered);
                    $(".bdDeaths").text(response.data[i].deaths);
                    $(".bdActive").text(response.data[i].active);

                    if (response.data[i].todayCases) // badge-warning badge-danger badge-success
                        $(".bdTodayCases").text(response.data[i].todayCases).addClass("badge-warning");
                    else
                        $(".bdTodayCases").text(response.data[i].todayCases).addClass("badge-success");

                    if (response.data[i].todayDeaths)
                        $(".bdTodayDeaths").text(response.data[i].todayDeaths).addClass("badge-danger");
                    else
                        $(".bdTodayDeaths").text(response.data[i].todayDeaths).addClass("badge-success");

                    if (response.data[i].critical)
                        $(".bdCritical").text(response.data[i].critical).addClass("badge-warning");
                    else
                        $(".bdCritical").text(response.data[i].critical).addClass("badge-success");

                }
            }

            var table = $('tbody');
            var row, cell;

            response.data.forEach((element, i) => { // #7bed9f
                row = $('<tr />');
                table.append(row);
                count = 1 + i;
                cell = '<th>' + count + '</th>'
                var ar = Object.keys(element)

                ar.forEach((prop, j) => {
                    if (prop == "todayCases" || prop == "todayDeaths") {
                        if (element[arrProps[j]])
                            cell += '<td style="background-color:#fab1a0">' + element[arrProps[j]] + '</td>'
                        else
                            cell += '<td style="background-color:#7bed9f">' + element[arrProps[j]] + '</td>'
                    } else {
                        if (element[arrProps[j]] != null)
                            cell += '<td>' + element[arrProps[j]] + '</td>'
                    }

                })
                //                console.log(element);
                row.append(cell);
            });

            $("#search").keyup(function () {
                var resultArr = [];
                response.data.forEach(element => {
                    var resutl = $("#search").val();

                    if (element.country.toLocaleLowerCase().startsWith(resutl)) {
                        //                        console.log(element);
                        resultArr.push(element);
                    }


                })
                console.log(resultArr);
                addSearchRows(resultArr);
            })
            $("#country").click(function () {
                var current = "#country";
                var currentProp = "country";
                if (sortedCountry) {
                    addRows(currentProp, response.data, 0);
                    sortedCountry = 0;
                    $(current).children().removeClass("fa-angle-up");
                    $("thead").find(".fa-angle-up").removeClass("fa-angle-down").addClass("fa-angle-up");
                    $(current).children().addClass("fa-angle-down");
                } else {
                    addRows(currentProp, response.data, 1);
                    sortedCountry = 1;
                    $(current).children().removeClass("fa-angle-down");
                    $("thead").find(".fa-angle-up").removeClass("fa-angle-down").addClass("fa-angle-up");
                    $(current).children().addClass("fa-angle-up");
                }
            })

            $("#totalCases").click(function () {
                var current = "#totalCases";
                var currentProp = "cases";
                if (sortedCountry) {
                    addRows(currentProp, response.data, 0);
                    sortedCountry = 0;
                    $(current).children().removeClass("fa-angle-up");
                    $("thead").find(".fa-angle-up").removeClass("fa-angle-down").addClass("fa-angle-up");
                    $(current).children().addClass("fa-angle-down");
                } else {
                    addRows(currentProp, response.data, 1);
                    sortedCountry = 1;
                    $(current).children().removeClass("fa-angle-down");
                    $("thead").find(".fa-angle-up").removeClass("fa-angle-down").addClass("fa-angle-up");
                    $(current).children().addClass("fa-angle-up");
                }
            })
            $("#todayCases").click(function () {
                var current = "#todayCases";
                var currentProp = "todayCases";
                if (sortedCountry) {
                    addRows(currentProp, response.data, 0);
                    sortedCountry = 0;
                    $(current).children().removeClass("fa-angle-up");
                    $("thead").find(".fa-angle-up").removeClass("fa-angle-down").addClass("fa-angle-up");
                    $(current).children().addClass("fa-angle-down");
                } else {
                    addRows(currentProp, response.data, 1);
                    sortedCountry = 1;
                    $(current).children().removeClass("fa-angle-down");
                    $("thead").find(".fa-angle-up").removeClass("fa-angle-down").addClass("fa-angle-up");
                    $(current).children().addClass("fa-angle-up");
                }
            })
            $("#recovered").click(function () {
                var current = "#recovered";
                var currentProp = "recovered";
                if (sortedCountry) {
                    addRows(currentProp, response.data, 0);
                    sortedCountry = 0;
                    $(current).children().removeClass("fa-angle-up");
                    $("thead").find(".fa-angle-up").removeClass("fa-angle-down").addClass("fa-angle-up");
                    $(current).children().addClass("fa-angle-down");
                } else {
                    addRows(currentProp, response.data, 1);
                    sortedCountry = 1;
                    $(current).children().removeClass("fa-angle-down");
                    $("thead").find(".fa-angle-up").removeClass("fa-angle-down").addClass("fa-angle-up");
                    $(current).children().addClass("fa-angle-up");
                }
            })
            $("#deaths").click(function () {
                var current = "#deaths";
                var currentProp = "deaths";
                if (sortedCountry) {
                    addRows(currentProp, response.data, 0);
                    sortedCountry = 0;
                    $(current).children().removeClass("fa-angle-up");
                    $("thead").find(".fa-angle-up").removeClass("fa-angle-down").addClass("fa-angle-up");
                    $(current).children().addClass("fa-angle-down");
                } else {
                    addRows(currentProp, response.data, 1);
                    sortedCountry = 1;
                    $(current).children().removeClass("fa-angle-down");
                    $("thead").find(".fa-angle-up").removeClass("fa-angle-down").addClass("fa-angle-up");
                    $(current).children().addClass("fa-angle-up");
                }
            })
            $("#todayDeaths").click(function () {
                var current = "#todayDeaths";
                var currentProp = "todayDeaths";
                if (sortedCountry) {
                    addRows(currentProp, response.data, 0);
                    sortedCountry = 0;
                    $(current).children().removeClass("fa-angle-up");
                    $("thead").find(".fa-angle-up").removeClass("fa-angle-down").addClass("fa-angle-up");
                    $(current).children().addClass("fa-angle-down");
                } else {
                    addRows(currentProp, response.data, 1);
                    sortedCountry = 1;
                    $(current).children().removeClass("fa-angle-down");
                    $("thead").find(".fa-angle-up").removeClass("fa-angle-down").addClass("fa-angle-up");
                    $(current).children().addClass("fa-angle-up");
                }
            })
            $("#activeCases").click(function () {
                var current = "#activeCases";
                var currentProp = "active";
                if (sortedCountry) {
                    addRows(currentProp, response.data, 0);
                    sortedCountry = 0;
                    $(current).children().removeClass("fa-angle-up");
                    $("thead").find(".fa-angle-up").removeClass("fa-angle-down").addClass("fa-angle-up");
                    $(current).children().addClass("fa-angle-down");
                } else {
                    addRows(currentProp, response.data, 1);
                    sortedCountry = 1;
                    $(current).children().removeClass("fa-angle-down");
                    $("thead").find(".fa-angle-up").removeClass("fa-angle-down").addClass("fa-angle-up");
                    $(current).children().addClass("fa-angle-up");
                }
            })
            $("#critical").click(function () {
                var current = "#critical";
                var currentProp = "critical";
                if (sortedCountry) {
                    addRows(currentProp, response.data, 0);
                    sortedCountry = 0;
                    $(current).children().removeClass("fa-angle-up");
                    $("thead").find(".fa-angle-up").removeClass("fa-angle-down").addClass("fa-angle-up");
                    $(current).children().addClass("fa-angle-down");
                } else {
                    addRows(currentProp, response.data, 1);
                    sortedCountry = 1;
                    $(current).children().removeClass("fa-angle-down");
                    $("thead").find(".fa-angle-up").removeClass("fa-angle-down").addClass("fa-angle-up");
                    $(current).children().addClass("fa-angle-up");
                }
            })

            console.log(response.data);
            var controlArrow = function (curentProp) {
                $('tHeader th li').removeClass('fa-angle-down');
                $(curentProp).children().removeClass('fa-angle-down').css("color", "green");
            }




            var addRows = function (property, data, n) {
                if (n) {
                    response.data.sort(sortByProperty(property));
                } else {
                    response.data.sort(sortByProperty2(property));
                }

                $('tbody').empty();
                var table = $('tbody');
                var row, cell;
                for (var i = 0; i < response.data.length; i++) {
                    row = $('<tr />');
                    table.append(row);
                    count = 1 + i;
                    cell = $('<th>' + count + '</th>' + '<th>' + response.data[i].country + '</th>' + '<td>' + response.data[i].cases + '</td>' + '<td>' + formatNumber(response.data[i].todayCases) + '</td>' + '<td>' + formatNumber(response.data[i].recovered) + '</td>' + '<td>' + formatNumber(response.data[i].deaths) + '</td>' + '<td>' + formatNumber(response.data[i].todayDeaths) + '</td>' + '<td>' + formatNumber(response.data[i].active) + '</td>' + '<td>' + formatNumber(response.data[i].critical) + '</td>');
                    row.append(cell);
                }
            }
            var addSearchRows = function (data) {
                $('tbody').empty();
                var table = $('tbody');
                var row, cell;
                for (var i = 0; i < data.length; i++) {
                    row = $('<tr />');
                    table.append(row);
                    count = 1 + i;
                    cell = $('<th>' + count + '</th>' + '<th>' + data[i].country + '</th>' + '<td>' + data[i].cases + '</td>' + '<td>' + formatNumber(data[i].todayCases) + '</td>' + '<td>' + formatNumber(data[i].recovered) + '</td>' + '<td>' + formatNumber(data[i].deaths) + '</td>' + '<td>' + formatNumber(data[i].todayDeaths) + '</td>' + '<td>' + formatNumber(data[i].active) + '</td>' + '<td>' + formatNumber(data[i].critical) + '</td>');
                    row.append(cell);
                }
            }

            function formatNumber(num) {
                return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }
        })
        .catch(error => {
            console.log(error);
        });
    var sortByProperty = function (property) {
        return function (x, y) {
            return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
        };
    };
    var sortByProperty2 = function (property) {
        return function (x, y) {
            return ((x[property] === y[property]) ? 0 : ((x[property] < y[property]) ? 1 : -1));
        };
    };



});
