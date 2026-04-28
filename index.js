const axios = require('axios');

axios.get(`https://zenquotes.io/api/random`)
     .then(response => {
        data = response.data[0];
        console.log("Here's a motivational quote for you:");
        console.log(`"${data.q}" - ${data.a}`);
     })
     .catch(error => {
        console.error("Could not fetch a quote. Try again later.")
        console.error(`[Status ${error.response.status} - ${error.response.statusText}]`)
     })

// "I desperately wanted to make the local cache but don't have the time. o7 Extra Credit." - RTW