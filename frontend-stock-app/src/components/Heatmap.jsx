
import React from "react";
import { Tooltip, Box, Typography } from "@mui/material";

const getColor = (val) => {
  const red = Math.floor(255 * ((val + 1) / 2));
  const blue = 255 - red;
  return `rgb(${red}, 0, ${blue})`;
};

const Heatmap = ({ matrix, labels }) => {
  if (!matrix.length) return <p>Loading heatmap...</p>;

  return (
    <Box>
      <Typography variant="subtitle1">Correlation Coefficient Heatmap</Typography>
      <Box
        sx={{
          overflow: "auto",
          maxHeight: "500px",
          maxWidth: "100%",
          border: "1px solid #ddd",
          padding: "10px",
        }}
      >
        <Box
          display="grid"
          gridTemplateColumns={`repeat(${matrix.length}, 40px)`}
        >
          {matrix.map((row, i) =>
            row.map((val, j) => (
              <Tooltip key={`${i}-${j}`} title={`Corr(${labels[i]}, ${labels[j]}): ${val}`}>
                <Box
                  width={40}
                  height={40}
                  bgcolor={getColor(val)}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ border: "1px solid #ccc", fontSize: 10, color: "#fff" }}
                >
                  {val}
                </Box>
              </Tooltip>
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Heatmap;
