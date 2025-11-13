const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";
const userListDiv = document.getElementById("user-list");
const searchInput = document.getElementById("search");
let users = [];

fetch(USERS_API_URL)
  .then(res => res.json())
  .then(data => {
    users = data;
    renderUsers(users);
  });

function renderUsers(data) {
  userListDiv.innerHTML = data
    .map(u => `<p><strong>${u.name}</strong> — ${u.email}</p>`)
    .join("");
}

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = users.filter(u => u.name.toLowerCase().includes(keyword));
  renderUsers(filtered);
});
