import "./Dashboard.css";
function Dashboard() {
  return (
    <div className="page-container">
      <h1 style={{ marginBottom: "20px" }}>Dashboard</h1>

      {/* TOP STATS */}
    <div className="top-stats-grid">

        <div className="stat-card">
          <h3>Total Sales</h3>
          <p className="stat-value">₹ 1,25,000</p>
          <span>Today</span>
        </div>

        <div className="stat-card">
          <h3>Total Orders</h3>
          <p className="stat-value">342</p>
          <span>This Month</span>
        </div>

        <div className="stat-card">
          <h3>Low Stock Items</h3>
          <p className="stat-value">8</p>
          <span>Need Attention</span>
        </div>

        <div className="stat-card">
          <h3>Customers</h3>
          <p className="stat-value">124</p>
          <span>Active</span>
        </div>
      </div>

      {/* LOWER SECTION */}
      <div className="lower-grid">

        {/* RECENT SALES */}
        <div className="dashboard-panel">
          <h3>Recent Sales</h3>

          <table width="100%" cellPadding="10">
            <thead>
              <tr>
                <th align="left">Invoice</th>
                <th align="left">Customer</th>
                <th align="left">Amount</th>
                <th align="left">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#INV001</td>
                <td>Rahul Sharma</td>
                <td>₹ 2,500</td>
                <td>Today</td>
              </tr>
              <tr>
                <td>#INV002</td>
                <td>Anita Verma</td>
                <td>₹ 1,200</td>
                <td>Yesterday</td>
              </tr>
              <tr>
                <td>#INV003</td>
                <td>Amit Patel</td>
                <td>₹ 4,800</td>
                <td>2 days ago</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* LOW STOCK */}
        <div className="dashboard-panel">
          <h3>Low Stock Items</h3>

          <ul>
            <li>Product A — 5 left</li>
            <li>Product B — 3 left</li>
            <li>Product C — 2 left</li>
            <li>Product D — 1 left</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
