const windowSize = 10;
let numberWindow = [];

exports.updateWindow = (newNumbers) => {
  let windowPrev = [...numberWindow];
  for (let num of newNumbers) {
    if (!numberWindow.includes(num)) {
      numberWindow.push(num);
    }
  }

  // Trim to window size
  if (numberWindow.length > windowSize) {
    numberWindow = numberWindow.slice(numberWindow.length - windowSize);
  }

  const avg = numberWindow.reduce((a, b) => a + b, 0) / numberWindow.length;
  return { windowPrev, windowCurr: [...numberWindow], avg: Number(avg.toFixed(2)) };
};
