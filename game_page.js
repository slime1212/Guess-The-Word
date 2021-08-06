player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");

player1score = 0;
player2score = 0;

document.getElementById("player1name").innerHTML = player1 + ":";
document.getElementById("player2name").innerHTML = player2 + ":";

document.getElementById("player1score").innerHtml = player1score;
document.getElementById("player2score").innerHtml = player2score;

document.getElementById("player-question").innerHTML = "Question Turn: " + player1;
document.getElementById("player-answer").innerHTML = "Answer Turn: " + player2;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Word in lowercase: " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length / 2);

    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);

    name1 = word.length - 1;

    charAt3 = word.charAt(name1);
    console.log(charAt3);

    remove1 = word.replace(charAt1, "_");
    remove2 = remove1.replace(charAt2, "_");
    remove3 = remove2.replace(charAt3, "_");
    console.log(remove3);

    questionWord = "<h4 id='wordDisplay'>Q. " + remove3 + "</h4>";
    inputBox = "<br> Answer: <input type='text' id='input-checkbox'>";
    checkButton = "<br> <br> <button class='btn btn-info' onclick='submit()'>Submit</button>";
    row = questionWord + inputBox + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}

questionTurn = "player1";
answerTurn = "player2";

function submit() {
    getAnswer = document.getElementById("input-checkbox").value;
    answer = getAnswer.toLowerCase();
    console.log("Answer in lowercase - " + answer);

    if (answer == word) {
        if  (answerTurn == "player1") {
            player1score = player1score + 1;
            document.getElementById("player1score").innerHTML = player1score;
        }

        else {
            player2score = player2score + 1;
            document.getElementById("player2score").innerHTML = player2score;
        }
    }

    if (questionTurn == "player1") {
        questionTurn = "player2";
        document.getElementById("player-question").innerHTML = "Question turn: " + player2;
    }

    else {
        questionTurn = "player1";
        document.getElementById("player-question").innerHTML = "Question turn: " + player1;
    }

    if (answerTurn == "player1") {
        answerTurn = "player2";
        document.getElementById("player-answer").innerHTML = "Answer turn: " + player2;
    }

    else {
        answerTurn = "player1";
        document.getElementById("player-answer").innerHTML = "Answer turn: " + player1;
    }

    document.getElementById("output").innerHTML = "";
}

// Much more stuff here.

