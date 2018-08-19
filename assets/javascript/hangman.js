let choice;

let flavor;

let good = [];
let bad = [];

let wins = 0;
let loses = 0;
let tries = 10;

let list = [
    "Admonishment", "Allotrope", "Anthropocentric", "Astrobleme", "Axolotl",
    "Bewilderment", "Bioluminescent", "Blastema", "Bombastic", "Bristlecone", "Banshee",
    "Cephalopod", "Conflagrate", "Contextomy", "Cumulonimbus", "Cytoplasm", "Cretaceous",
    "Dematerialize", "Demonstrative", "Debonair", "Disenchantment", "Discography",
    "Eldritch", "Entrancing", "Euclidean", "Eurhythmic", "Extradimensional", "Exuberant", "Enkindling", "Edenic",
    "Falstaffian", "Fantastical", "Fortitudinous", "Fractal", "Futurist",
    "Gargantuan", "Gelatinous", "Generous", "Glacial", "Grotesquery", "Grimoire", "Gregarious", "Galivant", "Genuflect", "Gothic",
    "Hangover", "Highfalutin", "Holistic", "Horology", "Horrendous",
    "Iconoclast", "Incredulous", "Indecipherable", "Interplanetary", "Iridescent",
    "Jasmine", "Joviality", "Judgement", "Juniper", "Juxtapose",
    "Kafkaesque", "Kaleidoscope", "Kilojoules", "Kimono", "Kingfisher", "Knowledgeable",
    "Lamentation", "Legendary", "Liberating", "Longevity", "Loquacious", "Lovecraftian",
    "Magnanimous", "Managerial", "Matriculate", "Milquetoast", "Mosaic", "Monetization",
    "Nebulous", "Nightmarish", "Nondescript", "Normcore", "Nurturing", "Nostalgic",
    "Omniscient", "Ostentatious", "Ouroboros", "Outrageous", "Overwatch",
    "Paradoxical", "Paranormal", "Polymorph", "Polysyllabic", "Protocell", "Polyglot",
    "Quadradic", "Qualification", "Questing", "Quintessential", "Quivering",
    "Ravishing", "Rhododendron", "Riant", "Riverine", "Roguishness", "Resplendent",
    "Sanctimonious", "Sapient", "Shakespearian", "Sophomoric", "Supernova",
    "Tantamount", "Thoroughfare", "Transmigration", "Truthiness", "Tyrannical", "Tsunami", "Transformative",
    "Ubiquitous", "Ukulele", "Undulate", "Unregulated", "Unrequited",
    "Valiant", "Vanguard", "Variegated", "Verisimilitude", "Verbose",
    "Wakeboarding", "Wanderlust", "Wastrel", "Waterborne", "Wrongheaded",
    "Xanadu", "Xenomorph", "Xenon", "Xeroxed", "Xylophone",
    "Yearend", "Yeomen", "Yeshiva", "Yesteryear", "Youngblood",
    "Zamboni", "Zeitgeist", "Zealotry", "Zombification", "Zoroastrianism",
];

let listItem = Math.floor(Math.random() * list.length);
let word = list[listItem].toLowerCase();

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

