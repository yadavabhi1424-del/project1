import { Link, useNavigate, useLocation } from "react-router-dom";
import "./AppLayout.css";

function AppLayout({ children, role, setIsLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="app-layout">
      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>Inventory System</h2>

        <div className="sidebar-links">
          {(role === "Admin" || role === "Owner") && (
            <>
              <p>
                <Link
                  to="/dashboard"
                  className={location.pathname === "/dashboard" ? "active" : ""}
                >
                  Dashboard
                </Link>
              </p>

              <p>
                <Link
                  to="/inventory"
                  className={location.pathname === "/inventory" ? "active" : ""}
                >
                  Inventory
                </Link>
              </p>

              <p>
                <Link
                  to="/reports"
                  className={location.pathname === "/reports" ? "active" : ""}
                >
                  Reports
                </Link>
              </p>
            </>
          )}

          {/* Billing accessible to all */}
          <p>
            <Link
              to="/billing"
              className={location.pathname === "/billing" ? "active" : ""}
            >
              Billing
            </Link>
          </p>
        </div>
      </div>

      {/* MAIN AREA */}
      <div className="main-area">
        {/* HEADER */}
        <div className="header">
          <h3>
            {location.pathname === "/dashboard" && "Dashboard"}
            {location.pathname === "/inventory" && "Inventory"}
            {location.pathname === "/reports" && "Reports"}
            {location.pathname === "/billing" && "Billing"}
          </h3>

          <button
            onClick={() => {
              setIsLoggedIn(false);
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>

        {/* CONTENT */}
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default AppLayout;
