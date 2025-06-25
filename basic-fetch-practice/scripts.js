import { fetchUserData } from "./data-scripts.js";

const cardContainer = document.getElementById("api-results");
const queryAllButton = document.getElementById("query-all");
const queryUnderTen = document.getElementById("under-ten-years");
const resetButton = document.getElementById("reset");

function createContainer(user) {
  const card = document.createElement("div");
  card.classList.add("resultCard");
  card.innerHTML = `
    <p>${user.firstName} ${user.lastName}</>
    <p>Email: ${user.email}</p>
    <p>Company: ${user.companyName}</p>
    <p>Years Employed: ${user.yearsEmployed}</p>
  `;
  cardContainer.appendChild(card);
}

queryAllButton.addEventListener("click", async () => {
  const users = await fetchUserData();
  cardContainer.innerHTML = "";
  users.forEach(createContainer);
});

queryUnderTen.addEventListener("click", async () => {
  const users = await fetchUserData();
  cardContainer.innerHTML = "";
  users.filter(user => user.yearsEmployed < 10).forEach(createContainer);
});

resetButton.addEventListener("click", () => {
  cardContainer.innerHTML = "";
});

  