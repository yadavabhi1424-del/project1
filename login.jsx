import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Login({ setIsLoggedIn, setRole }) {
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!selectedRole) {
      setError("Please select a role");
      return;
    }

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    // 🔑 DO NOT CHANGE THESE VALUES
    // They must match your sidebar logic exactly
    setRole(selectedRole);
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      {/* LEFT SIDE */}
      <div className="login-left">
        <h1>Login</h1>

        {error && <p className="error-text">{error}</p>}

        <div className="form-group">
          <label>Role</label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="">Select role</option>

            <option value="Admin">Admin</option>
            <option value="Owner">Shop Owner</option>
            <option value="Cashier">Cashier</option>
          </select>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>

          <p className="signup-text">
            Don’t have an account? <Link to="/signup">Create Account</Link>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <h1>Billing & Inventory System</h1>
        <p>Manage your business efficiently with powerful tools.</p>

        <ul className="feature-list">
          <li>✔ Fast Billing & Invoicing</li>
          <li>✔ Real-time Inventory Tracking</li>
          <li>✔ Low Stock Alerts</li>
          <li>✔ Sales Reports & Dashboards</li>
          <li>✔ Role-based User Access</li>
          <li>✔ AI Stock Prediction</li>
        </ul>
      </div>
    </div>
  );
}

export default Login;
