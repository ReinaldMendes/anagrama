console.log("Digite uma palavra: ");
let anagramas = [];
process.stdin.on("data", function (data) {
  let word = data.toString().trim();
  word = word.split("");
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length; j++) {
      let aux = word[i];
      word[i] = word[j];
      word[j] = aux;
      if (!anagramas.includes(word.join(""))) {
        anagramas.push(word.join(""));
        console.log(word.join(""));
      }
    }
  }
});
