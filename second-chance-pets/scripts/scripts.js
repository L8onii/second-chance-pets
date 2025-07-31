// // Loads .env variables to hide API Keys(client Id and client secret)
// require('dotenv').config();

// Loads .env variables to hide API Keys(client Id and client secret) & Changes path to locate .env file from root (outside of scripts folder)
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// Access API keys from .env
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

// Fetch the access token from Petfinder API
fetch("https://api.petfinder.com/v2/oauth2/token", {
method: "POST",
headers: {
    "Content-Type": "application/x-www-form-urlencoded"
},
body: new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret
})
})

// Obtains the access token and saves as const variable

.then(response => response.json())
.then(data => {
const accessToken = data.access_token;

  // Uses Access Token to fetch animals
  // Will run IMMEDIATELY after obtaining access token (use await/async)
  // Need to incorporate event handlers for form inputs (ex: https://api.petfinder.com/v2/animals?{parameter_1}={value_1}&{parameter_2}={value_2})
  // Example Call for testing purposes with multiple parameters
  // const preAPICall = https://api.petfinder.com/v2/animals?
  // let apiCall = preAPICall + event handlers

  return fetch("https://api.petfinder.com/v2/animals?type=dog&location=47111&distance=15&limit=5&page=5", {
    method: "GET",
    headers: {
    "Authorization": `Bearer ${accessToken}`,
    "Content-Type": "application/json"
    }});
})
.then(response => response.json())
.then(data => {
    console.log("Animals:", data);
})
.catch(error => {
    console.error("Error:", error);
});