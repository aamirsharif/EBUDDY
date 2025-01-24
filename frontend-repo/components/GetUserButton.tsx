"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import {
  Button,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Grid,
  Box,
  TextField,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import WcIcon from "@mui/icons-material/Wc";
import { fetchUserData, updateUserData } from "../apis/userApi";
import UpdateButton from "./UpdateButton";

export default function GetUserButton() {
  const users = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [userData, setUserData] = useState<any | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState<any | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const userId = users?.uid;
      const data = await fetchUserData(userId as string);
      setError("");
      setUserData(data);
      setUpdatedUserData(data); // Initialize editable data
    } catch (err: any) {
      setError(err.message || "Failed to fetch user data.");
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await updateUserData(updatedUserData); // Call API to update user data

      setError("");
      setUserData(updatedUserData); // Update displayed data
      setIsEditing(false); // Exit edit mode
    } catch (err: any) {
      setError(err.message || "Failed to update user data.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setUpdatedUserData((prev: any) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      {!userData ? (
        <Button variant="contained" onClick={fetchUsers} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : "Get User"}
        </Button>
      ) : null}

      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      {userData && (
        <Card
          sx={{
            mt: 4,
            p: 3,
            maxWidth: 600,
            margin: "0 auto",
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: "#00000",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ mb: 3, textAlign: "center", color: "#1976d2" }}
            >
              User Details
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center">
                  <PersonIcon sx={{ mr: 1, color: "#1976d2" }} />
                  <TextField
                    label="First Name"
                    value={updatedUserData?.firstName || ""}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    fullWidth
                    InputProps={{
                      readOnly: !isEditing,
                    }}
                    sx={{
                      "& .MuiInputBase-input": {
                        color: isEditing ? "black" : "gray",
                        backgroundColor:  isEditing ? "white" : "#f9f9f9"
                      },
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center">
                  <PersonIcon sx={{ mr: 1, color: "#1976d2" }} />
                  <TextField
                    label="Last Name"
                    value={updatedUserData?.lastName || ""}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    fullWidth
                    InputProps={{
                      readOnly: !isEditing,
                    }}
                    sx={{
                      "& .MuiInputBase-input": {
                        color: isEditing ? "black" : "gray",
                        backgroundColor:  isEditing ? "white" : "#f9f9f9"
                      },
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center">
                  <EmailIcon sx={{ mr: 1, color: "#1976d2" }} />
                  <TextField
                    label="Email"
                    value={userData.email}
                    fullWidth
                    InputProps={{
                      readOnly: true, 
                    }}
                    sx={{
                      "& .MuiInputBase-input": {
                        color: isEditing ? "black" : "gray",
                        backgroundColor: "#f9f9f9"
                      },
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <PhoneIcon sx={{ mr: 1, color: "#1976d2" }} />
                  <TextField
                    label="Phone Number"
                    value={updatedUserData?.phoneNumber || ""}
                    onChange={(e) =>
                      handleInputChange("phoneNumber", e.target.value)
                    }
                    fullWidth
                    InputProps={{
                      readOnly: !isEditing,
                    }}
                    sx={{
                      "& .MuiInputBase-input": {
                        color: isEditing ? "black" : "gray",
                        backgroundColor:  isEditing ? "white" : "#f9f9f9"
                      },
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="center" mt={3}>
              <UpdateButton
                userData={userData}
                onSave={handleUpdate}
                setIsEditing={setIsEditing}
                isEditing={isEditing}
              />
            </Box>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
