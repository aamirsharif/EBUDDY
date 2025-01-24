
import { UserData } from "../types/userData";

const API_BASE_URL = "http://localhost:3001";


export const submitUserData = async (formData: UserData) => {

  const API_URL = `${API_BASE_URL}/api/users/submit-user-data`;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorText = await response.text(); // Handle non-JSON responses
      throw new Error(`Error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    return await response.json(); // Return parsed JSON data
  } catch (error) {
    console.error("Failed to submit user data:", error);
    throw error; // Rethrow the error for the calling code to handle
  }
};

export const fetchUserData = async (userId: string) => {
  const API_URL = `${API_BASE_URL}/api/users/fetch-user-data`;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    throw error;
  }
};

export const updateUserData = async (updatedUserData: UserData) => {
  const API_URL = `${API_BASE_URL}/api/users/update-user-data`;

  try {
    const response = await fetch(API_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to update user data:", error);
    throw error;
  }
};


export const fetchAllUsers = async () => {
  const API_URL = `${API_BASE_URL}/api/users/fetch-all-users-data`;

  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch all users:", error);
    throw error;
  }
};
