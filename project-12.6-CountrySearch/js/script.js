$(document).ready(function () {
  var url = 'https://restcountries.eu/rest/v2/name/';
  var countriesList = $('#countries');
  $.ajaxSetup({
    cache: false
  });

// small plugin for keypress enter detection
  $.fn.enterKey = function (fnc) {
    return this.each(function () {
        $(this).keypress(function (e) {
            if (e.keyCode == '13' || e.which == '13') {
                fnc.call(this, e);
            }
        })
    })
  };

  $('#search').click(searchCountries);
  $('#country-name').enterKey(function () { 
      searchCountries();
  });
  function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';

    $.ajax({
      url: url + countryName,
      method: 'GET',
      success: showCountriesList
    });
  }
  function showCountriesList(res) {
    countriesList.empty();
    
    res.forEach(item => {
      
      var flagDel = $('#country-flag')
      flagDel.empty();
      var flag =$('#country-flag').append('<img class="flag">');
      $('.flag').attr('src', item.flag);
      // $('<li>').text(item.name).appendTo(countriesList);
      countriesList.append('<li>'+ item.name + ' "' + item.cioc + '"');
      countriesList.append('<li>'+ item.capital);
      countriesList.append('<li>'+ item.region +' ('+ item.subregion+')');
      countriesList.append('<li>'+ item.population);
      countriesList.append('<li>'+ item.area + ' m<sup>2</sup>');
      
    });
  }


});
