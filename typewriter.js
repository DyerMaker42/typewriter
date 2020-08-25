const sentence = "every good boy does fine \n";
let count = 0;
for( const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, count += 50)
};
