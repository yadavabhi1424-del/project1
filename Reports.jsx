import { useState } from "react";
import "./Reports.css";

function Reports() {
  const [activeTab, setActiveTab] = useState("sales");

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Reports</h1>

      {/* TABS */}
      <div className="tabs">
        <button
          className={activeTab === "sales" ? "tab active" : "tab"}
          onClick={() => setActiveTab("sales")}
        >
          Sales Report
        </button>

        <button
          className={activeTab === "manufacturer" ? "tab active" : "tab"}
          onClick={() => setActiveTab("manufacturer")}
        >
          Manufacturer Report
        </button>

        <button
          className={activeTab === "customer" ? "tab active" : "tab"}
          onClick={() => setActiveTab("customer")}
        >
          Customer Report
        </button>
      </div>

      {/* SALES REPORT TAB */}
      {activeTab === "sales" && (
        <div>
          {/* FILTER SECTION */}
          <div
            className="panel"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <div className="form-group">
              <label>From Date</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>To Date</label>
              <input type="date" />
            </div>

            <button className="add-button">Filter</button>
          </div>

          {/* SUMMARY CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            <div className="stat-card">
              <h3>Total Sales</h3>
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>₹ 45,000</p>
              <span>This Period</span>
            </div>

            <div className="stat-card">
              <h3>Total Bills</h3>
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>128</p>
              <span>This Period</span>
            </div>

            <div className="stat-card">
              <h3>Profit</h3>
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>₹ 8,500</p>
              <span>Estimated</span>
            </div>
          </div>

          {/* SALES TABLE */}
          <div className="panel">
            <h3>Sales Report</h3>

            <table width="100%" cellPadding="10">
              <thead>
                <tr>
                  <th align="left">Invoice No</th>
                  <th align="left">Customer</th>
                  <th align="left">Amount</th>
                  <th align="left">Date</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>#INV101</td>
                  <td>Rahul Sharma</td>
                  <td>₹ 2,500</td>
                  <td>2026-01-20</td>
                </tr>

                <tr>
                  <td>#INV102</td>
                  <td>Anita Verma</td>
                  <td>₹ 1,200</td>
                  <td>2026-01-20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MANUFACTURER REPORT TAB */}
      {activeTab === "manufacturer" && (
        <div>
          <div className="panel" style={{ marginBottom: "20px" }}>
            <h3>Manufacturer Summary</h3>

            <div className="summary-row">
              <span>Total Manufacturers</span>
              <span>12</span>
            </div>

            <div className="summary-row">
              <span>Total Purchases</span>
              <span>₹ 2,40,000</span>
            </div>
          </div>

          <div className="panel">
            <h3>Purchase History by Manufacturer</h3>

            <table width="100%" cellPadding="10">
              <thead>
                <tr>
                  <th align="left">Manufacturer</th>
                  <th align="left">Product</th>
                  <th align="left">Quantity</th>
                  <th align="left">Amount</th>
                  <th align="left">Date</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>ABC Pvt Ltd</td>
                  <td>Product A</td>
                  <td>100</td>
                  <td>₹ 12,000</td>
                  <td>2026-01-18</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CUSTOMER REPORT TAB */}
      {activeTab === "customer" && (
        <div>
          <div className="panel" style={{ marginBottom: "20px" }}>
            <h3>Customer Summary</h3>

            <div className="summary-row">
              <span>Total Customers</span>
              <span>84</span>
            </div>

            <div className="summary-row">
              <span>Total Sales</span>
              <span>₹ 3,10,000</span>
            </div>
          </div>

          <div className="panel">
            <h3>Purchase History by Customer</h3>

            <table width="100%" cellPadding="10">
              <thead>
                <tr>
                  <th align="left">Customer</th>
                  <th align="left">Invoice No</th>
                  <th align="left">Amount</th>
                  <th align="left">Date</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Rahul Sharma</td>
                  <td>#INV201</td>
                  <td>₹ 2,500</td>
                  <td>2026-01-20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reports;
