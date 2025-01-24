"use client"

import React from "react";
import { Box, Grid, Card, CardContent, Typography, Button, CardActionArea, CircularProgress } from "@mui/material";
import { keyframes } from "@mui/system";
import GetUsersButton from "../../../components/GetUsersButton";
import GetUserButton from "../../../components/GetUserButton";

// Keyframe for card animation
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Dashboard = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        animation: `${fadeIn} 1s ease-in-out`
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4 }}>
        Dashboard
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Card sx={{ boxShadow: 3, borderRadius: '8px', padding: 3 }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Manage Users
            </Typography>
            {/* <Box sx={{ mt: 2 }}>
            <GetUsersButton />
            </Box> */}
            <Box sx={{ mt: 2 }}>
            <GetUserButton />
            </Box>
          </CardContent>
        </Card>
      </Box>

    </Box>
  );
};

export default Dashboard;
