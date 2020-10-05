var url = 'https://api.icndb.com/jokes/random',
    paragraph = document.querySelector('#joke');

var button = document.querySelector('#get-joke');
getJoke();
button.addEventListener('click', function () {
    getJoke();
});

function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function () {
        var res = JSON.parse(xhr.response);
        paragraph.innerHTML = res.value.joke;
     });
    xhr.send();
}