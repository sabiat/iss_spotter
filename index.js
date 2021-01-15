const { fetchMyIP, fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP('174.91.51.34', (error, data) => {
//   if (error) {
//     console.log("It didn't work", error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:', data);

// });