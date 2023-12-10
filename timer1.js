

for (let i = 2; i < process.argv.length; i ++) {
  const input = parseInt(process.argv[i]);


  if (input <= 0 || typeof(input) !== "number") {
    process.exit(1);
  }

  if (input > 0) {
    process.stdout.write('\x07');
    process.stdout.write('\x07');
    process.stdout.write('\x07');
  }
}