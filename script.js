 const usersContainer = document.getElementById('users');
    const errorContainer = document.getElementById('error');
    const reloadBtn = document.getElementById('reload');

    async function fetchUsers() {
      usersContainer.innerHTML = '';
      errorContainer.textContent = '';
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const users = await response.json();
        users.forEach(user => {
          const userDiv = document.createElement('div');
          userDiv.classList.add('user');
          userDiv.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
          `;
          usersContainer.appendChild(userDiv);
        });
      } catch (error) {
        errorContainer.textContent = `Failed to fetch users: ${error.message}`;
      }
    }

    reloadBtn.addEventListener('click', fetchUsers);

    // Initial fetch
    fetchUsers();