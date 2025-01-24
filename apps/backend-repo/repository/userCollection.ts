
import { firestore } from '../config/firebaseConfig'; 

export const getUserData = async (input: { userId: string }) => {
  const { userId } = input; 
  try {
    const userRef = await firestore.collection("USERS").doc(userId).get();

    if (!userRef.exists) {
      console.warn(`No user found for ID: ${userId}`);
      return null;
    }

    const userData = userRef.data();
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Unable to fetch user data");
  }
};

export const getAllUsersData = async () => {
  try {
  
    const userRef = firestore.collection("USERS");
    const userSnapshot = await userRef.get();

    const usersList = userSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return usersList;
  } catch (error) {
    console.error("Error fetching users data:", error);
    throw new Error("Unable to fetch users data");
  }
};

export const submitUserInFirestore = async (formData: { uid: string; [key: string]: any }) => {
  try {
    const userRef = firestore.collection("USERS").doc(formData.uid);

    await userRef.set(formData, { merge: true }); 

    const userSnapshot = await userRef.get();
    return userSnapshot.data();
  } catch (error) {
    console.error("Error saving user to Firestore:", error);
    throw new Error("Failed to save user data.");
  }
};

export const updateUserData = async (updatedUserData: { uid: string; [key: string]: any }) => {
  try {
    const userRef = firestore.collection("USERS").doc(updatedUserData.uid);

    await userRef.update({
      ...updatedUserData,
    });

    console.log("User data updated successfully");
  } catch (error) {
    console.error("Error updating user in Firestore:", error);
    throw new Error("Failed to update user data.");
  }
};

