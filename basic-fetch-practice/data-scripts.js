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
