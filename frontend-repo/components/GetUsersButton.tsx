// components/GetUsersButton.tsx
"use client";
import { Button, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import UsersTable from "./UsersTable";
import { fetchAllUsers } from "../apis/userApi";

export default function GetUsersButton() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState<string>("");

  const handleFetchUsers = async () => {
    setLoading(true);
    try {
      const data = await fetchAllUsers();

      setUsers(data);
      setError("");
    } catch (err: any) {
      setError(err.message || "Failed to fetch users.");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = (userId: string) => {
    console.log("Update user with id:", userId);
  };

  useEffect(()=>{
    setUsers([])
  },[])

  return (
    <div>
      {users.length > 0 ? null : (
      <Button variant="contained" onClick={handleFetchUsers} disabled={loading}>
        {loading ? <CircularProgress size={24} /> : "Get Users"}
      </Button>
      )}

      {error && <Typography color="error">{error}</Typography>}

      {users.length > 0 && <UsersTable users={users} onUpdate={handleUpdate} />}
    </div>
  );
}
