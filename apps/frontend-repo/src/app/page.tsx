
"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import LoginForm from "../../components/LoginForm";

export default function Home() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client
  }, []);


  return (
    <div>
    <LoginForm/>
    </div>
  );
}
