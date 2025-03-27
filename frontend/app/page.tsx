"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [apiMessage, setApiMessage] = useState("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://backend:8080";

        const res = await fetch(`${API_URL}/api/message`);
        if (!res.ok) throw new Error("Server not ready");

        const data = await res.json();
        setApiMessage(data.message);
      } catch (err) {
        console.error("Error fetching API, retrying in 3s...", err);
        setTimeout(fetchData, 3000); // Retry after 3 seconds
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", marginTop: "50px" }}>
      <h1>{apiMessage}</h1>
    </div>
  );
}
