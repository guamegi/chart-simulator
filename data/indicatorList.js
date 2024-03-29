export const indicatorList = [
  /*
  {
    name: "MA5",
    display_name: "Moving average 5",
    code: "MA-5",
    color: "#ff0000",
    path: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4",
    description: "",
  },
  {
    name: "MA10",
    display_name: "Moving average 10",
    code: "MA-10",
    color: "#18e7e7",
    path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    description: "",
  },
  {
    name: "MA20",
    display_name: "Moving average 20",
    code: "MA-20",
    color: "#0000ff",
    path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    description: "",
  },
  {
    name: "MA60",
    display_name: "Moving average 60",
    code: "MA-60",
    color: "#ff00ff",
    path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    description: "",
  },
*/
  {
    name: "MA",
    display_name: "Moving average",
    code: "MA",
    // color: "#ff00ff",
    color: {
      5: "#ff0000",
      10: "#18e7e7",
      20: "#0000ff",
      60: "#ff00ff",
      120: "#808080",
    },
    path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    contents: {
      days: [5, 10, 20, 60, 120],
      buy: [0, -1, -2, -3, -4, -5],
      sell: [0, 1, 2, 3, 4, 5],
      unit: "%",
    },
    description: "",
  },
  {
    name: "BB",
    display_name: "Bollinger Bands",
    code: "BB",
    color: "#666699",
    path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    contents: {
      days: [5, 10, 20, 60, 120],
      buy: ["bottom line"],
      sell: ["top line"],
      unit: "",
    },
    description: "",
  },
];
