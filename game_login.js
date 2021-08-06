'use strict'

function addUser() {
    var player1 = document.getElementById("player1_input").value;
    var player2 = document.getElementById("player2_input").value;

    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);

    window.location.replace("game-page.html");
}