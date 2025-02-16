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

const main = async () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const users = await fetchData(apiUrl);

  if (users) {
    displayUserData(users);
  }
};

main();
