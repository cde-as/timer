const timer = function () {
  const time = process.argv.slice(2).map((arg) => parseInt(arg)); // Removes first 2 lines from node and returns the integer values (unsorted).

  if (time <= 0 || typeof time !== "number") {
    process.exit(1);
  }

  const sortedTime = time.sort((a, b) => a - b); //Input will be sorted
  process.stdout.write("\x07");
  for (let i = 0; i < sortedTime.length; i++) {
    setTimeout(() => {
      process.stdout.write("\x07"); // BEEP
      process.stdout.write("\x07");
    }, sortedTime[i]);
  }
};

timer(2,3,4);
