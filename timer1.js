const timer = function() {
  const time = process.argv.slice(2).map((arg) => parseInt(arg)); // Removes first 2 lines from node and returns the integer values (unsorted).

  if (time.length === 0) {
    process.exit(1);
  }

  const sortedTime = time.sort((a, b) => a - b); //Input will be sorted
  
  for (let i = 0; i < sortedTime.length; i++) {
    
    if (sortedTime[i] < 0 || isNaN(sortedTime[i])) {
      process.exit(1);
    }
    setTimeout(() => {
      process.stdout.write("\x07"); // BEEP

    }, sortedTime[i] * 1000);
  }
};

timer();
