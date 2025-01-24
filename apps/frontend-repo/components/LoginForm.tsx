"use client"

import { TextField, Button, Typography, Container, Box, Grid, Snackbar } from "@mui/material";
import { useState } from "react";
import { loginWithEmail } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Importing the firebase auth instance
import GetUsersButton from "../components/GetUsersButton";
import { keyframes } from "@mui/system";
import { useRouter } from "next/navigation";
import { useDispatch } from 'react-redux';
import { setUser } from "../store/reducer";


export default function LoginForm() {
  
  const router = useRouter()
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignup, setIsSignup] = useState(false); // State to toggle between signup and login
  const [openSnackbar, setOpenSnackbar] = useState(false); // State to control Snackbar visibility

  // Keyframe for fade-in animation
  const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(-30px); }
    100% { opacity: 1; transform: translateY(0); }
  `;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (isSignup) {
        // Signup process
        const response = await createUserWithEmailAndPassword(auth, email, password);
        dispatch(setUser({ email: response.user.email || '', uid: response.user.uid }));
        console.log(response.user.uid , "user")
        router.push("/signup")
        setOpenSnackbar(true); // Show success message
      } else {
        // Login process
        const response = await loginWithEmail(email, password);
        dispatch(setUser({ email: response.user.email || '', uid: response.user.uid }));
        console.log(response.user.uid , "user")
        router.push("/dashboard")
        setOpenSnackbar(true); // Show success message
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Container 
      maxWidth="xs" 
      sx={{ 
        mt: 4, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh', 
        flexDirection: 'column', 
        animation: `${fadeIn} 1s ease-in-out`
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          {isSignup ? "Sign Up" : "Login"}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {isSignup ? "Create a new account" : "Welcome back, please login"}
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              required
              autoFocus
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                },
              }}
            />
          </Grid>

          {error && (
            <Grid item xs={12}>
              <Typography variant="body2" color="error">
                {error}
              </Typography>
            </Grid>
          )}

          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color={isSignup ? "primary" : "secondary"}
              sx={{ py: 1.5, fontWeight: 'bold', borderRadius: '8px', boxShadow: 3 }}
            >
              {isSignup ? "Sign Up" : "Login"}
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              onClick={() => setIsSignup(!isSignup)}
              variant="text"
              sx={{ mt: 1, fontWeight: 'bold' }}
            >
              {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Snackbar for success */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message={isSignup ? "Account created successfully!" : "Logged in successfully!"}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{ '& .MuiSnackbarContent-root': { backgroundColor: 'green', color: 'white', borderRadius: '8px' } }}
      />
    </Container>
  );
}
