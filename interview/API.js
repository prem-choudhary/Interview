// Utility function to fetch data from an API
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
};

// Function to display user data
const displayUserData = (users) => {
  if (!users || users.length === 0) {
    console.log("No users found.");
    return;
  }

  users.forEach((user) => {
    const { name, email, address: { city } = {} } = user; // Destructuring
    console.log(`Name: ${name}, Email: ${email}, City: ${city}`);
  });
};

// Main function to fetch and display user data
const main = async () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const users = await fetchData(apiUrl);

  if (users) {
    displayUserData(users);
  }
};

main();
