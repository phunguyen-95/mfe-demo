import { useEffect, useMemo, useState } from "react";

export default function DashboardApp() {
  const [userName, setUsername] = useState("");

  const renderInit = useMemo(() => {
    return userName ? `Hello ${userName}!` : `You have not signed in!`;
  }, [userName]);

  useEffect(() => {
    const handleLogin = (e: any) => {
      if(e.detail.username) {
        setUsername(e.detail.username)
      }
    };
    document.addEventListener("login", handleLogin);
    return () => {
      document.removeEventListener("login", handleLogin);
    };
  }, []);

  return (
    <div style={{ padding: 20, background: "#e8f4fd", borderRadius: 8 }}>
      <h2>Dashboard v3</h2>
      <div>{renderInit}</div>
    </div>
  );
}
