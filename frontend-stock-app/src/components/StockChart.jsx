import { Line } from "react-chartjs-2";

const data = {
  labels: priceHistory.map(p => new Date(p.lastUpdatedAt).toLocaleTimeString()),
  datasets: [
    {
      label: "Price",
      data: priceHistory.map(p => p.price),
    },
    {
      label: "Average",
      data: priceHistory.map(() =>
        priceHistory.reduce((a, b) => a + b.price, 0) / priceHistory.length
      ),
      borderDash: [5, 5],
    }
  ]
};
