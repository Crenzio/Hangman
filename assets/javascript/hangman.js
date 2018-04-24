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
    score();
});
$("#B").click(function () {
    choice = "b";
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
    score();
});
$("#C").click(function () {
    choice = "c";
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
    score();
});
$("#D").click(function () {
    choice = "d";
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
    score();
});
$("#E").click(function () {
    choice = "e";
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
    score();
});
$("#F").click(function () {
    choice = "f";
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
    score();
});
$("#G").click(function () {
    choice = "g";
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
    score();
});
$("#H").click(function () {
    choice = "h";
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
    score();
});
$("#I").click(function () {
    choice = "i";
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
    score();
});
$("#J").click(function () {
    choice = "j";
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
    score();
});
$("#K").click(function () {
    choice = "k";
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
    score();
});
$("#L").click(function () {
    choice = "l";
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
    score();
});
$("#M").click(function () {
    choice = "m";
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
    score();
});
$("#N").click(function () {
    choice = "n";
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
    score();
});
$("#O").click(function () {
    choice = "o";
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
    score();
});
$("#P").click(function () {
    choice = "p";
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
    score();
});
$("#Q").click(function () {
    choice = "q";
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
    score();
});
$("#R").click(function () {
    choice = "r";
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
    score();
});
$("#S").click(function () {
    choice = "s";
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
    score();
});
$("#T").click(function () {
    choice = "t";
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
    score();
});
$("#U").click(function () {
    choice = "u";
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
    score();
});
$("#V").click(function () {
    choice = "v";
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
    score();
});
$("#W").click(function () {
    choice = "w";
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
    score();
});
$("#X").click(function () {
    choice = "x";
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
    score();
});
$("#Y").click(function () {
    choice = "y";
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
    score();
});
$("#Z").click(function () {
    choice = "z";
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
    score();
});

function score() {
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