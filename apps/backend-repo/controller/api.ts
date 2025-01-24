import { Request, Response } from "express";
import {
  getAllUsersData,
  getUserData,
  submitUserInFirestore,
  updateUserData,
} from "../repository/userCollection";

export const fetchUserData = async (req: Request, res: Response) => {
  const userId = req.body;

  const userData = await getUserData(userId);
  res.json(userData);
};

export const fetchAllUsersData = async (req: Request, res: Response) => {
  const userData = await getAllUsersData();
  res.json(userData);
};

export const updateUsersData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedUserData = req.body;

    if (!updatedUserData.uid) {
      res.status(400).json({ error: "UID is required in the formData." });
      return;
    }
    const userData = await updateUserData(updatedUserData);
    res
      .status(200)
      .json({ message: "User data Updated successfully.", userData });
  } catch (error) {
    console.error("Error Updateing user data:", error);
    res.status(500).json({ error: "Failed to Update user data." });
  }
};

export const submitUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("Request received at /submit-user-data");
  console.log("Request body:", req.body);

  try {
    const formData = req.body;

    if (!formData.uid) {
      res.status(400).json({ error: "UID is required in the formData." });
      return; // Ensure no further execution
    }

    const userData = await submitUserInFirestore(formData);
    res
      .status(200)
      .json({ message: "User data submitted successfully.", userData });
  } catch (error) {
    console.error("Error submitting user data:", error);
    res.status(500).json({ error: "Failed to submit user data." });
  }
};
