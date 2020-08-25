const sentence = "every good boy does fine";

for( const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 1000)
};