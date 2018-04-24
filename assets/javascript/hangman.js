let choice;

let good = [];
let bad = [];

let wins = 0;
let loses = 0;
let tries = 10;

let word = "abc";
let mystery = [];
let blanks = [];

let picNum = 5;

form();
build();

function build() {

    for (var i = 0; i < word.length; i++) {
        mystery.push(word[i]);
    }

    blank();
}

function blank() {

    for (var i = 0; i < mystery.length; i++) {
        blanks.push(" _ ");
    }

}

$("#A").click(function () {
    choice = "a";
    score();
});
$("#B").click(function () {
    choice = "b";
    score();
});
$("#C").click(function () {
    choice = "c";
    score();
});
$("#D").click(function () {
    choice = "d";
    score();
});
$("#E").click(function () {
    choice = "e";
    score();
});
$("#F").click(function () {
    choice = "f";
    score();
});
$("#G").click(function () {
    choice = "g";
    score();
});
$("#H").click(function () {
    choice = "h";
    score();
});
$("#I").click(function () {
    choice = "i";
    score();
});
$("#J").click(function () {
    choice = "j";
    score();
});
$("#K").click(function () {
    choice = "k";
    score();
});
$("#L").click(function () {
    choice = "l";
    score();
});
$("#M").click(function () {
    choice = "m";
    score();
});
$("#N").click(function () {
    choice = "n";
    score();
});
$("#O").click(function () {
    choice = "o";
    score();
});
$("#P").click(function () {
    choice = "p";
    score();
});
$("#Q").click(function () {
    choice = "q";
    score();
});
$("#R").click(function () {
    choice = "r";
    score();
});
$("#S").click(function () {
    choice = "s";
    score();
});
$("#T").click(function () {
    choice = "t";
    score();
});
$("#U").click(function () {
    choice = "u";
    score();
});
$("#V").click(function () {
    choice = "v";
    score();
});
$("#W").click(function () {
    choice = "w";
    score();
});
$("#X").click(function () {
    choice = "x";
    score();
});
$("#Y").click(function () {
    choice = "y";
    score();
});
$("#Z").click(function () {
    choice = "z";
    score();
});

function score() {
    if (good.indexOf(choice) > -1) {
        return null;
    }
    if (bad.indexOf(choice) > -1) {
        return null;
    }
    else {
        if (word.indexOf(choice) > -1) {
            good.push(choice);
        }
        else
            bad.push(choice);
    }
    if (mystery.indexOf(choice) > -1) {
        for (var i = 0; i < mystery.length; i++) {
            if (mystery[i] == choice) {
                blanks[i] = choice;
            }
        }
        victory();
    }
    else {
        if (tries === 0) {
            reset();
        }
        else {
            tries--;
            picNum++;
        }
    }
    form()
}

function reset() {
    tries = 10;
    picNum = 5;
    loses++;
    good = [];
    bad = [];
    mystery = [];
    blanks = [];
    build();
    form();
}

function victory() {
    if (blanks.length == good.length) {
        tries = 10;
        picNum = 5;
        wins++;
        good = [];
        bad = [];
        mystery = [];
        blanks = [];
        build();
    }
}

function form() {
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("loses").innerHTML = loses;
    document.getElementById("tries").innerHTML = tries;
    document.getElementById("pic").innerHTML = "<img class='pic' src='assets/images/pic" + picNum + ".jpg'>";
    document.getElementById("word").innerHTML = blanks.join("");
    document.getElementById("goodguesses").innerHTML = good.join(" ");
    document.getElementById("badguesses").innerHTML = bad.join(" ");
}

document.getElementById("word").innerHTML = blanks.join("");