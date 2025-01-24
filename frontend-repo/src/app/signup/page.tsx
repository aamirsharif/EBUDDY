"use client";

import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { useRouter } from "next/navigation";
import { submitUserData } from "../../../apis/userApi";
import { UserData } from "../../../types/userData";

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Signup = () => {
  const users = useSelector((state: RootState) => state.user);
  const router = useRouter();

  useEffect(() => {
    console.log("Users from Redux state:", users);
  }, [users]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    gender: "",
    uid: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    //@ts-ignore
    setFormData({ ...formData, [name]: value, uid: users?.uid });
  };



    const handleSubmit = async (e: any) => {
      e.preventDefault();
      console.log(formData);
  
      try {
        setLoading(true);
        const data = await submitUserData(formData as UserData); 
        router.push("/dashboard");
        console.log(data, "Single User");
      } catch (err: any) {
        setError(err.message || "Failed to Submit users.");
      } finally {
        setLoading(false);
      }
    };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#e0f7fa",
        animation: `${fadeIn} 0.8s ease-in-out`,
        padding: "0px 20px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,

          p: 4,
          backgroundColor: "#ffffff",
          borderRadius: 3,
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 3, color: "#00796b" }}
        >
          Create an Account
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            name="firstName"
            fullWidth
            margin="normal"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <TextField
            label="Last Name"
            name="lastName"
            fullWidth
            margin="normal"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            fullWidth
            margin="normal"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#00796b",
              "&:hover": { backgroundColor: "#004d40" },
            }}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;
