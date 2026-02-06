import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Signup({ setIsLoggedIn, setRole }) {
  const navigate = useNavigate();

  const [role, setUserRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (!role || !firstName || !lastName || !email || !phone || !password) {
      setError("Please fill all fields");
      return;
    }

    // 🔑 DO NOT CHANGE ROLE VALUES
    setRole(role);
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      {/* LEFT SIDE */}
      <div className="login-left">
        <h1>Create Account</h1>
        <p className="subtitle">Fill the details to create your account.</p>

        {error && <p className="error-text">{error}</p>}

        <div className="form-group">
          <label>Role</label>
          <select value={role} onChange={(e) => setUserRole(e.target.value)}>
            <option value="">Select role</option>
            <option value="Admin">Admin</option>
            <option value="Owner">Shop Owner</option>
            <option value="Cashier">Cashier</option>
          </select>
        </div>

        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
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
          <label>Phone</label>
          <input
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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

        <button className="login-button" onClick={handleSignup}>
          Create Account
        </button>

        <p className="signup-text">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <h1>Start Managing Your Business</h1>
        <p>Join our platform and grow faster with smart tools.</p>

        <ul className="feature-list">
          <li>✔ Digital Billing & Invoicing</li>
          <li>✔ Inventory Management</li>
          <li>✔ Role-based Access Control</li>
          <li>✔ Sales & Purchase Reports</li>
          <li>✔ Manufacturer & Customer Tracking</li>
          <li>✔ AI-based Stock Prediction</li>
        </ul>
      </div>
    </div>
  );
}

export default Signup;
