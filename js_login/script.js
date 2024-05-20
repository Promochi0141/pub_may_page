window.onload = function () {
    const password = 'yourPassword';
    const input = document.getElementById('pass');
    const button = document.getElementById('myButton');

    button.onclick = function () {
        if (input.value === password) {
            location.href = "https://www.google.com";
        } else {
            location.href = "#";
        }
    };
};