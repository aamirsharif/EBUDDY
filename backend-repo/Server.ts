import app from "../backend-repo/core/app";

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



// import { initializeApp } from "firebase/app";
// import { getFirestore, doc, setDoc } from "firebase/firestore";

// // Your Firebase config object
// const firebaseConfig = {
//   apiKey: "AIzaSyC0-MHj3wf3tCxfJPzwtF_FJBn7r2SW79w",
//   authDomain: "ebuddy-bd54f.firebaseapp.com",
//   projectId: "ebuddy-bd54f",
//   storageBucket: "ebuddy-bd54f.firebasestorage.app",
//   messagingSenderId: "338354463482",
//   appId: "1:338354463482:web:4d6a6e038d37755e7bdf43",
//   measurementId: "G-R1KNY73JZZ",
// };

// // Initialize Firebase
// const newApp = initializeApp(firebaseConfig);
// const db = getFirestore(newApp);

// // Dummy users data
// const users = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     email: "john.doe@example.com",
//     age: 30,
//     address: "123 Main St",
//   },
//   {
//     firstName: "Jane",
//     lastName: "Smith",
//     email: "jane.smith@example.com",
//     age: 25,
//     address: "456 Oak Ave",
//   },
//   {
//     firstName: "Tom",
//     lastName: "Johnson",
//     email: "tom.johnson@example.com",
//     age: 40,
//     address: "789 Pine Rd",
//   },
//   {
//     firstName: "Emily",
//     lastName: "Davis",
//     email: "emily.davis@example.com",
//     age: 35,
//     address: "101 Maple Ln",
//   },
//   {
//     firstName: "David",
//     lastName: "Martinez",
//     email: "david.martinez@example.com",
//     age: 28,
//     address: "202 Birch Blvd",
//   },
//   {
//     firstName: "Laura",
//     lastName: "Garcia",
//     email: "laura.garcia@example.com",
//     age: 32,
//     address: "303 Cedar Dr",
//   },
//   {
//     firstName: "Michael",
//     lastName: "Rodriguez",
//     email: "michael.rodriguez@example.com",
//     age: 45,
//     address: "404 Elm St",
//   },
//   {
//     firstName: "Sarah",
//     lastName: "Wilson",
//     email: "sarah.wilson@example.com",
//     age: 38,
//     address: "505 Pinehill Ave",
//   },
//   {
//     firstName: "James",
//     lastName: "Taylor",
//     email: "james.taylor@example.com",
//     age: 50,
//     address: "606 Willow Way",
//   },
//   {
//     firstName: "Mary",
//     lastName: "Anderson",
//     email: "mary.anderson@example.com",
//     age: 29,
//     address: "707 Fir Ct",
//   },
// ];

// const addUser = async (userId: string, userData: any) => {
//   try {
//     const userRef = doc(db, "USERS", userId); // Create a reference to the user document
//     await setDoc(userRef, userData); // Set the user data
//     console.log(`User ${userId} added successfully!`);
//   } catch (error) {
//     console.error("Error adding user:", error);
//   }
// };

// // Add users to Firestore
// const addDummyUsers = async () => {
//   for (let i = 0; i < users.length; i++) {
//     const userId = `user${i + 1}`; // Generate a unique user ID
//     const userData = users[i]; // Get the user data
//     await addUser(userId, userData); // Add the user to Firestore
//   }
// };

// // Run the function to add the dummy users
// addDummyUsers()
//   .then(() => {
//     console.log("Dummy users added successfully!");
//   })
//   .catch((error) => {
//     console.error("Error adding dummy users:", error);
//   });

// // Function to add a user to the USERS collection


