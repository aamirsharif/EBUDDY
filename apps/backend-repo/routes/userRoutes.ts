import express from "express";
import {
  fetchUserData,
  fetchAllUsersData,
  submitUserData,
  updateUsersData,
} from "../controller/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/fetch-user-data", authMiddleware, fetchUserData);
router.post("/submit-user-data", authMiddleware, submitUserData);
router.get("/fetch-all-users-data", authMiddleware, fetchAllUsersData);
router.put("/update-user-data", authMiddleware, updateUsersData);

export default router;
