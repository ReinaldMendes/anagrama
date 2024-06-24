console.log("digite uma palavra");
process.stdin.on("data", function (data) {
  let input = data.toString().trim();
});
