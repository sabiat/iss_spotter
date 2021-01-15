const { nextISSTimesForMyLocation } = require("./iss_promised");

// fetchMyIP()
// .then(fetchCoordsByIP)
// .then(fetchISSFlyOverTimes)
// .then(body => console.log(body));

nextISSTimesForMyLocation()
  .then((response) => {
    for (const time of response) {
      const dateTime = new Date(0);
      dateTime.setUTCSeconds(time.risetime);
      console.log(`Next pass at ${dateTime} for ${time.duration} seconds!`);
    }
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message)
  })
