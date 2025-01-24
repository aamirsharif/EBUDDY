"use client";

import { Button } from "@mui/material";
import { UserData } from "../types/userData";


interface UpdateButtonProps {
  userData: UserData;
  onSave: (updatedData: UserData) => void; 
  setIsEditing: any
  isEditing:any
}

export default function UpdateButton({ userData, onSave , setIsEditing , isEditing }: UpdateButtonProps) {

  const handleSave = () => {
    console.log("Saving updated user data:", userData);
    onSave(userData); 
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#125ea3" },
          }}
          onClick={handleSave}
        >
          Save
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#125ea3" },
          }}
          onClick={() => setIsEditing(true)}
        >
          Update
        </Button>
      )}
    </div>
  );
}
