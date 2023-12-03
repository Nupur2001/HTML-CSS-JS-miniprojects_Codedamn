document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('counter-btn');
    var display = document.getElementById('count-display');
    var count = 0;
    button.addEventListener('click', function () {
        count++;
        display.textContent = '' + count;
    });
});
