export async function fetchUserData() {
  try {
    const response = await fetch('https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}


import { Client } from "@petfinder/petfinder-js"; // For ES6 Modules
// or const petfinder = require("@petfinder/petfinder-js"); // For Node/CommonJS

const client = new Client({ apiKey: "YOUR_API_KEY", secret: "YOUR_API_SECRET" });