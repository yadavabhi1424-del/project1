import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Billing from "./pages/Billing";
import AppLayout from "./components/AppLayout";
import Reports from "./pages/Reports";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  return (
    <Routes>
      {/* Default */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* LOGIN */}
      <Route
        path="/login"
        element={
          isLoggedIn && role ? (
            <Navigate to="/dashboard" />
          ) : (
            <Login setIsLoggedIn={setIsLoggedIn} setRole={setRole} />
          )
        }
      />

      {/* SIGNUP */}
      <Route
        path="/signup"
        element={
          <Signup setIsLoggedIn={setIsLoggedIn} setRole={setRole} />
        }
      />

      {/* DASHBOARD */}
      <Route
        path="/dashboard"
        element={
          isLoggedIn ? (
            <AppLayout role={role} setIsLoggedIn={setIsLoggedIn}>
              <Dashboard role={role} />
            </AppLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* INVENTORY */}
      <Route
        path="/inventory"
        element={
          isLoggedIn ? (
            <AppLayout role={role} setIsLoggedIn={setIsLoggedIn}>
              <Inventory
                role={role}
 
              />
            </AppLayout>

          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* BILLING */}
      <Route
        path="/billing"
        element={
          isLoggedIn ? (
            <AppLayout role={role} setIsLoggedIn={setIsLoggedIn}>
              <Billing 
                role={role}

              />
            </AppLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* REPORTS */}
      <Route
        path="/reports"
        element={
          isLoggedIn ? (
            <AppLayout role={role} setIsLoggedIn={setIsLoggedIn}>
              <Reports />
            </AppLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
}

export default App;
