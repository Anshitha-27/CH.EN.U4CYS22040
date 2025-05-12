const express = require('express');
const axios = require('axios');
const { updateWindow } = require('./utils/numberStore');

const app = express();
const PORT = 9876;
const TYPE_URLS = {
  p: "primes",
  f: "fibo",
  e: "even",
  r: "rand"
};

app.get("/numbers/:type", async (req, res) => {
  const type = req.params.type;
  if (!TYPE_URLS[type]) return res.status(400).send("Invalid type");

  let numbers = [];
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 500);

    const response = await axios.get(`http://20.244.56.144/evaluation-service/${TYPE_URLS[type]}`, {
      signal: controller.signal
    });
    clearTimeout(timeout);
    numbers = response.data.numbers || [];
  } catch (err) {
    numbers = [];
  }

  const { windowPrev, windowCurr, avg } = updateWindow(numbers);
  res.json({
    windowPrevState: windowPrev,
    windowCurrState: windowCurr,
    numbers,
    avg
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
