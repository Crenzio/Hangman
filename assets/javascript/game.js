

  var wins = 0;
  var loses = 0;
  var tries = 10;

  document.getElementById("wins").innerHTML = wins;
  document.getElementById("loses").innerHTML = loses;
  document.getElementById("tries").innerHTML = tries;
 
  document.getElementById("word").innerHTML = "__ __ __ __ __ __ __ __ __ __ __";

  document.onkeyup = function(event) {

  var userGuess = event.key;

  if ((userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") 
   || (userGuess === "j") || (userGuess === "k") || (userGuess === "m") || (userGuess === "o")
   || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") 
   || (userGuess === "v") || (userGuess === "w") || (userGuess === "x")
   || (userGuess === "y") || (userGuess === "z")) {

        document.getElementById("badguesses").innerHTML += userGuess;
        tries--;

  }

  if ((userGuess === "a") || (userGuess === "f") || (userGuess === "g")
   || (userGuess === "h") || (userGuess === "i") || (userGuess === "l")
   || (userGuess === "n") || (userGuess === "t") || (userGuess === "u")) {

        document.getElementById("goodguesses").innerHTML += userGuess;
        tries+0;

  }


  if ((tries < 0)) {

    loses++
    document.getElementById("loses").innerHTML = loses;
    tries = 10;
    document.getElementById("goodguesses").innerHTML = " ";
    document.getElementById("badguesses").innerHTML = " ";

  }

  if ((tries === 10)) {

  $(function(){
          var imgfilename = "assets/images/pic5.jpg";
          $('#pic').attr('src', imgfilename);
    });

  }

  if ((tries === 9)) {

    $(function(){
            var imgfilename = "assets/images/pic6.jpg";
            $('#pic').attr('src', imgfilename);
      });
  
    }

  if ((tries === 8)) {

    $(function(){
        var imgfilename = "assets/images/pic7.jpg";
        $('#pic').attr('src', imgfilename);
  });

}

if ((tries === 7)) {

$(function(){
    var imgfilename = "assets/images/pic8.jpg";
    $('#pic').attr('src', imgfilename);
});

}

if ((tries === 6)) {

$(function(){
    var imgfilename = "assets/images/pic9.jpg";
    $('#pic').attr('src', imgfilename);
});

}

if ((tries === 5)) {

$(function(){
    var imgfilename = "assets/images/pic10.jpg";
    $('#pic').attr('src', imgfilename);
});

}

if ((tries === 4)) {

$(function(){
    var imgfilename = "assets/images/pic11.jpg";
    $('#pic').attr('src', imgfilename);
});

}

if ((tries === 3)) {

$(function(){
    var imgfilename = "assets/images/pic12.jpg";
    $('#pic').attr('src', imgfilename);
});

}

if ((tries === 2)) {

$(function(){
    var imgfilename = "assets/images/pic13.jpg";
    $('#pic').attr('src', imgfilename);
});

}

if ((tries === 1)) {

$(function(){
    var imgfilename = "assets/images/pic14.jpg";
    $('#pic').attr('src', imgfilename);
});

}

if ((tries === 0)) {

$(function(){
    var imgfilename = "assets/images/pic15.jpg";
    $('#pic').attr('src', imgfilename);
});

}

var a = "__";
var f = "__";
var g = "__";
var h = "__";
var i = "__";
var l = "__";
var n = "__";
var t = "__";
var u = "__";

if ((userGuess === "a")) {
  
  var a = "a";
}

if ((userGuess === "f")) {
  
  var f = "f";
}
if ((userGuess === "g")) {
  
  var g = "g";
}

if ((userGuess === "h")) {
  
  var h = "h";
}

if ((userGuess === "i")) {
  
  var i = "i";
}

if ((userGuess === "l")) {
  
  var l = "l";
}

if ((userGuess === "n")) {
  
  var n = "n";
}

if ((userGuess === "t")) {
  
  var t = "t";
}

if ((userGuess === "u")) {
  
  var u = "u";
}

  document.getElementById("word").innerHTML = h + " " + " " + i + " " + g + " " + h + " " + f + " " + a + " " + l + " " + u + " " + t + " " + i + " " + n;
  document.getElementById("tries").innerHTML = tries;

};
