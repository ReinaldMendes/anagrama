process.stdin.on("data", function (data) {
  const word = data.toString().trim();

  let anagrams = [""];
  for (let char of word) {
    let tempAnagrams = [];
    for (let anagram of anagrams) {
      for (let i = 0; i <= anagram.length; i++) {
        tempAnagrams.push(anagram.slice(0, i) + char + anagram.slice(i));
      }
    }
    anagrams = tempAnagrams;
  }

  console.log(`Anagramas de "${word}":`, anagrams);
  process.exit();
});

console.log("Digite uma palavra: ");
