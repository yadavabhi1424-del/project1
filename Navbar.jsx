import { Link, useNavigate } from "react-router-dom";

function Navbar({ role, onLogout }) {
  console.log("NAVBAR ROLE =", role);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <div style={{ padding: "15px", borderBottom: "1px solid #ccc" }}>
      {(role === "Admin" || role === "Owner") && (
        <>
          <Link to="/dashboard" style={{ marginRight: "15px" }}>
            Dashboard
          </Link>

          <Link to="/inventory" style={{ marginRight: "15px" }}>
            Inventory
          </Link>

        </>
      )}

      {/* Billing is accessible to all roles */}
      <Link to="/billing" style={{ marginRight: "15px" }}>
        Billing
      </Link>

      <button onClick={handleLogout} style={{ marginLeft: "30px" }}>
        Logout
      </button>
    </div>
  );
}

export default Navbar;
