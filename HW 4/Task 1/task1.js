window.onload = function () {
    var name = "";
    var username = prompt("Please enter your name");
    if (/\d/.test(username) == false) {
        name = username.split("").reverse().join("");;

    } else {
        for (var i = 0; i <= username.length - 1; i++) {
            if (i % 2) {
                name += username[i].toLowerCase();
            } else {
                name += username[i].toUpperCase();
            }

        }
    }
    document.getElementById("username").innerHTML = name;
}