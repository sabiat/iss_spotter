// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });


// fetchCoordsByIP(ip, (error, data) => {
//   if (error) {
//     console.log("It didn't work", error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:', data);
//   return data;

// });



// fetchISSFlyOverTimes(coords, (error, result) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned flyover times:', result);
// });

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  for (const time of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(time.risetime);
    console.log(`Next pass at ${dateTime} for ${time.duration} seconds!`);

  }
});