// Ideally, we'd prevent repeating here by settting the CHOICE variabe whenever the user selects something with the SELECT class
// For reasons I don't yet understand, the CHOICE variable is refusing to be set this way (focing me to grab the letter manually)
// Allowing repeating code until I'm able to solve this problem 
$("#A").click(function () {
    choice = "a";
    score();
    if (good.indexOf(choice) > -1) {
        $("#A").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#A").addClass("red");
    }
});
$("#B").click(function () {
    choice = "b";
    score();
    if (good.indexOf(choice) > -1) {
        $("#B").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#B").addClass("red");
    }
});
$("#C").click(function () {
    choice = "c";
    score();
    if (good.indexOf(choice) > -1) {
        $("#C").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#C").addClass("red");
    }
});
$("#D").click(function () {
    choice = "d";
    score();
    if (good.indexOf(choice) > -1) {
        $("#D").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#D").addClass("red");
    }
});
$("#E").click(function () {
    choice = "e";
    score();
    if (good.indexOf(choice) > -1) {
        $("#E").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#E").addClass("red");
    }
});
$("#F").click(function () {
    choice = "f";
    score();
    if (good.indexOf(choice) > -1) {
        $("#F").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#F").addClass("red");
    }
});
$("#G").click(function () {
    choice = "g";
    score();
    if (good.indexOf(choice) > -1) {
        $("#G").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#G").addClass("red");
    }
});
$("#H").click(function () {
    choice = "h";
    score();
    if (good.indexOf(choice) > -1) {
        $("#H").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#H").addClass("red");
    }
});
$("#I").click(function () {
    choice = "i";
    score();
    if (good.indexOf(choice) > -1) {
        $("#I").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#I").addClass("red");
    }
});
$("#J").click(function () {
    choice = "j";
    score();
    if (good.indexOf(choice) > -1) {
        $("#J").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#J").addClass("red");
    }
});
$("#K").click(function () {
    choice = "k";
    score();
    if (good.indexOf(choice) > -1) {
        $("#K").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#K").addClass("red");
    }
});
$("#L").click(function () {
    choice = "l";
    score();
    if (good.indexOf(choice) > -1) {
        $("#L").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#L").addClass("red");
    }
});
$("#M").click(function () {
    choice = "m";
    score();
    if (good.indexOf(choice) > -1) {
        $("#M").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#M").addClass("red");
    }
});
$("#N").click(function () {
    choice = "n";
    score();
    if (good.indexOf(choice) > -1) {
        $("#N").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#N").addClass("red");
    }
});
$("#O").click(function () {
    choice = "o";
    score();
    if (good.indexOf(choice) > -1) {
        $("#O").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#O").addClass("red");
    }
});
$("#P").click(function () {
    choice = "p";
    score();
    if (good.indexOf(choice) > -1) {
        $("#P").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#P").addClass("red");
    }
});
$("#Q").click(function () {
    choice = "q";
    score();
    if (good.indexOf(choice) > -1) {
        $("#Q").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#Q").addClass("red");
    }
});
$("#R").click(function () {
    choice = "r";
    score();
    if (good.indexOf(choice) > -1) {
        $("#R").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#R").addClass("red");
    }
});
$("#S").click(function () {
    choice = "s";
    score();
    if (good.indexOf(choice) > -1) {
        $("#S").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#S").addClass("red");
    }
});
$("#T").click(function () {
    choice = "t";
    score();
    if (good.indexOf(choice) > -1) {
        $("#T").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#T").addClass("red");
    }
});
$("#U").click(function () {
    choice = "u";
    score();
    if (good.indexOf(choice) > -1) {
        $("#U").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#U").addClass("red");
    }
});
$("#V").click(function () {
    choice = "v";
    score();
    if (good.indexOf(choice) > -1) {
        $("#V").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#V").addClass("red");
    }
});
$("#W").click(function () {
    choice = "w";
    score();
    if (good.indexOf(choice) > -1) {
        $("#W").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#W").addClass("red");
    }
});
$("#X").click(function () {
    choice = "x";
    score();
    if (good.indexOf(choice) > -1) {
        $("#X").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#X").addClass("red");
    }
});
$("#Y").click(function () {
    choice = "y";
    score();
    if (good.indexOf(choice) > -1) {
        $("#Y").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#Y").addClass("red");
    }
});
$("#Z").click(function () {
    choice = "z";
    score();
    if (good.indexOf(choice) > -1) {
        $("#Z").addClass("green");
    }
    if (bad.indexOf(choice) > -1) {
        $("#Z").addClass("red");
    }
});

$("#pic").click(function () {
    if (picNum === 0 || tries === 0) {
        listItem = Math.floor(Math.random() * list.length);
        word = list[listItem].toLowerCase();
        reset();
    }
});

function score() {
    if (tries === 0) {
        return null;
    }
    if (picNum === 0) {
        return null;
    }
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
        tries--;
        picNum++;
        if (picNum === 15) {
            document.getElementById("flavor").innerHTML = "<br /> Alas, poor Frank... <br /> Your word was <span id='emph'>" + word + "</span> <br /> Click Frank to play again.";
            loses++;
            $("#pic").addClass("shuffle");
        }
    }
    form();
}

function reset() {
    tries = 10;
    picNum = 5;
    good = [];
    bad = [];
    mystery = [];
    blanks = [];
    document.getElementById("flavor").innerHTML = "";
    $("#pic").removeClass("shuffle");
    $(".select").removeClass("green");
    $(".select").removeClass("red");
    build();
    form();
}

function victory() {
    if (blanks.join("") == word) {
        blanks = [];
        document.getElementById("flavor").innerHTML = "You win! <br /> Click Frank to play again!";
        picNum = 0;
        wins++;
        $("#pic").addClass("shuffle");
        form();
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