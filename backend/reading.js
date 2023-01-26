const readingsTemprature = [
    {
      uid: "001",
      readings: [
        { temperature: 72.5, timestamp: "2022-01-01T12:00:00Z" },
        { temperature: 71.4, timestamp: "2022-01-02T12:00:00Z" },
        { temperature: 63.4, timestamp: "2022-01-03T12:00:00Z" },
        { temperature: 67.4, timestamp: "2022-01-04T12:00:00Z" },
        { temperature: 78.4, timestamp: "2022-01-05T12:00:00Z" },
        { temperature: 89.6, timestamp: "2022-01-06T12:00:00Z" }
      ]
    },
    {
      uid: "002",
      readings: [
        { temperature: 73.3, timestamp: "2022-01-01T12:00:00Z" },
        { temperature: 72.2, timestamp: "2022-01-02T12:00:00Z" },
        { temperature: 65.4, timestamp: "2022-01-03T12:00:00Z" },
        { temperature: 76.4, timestamp: "2022-01-04T12:00:00Z" },
        { temperature: 78.4, timestamp: "2022-01-05T12:00:00Z" },
        { temperature: 71.6, timestamp: "2022-01-06T12:00:00Z" }
      ]
    },
    {
      uid: "003",
      readings: [
        { temperature: 72.5, timestamp: "2022-01-01T12:00:00Z" },
        { temperature: 73.4, timestamp: "2022-01-02T12:00:00Z" },
        { temperature: 74.6, timestamp: "2022-01-03T12:00:00Z" },
        { temperature: 67.4, timestamp: "2022-01-04T12:00:00Z" },
        { temperature: 58.4, timestamp: "2022-01-05T12:00:00Z" },
        { temperature: 89.6, timestamp: "2022-01-06T12:00:00Z" }
      ]
    },
    {
      uid: "004",
      readings: [
        { temperature: 81.5, timestamp: "2022-01-01T12:00:00Z" },
        { temperature: 63.4, timestamp: "2022-01-02T12:00:00Z" },
        { temperature: 78.6, timestamp: "2022-01-03T12:00:00Z" },
        { temperature: 71.4, timestamp: "2022-01-04T12:00:00Z" },
        { temperature: 72.4, timestamp: "2022-01-05T12:00:00Z" },
        { temperature: 79.6, timestamp: "2022-01-06T12:00:00Z" }
      ]
    },
    {
      uid: "005",
      readings: [
        { temperature: 91.5, timestamp: "2022-01-01T12:00:00Z" },
        { temperature: 81.4, timestamp: "2022-01-02T12:00:00Z" },
        { temperature: 88.6, timestamp: "2022-01-03T12:00:00Z" },
        { temperature: 98.4, timestamp: "2022-01-04T12:00:00Z" },
        { temperature: 86.4, timestamp: "2022-01-05T12:00:00Z" },
        { temperature: 90.6, timestamp: "2022-01-06T12:00:00Z" }
      ]
    },
    {
      uid: "006",
      readings: [
        { temperature: 72.5, timestamp: "2022-01-01T12:00:00Z" },
        { temperature: 71.4, timestamp: "2022-01-02T12:00:00Z" },
        { temperature: 88.6, timestamp: "2022-01-03T12:00:00Z" },
        { temperature: 98.4, timestamp: "2022-01-04T12:00:00Z" },
        { temperature: 86.4, timestamp: "2022-01-05T12:00:00Z" },
        { temperature: 90.6, timestamp: "2022-01-06T12:00:00Z" }
      ]
    },
    {
      uid: "007",
      readings: [
        { temperature: 81.5, timestamp: "2022-01-01T12:00:00Z" },
        { temperature: 63.4, timestamp: "2022-01-02T12:00:00Z" },
        { temperature: 78.6, timestamp: "2022-01-03T12:00:00Z" },
        { temperature: 71.4, timestamp: "2022-01-04T12:00:00Z" },
        { temperature: 81.4, timestamp: "2022-01-05T12:00:00Z" },
        { temperature: 73.6, timestamp: "2022-01-06T12:00:00Z" }
      ]
    },
    {
      uid: "008",
      readings: [
        { temperature: 72.5, timestamp: "2022-01-01T12:00:00Z" },
        { temperature: 71.4, timestamp: "2022-01-02T12:00:00Z" },
        { temperature: 83.6, timestamp: "2022-01-03T12:00:00Z" },
        { temperature: 91.4, timestamp: "2022-01-04T12:00:00Z" },
        { temperature: 51.4, timestamp: "2022-01-05T12:00:00Z" },
        { temperature: 83.6, timestamp: "2022-01-06T12:00:00Z" }
      ]
    },
    {
      uid: "009",
      readings: [
        { temperature: 62.5, timestamp: "2022-01-01T12:00:00Z" },
        { temperature: 71.4, timestamp: "2022-01-02T12:00:00Z" },
        { temperature: 73.6, timestamp: "2022-01-03T12:00:00Z" },
        { temperature: 79.4, timestamp: "2022-01-04T12:00:00Z" },
        { temperature: 90.4, timestamp: "2022-01-05T12:00:00Z" },
        { temperature: 73.6, timestamp: "2022-01-06T12:00:00Z" }
      ]
    },

  ];


  const readingsHumidity = [
    {
      uid: "001",
      readings: [
        { humidity: 50.5, timestamp: "2022-01-01T12:00:00Z" },
        { humidity: 51.4, timestamp: "2022-01-02T12:00:00Z" },
        { humidity: 53.6, timestamp: "2022-01-03T12:00:00Z" },
        { humidity: 50.5, timestamp: "2022-01-04T12:00:00Z" },
        { humidity: 51.4, timestamp: "2022-01-05T12:00:00Z" },
        { humidity: 53.6, timestamp: "2022-01-06T12:00:00Z" }
      ]
    },
    {
      uid: "002",
      readings: [
        { humidity: 45.3, timestamp: "2022-01-01T12:00:00Z" },
        { humidity: 58.2, timestamp: "2022-01-02T12:00:00Z" },
        { humidity: 56.4, timestamp: "2022-01-03T12:00:00Z" },
        { humidity: 50.5, timestamp: "2022-01-04T12:00:00Z" },
        { humidity: 51.4, timestamp: "2022-01-05T12:00:00Z" },
        { humidity: 53.6, timestamp: "2022-01-06T12:00:00Z" }
      ]
    },
    {
      uid: "003",
      readings: [
        { humidity: 47.3, timestamp: "2022-01-01T12:00:00Z" },
        { humidity: 58.2, timestamp: "2022-01-02T12:00:00Z" },
        { humidity: 55.4, timestamp: "2022-01-03T12:00:00Z" },
        { humidity: 50.5, timestamp: "2022-01-04T12:00:00Z" },
        { humidity: 59.4, timestamp: "2022-01-05T12:00:00Z" },
        { humidity: 61.6, timestamp: "2022-01-06T12:00:00Z" }
      ]
    },
    {
      uid: "004",
      readings: [
        { humidity: 49.3, timestamp: "2022-01-01T12:00:00Z" },
        { humidity: 58.2, timestamp: "2022-01-02T12:00:00Z" },
        { humidity: 56.4, timestamp: "2022-01-03T12:00:00Z" },
        { humidity: 51.5, timestamp: "2022-01-04T12:00:00Z" },
        { humidity: 55.4, timestamp: "2022-01-05T12:00:00Z" },
        { humidity: 53.6, timestamp: "2022-01-06T12:00:00Z" }
      ]
    },
    {
      uid: "005",
      readings: [
        { humidity: 81.3, timestamp: "2022-01-01T12:00:00Z" },
        { humidity: 78.2, timestamp: "2022-01-02T12:00:00Z" },
        { humidity: 65.4, timestamp: "2022-01-03T12:00:00Z" },
        { humidity: 89.5, timestamp: "2022-01-04T12:00:00Z" },
        { humidity: 51.4, timestamp: "2022-01-05T12:00:00Z" },
        { humidity: 56.6, timestamp: "2022-01-06T12:00:00Z" }
      ]
    },
    {
      uid: "006",
      readings: [
        { humidity: 65.3, timestamp: "2022-01-01T12:00:00Z" },
        { humidity: 28.2, timestamp: "2022-01-02T12:00:00Z" },
        { humidity: 76.4, timestamp: "2022-01-03T12:00:00Z" },
        { humidity: 40.5, timestamp: "2022-01-04T12:00:00Z" },
        { humidity: 81.4, timestamp: "2022-01-05T12:00:00Z" },
        { humidity: 43.6, timestamp: "2022-01-06T12:00:00Z" }
      ]
    },
    {
      uid: "007",
      readings: [
        { humidity: 45.3, timestamp: "2022-01-01T12:00:00Z" },
        { humidity: 58.2, timestamp: "2022-01-02T12:00:00Z" },
        { humidity: 66.4, timestamp: "2022-01-03T12:00:00Z" },
        { humidity: 60.5, timestamp: "2022-01-04T12:00:00Z" },
        { humidity: 51.4, timestamp: "2022-01-05T12:00:00Z" },
        { humidity: 53.6, timestamp: "2022-01-06T12:00:00Z" }
      ]
    },
    {
      uid: "008",
      readings: [
        { humidity: 55.3, timestamp: "2022-01-01T12:00:00Z" },
        { humidity: 48.2, timestamp: "2022-01-02T12:00:00Z" },
        { humidity: 76.4, timestamp: "2022-01-03T12:00:00Z" },
        { humidity: 40.5, timestamp: "2022-01-04T12:00:00Z" },
        { humidity: 54.4, timestamp: "2022-01-05T12:00:00Z" },
        { humidity: 53.6, timestamp: "2022-01-06T12:00:00Z" }
      ]
    },
    {
      uid: "009",
      readings: [
        { humidity: 45.3, timestamp: "2022-01-01T12:00:00Z" },
        { humidity: 51.2, timestamp: "2022-01-02T12:00:00Z" },
        { humidity: 52.4, timestamp: "2022-01-03T12:00:00Z" },
        { humidity: 57.5, timestamp: "2022-01-04T12:00:00Z" },
        { humidity: 54.4, timestamp: "2022-01-05T12:00:00Z" },
        { humidity: 59.6, timestamp: "2022-01-06T12:00:00Z" }
      ]
    },

  ];

  module.exports = {readingsTemprature,readingsHumidity};
  
