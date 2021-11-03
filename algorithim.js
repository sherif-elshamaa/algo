var sentence = "I am sherif, I am a fullstack developer";

function read_a_sentence(x) {
  var xLength = 0;
  var xWords = 1;
  var xVowels = 0;

  for (var i = 0; i < x.length; i++) {
    xLength++;
    if(x[i]==" "){
        xWords++
    }
    if (["a", "o", "i", "e", "u", "A", "O", "I", "E", "U"].includes(x[i])) {
      xVowels++;
    }
  }

  console.log("xLength:" + xLength + "  xWords: " + xWords +"  xVowels:" + xVowels)
}
read_a_sentence(sentence);