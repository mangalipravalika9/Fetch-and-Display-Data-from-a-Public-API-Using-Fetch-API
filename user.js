const userContainer = document.getElementById("user-container");
const reloadBtn = document.getElementById("reload");

// Fetch function
async function fetchUsers() {
  userContainer.innerHTML = "<p>Loading data...</p>";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const users = await response.json();

    // Clear container
    userContainer.innerHTML = "";

    users.forEach(user => {
      const userCard = document.createElement("div");
      userCard.className = "user-card";
      userCard.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      `;
      userContainer.appendChild(userCard);
    });

  } catch (error) {
    userContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}

// Event listener for reload button
reloadBtn.addEventListener("click", fetchUsers);

// Fetch users on page load
fetchUsers();
