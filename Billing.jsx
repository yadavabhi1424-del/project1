import "./Billing.css";
import { useState } from "react";
import { productsData } from "../data/productsData";


function Billing() {
  const [billItems, setBillItems] = useState([]);

  const [inventoryProducts, setInventoryProducts] = useState(productsData);

  const [showModal, setShowModal] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [newQty, setNewQty] = useState(1);

  const subtotal = billItems.reduce(
  (sum, item) => sum + item.qty * item.price,
  0
);

const gst = subtotal * 0.05;

const grandTotal = subtotal + gst;

  return (
    <div>
      <div id="print-area">
      <h1 style={{ marginBottom: "20px" }}>Billing</h1>

      {/* CUSTOMER INFO */}
      <div className="panel" style={{ marginBottom: "20px" }}>
        <h3>Customer Details</h3>

        <div className="billing-grid">
          <div className="form-group">
            <label>Customer Name</label>
            <input type="text" placeholder="Enter customer name" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter phone number" />
          </div>

          <div className="form-group">
            <label>Invoice Number</label>
            <input type="text" placeholder="Auto-generated" disabled />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input type="date" />
          </div>
        </div>
      </div>

      {/* ITEMS TABLE */}
      <div className="panel" style={{ marginBottom: "20px" }}>
        <h3>Bill Items</h3>

        <table width="100%" cellPadding="10">
          <thead>
            <tr>
              <th align="left">Product</th>
              <th align="center">Quantity</th>
              <th align="left">Price</th>
              <th align="left">Total</th>
              <th align="left" className="no-print">Action</th>
            </tr>
          </thead>

          <tbody>
  {billItems.map((item) => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>
  {/* Screen view */}
  <div className="qty-wrapper">
    <span className="qty">{item.qty}</span>
    <div className="qty-controls">
    <button
      className="qty-btn"
      onClick={() => {
        if (item.qty > 1) {
          setBillItems(
            billItems.map((i) =>
              i.id === item.id
                ? { ...i, qty: i.qty - 1 }
                : i
            )
          );
        }
      }}
    >
      -
    </button>

    <input
      type="number"
      className="qty-input"
      value={item.qty}
      onChange={(e) => {
        const raw = e.target.value;

        // Allow empty while typing
        if (raw === "") {
          setBillItems(
            billItems.map((i) =>
              i.id === item.id
                ? { ...i, qty: "" }
                : i
            )
          );
          return;
        }

        const value = Number(raw);
        if (!isNaN(value) && value >= 1) {
          setBillItems(
            billItems.map((i) =>
              i.id === item.id
                ? { ...i, qty: value }
                : i
            )
          );
        }
      }}
      onBlur={() => {
        // If user leaves it empty, reset to 1
        if (item.qty === "" || item.qty < 1) {
          setBillItems(
            billItems.map((i) =>
              i.id === item.id
                ? { ...i, qty: 1 }
                : i
            )
          );
        }
      }}
    />

    <button
      className="qty-btn"
      onClick={() => {
        setBillItems(
          billItems.map((i) =>
            i.id === item.id
              ? { ...i, qty: i.qty + 1 }
              : i
          )
        );
      }}
    >
      +
    </button>
  </div>
  </div>

  {/* Print view */}
  <span className="qty-print">{item.qty}</span>
</td>



      <td>₹ {item.price}</td>
      <td>₹ {(item.qty * item.price).toFixed(2)}</td>
      <td className="no-print">
        <button
          className="action-button delete"
          onClick={() => {
            setBillItems(billItems.filter((i) => i.id !== item.id));
          }}
        >
          Remove
        </button>
      </td>
    </tr>
  ))}
</tbody>

        </table>

        <button
  className="add-button"
  style={{ marginTop: "10px" }}
  onClick={() => {
    setSelectedProduct(null);
    setNewQty(1);
    setShowModal(true);
  }}
>
  + Add Item
</button>

      </div>

      {/* BILL SUMMARY */}
      <div className="panel">
        <h3>Bill Summary</h3>

        <div className="summary-row">
  <span>Subtotal</span>
  <span>₹ {subtotal.toFixed(2)}</span>
</div>

<div className="summary-row">
  <span>Tax (5%)</span>
  <span>₹ {gst.toFixed(2)}</span>
</div>

<div className="summary-row total">
  <strong>Grand Total</strong>
  <strong>₹ {grandTotal.toFixed(2)}</strong>
</div>

        <div style={{ marginTop: "20px", textAlign: "right" }}>
          <button
  className="generate-button"
  onClick={() => {
    if (billItems.length === 0) {
      alert("No items in bill");
      return;
    }
    setBillItems([]);

    window.print();
  }}
>
  Print Bill
</button>


        </div>
      </div>
      </div>
      {/* ADD ITEM MODAL */}
{showModal && (
  <div className="modal-overlay">
    <div className="modal">
      <h2>Select Product</h2>

<table width="100%" cellPadding="8" style={{ marginBottom: "20px" }}>
  <thead>
    <tr>
      <th align="left">Product</th>
      <th align="left">Price</th>
      <th align="left">Stock</th>
      <th align="left">Action</th>
    </tr>
  </thead>

  <tbody>
    {inventoryProducts.map((p) => (
      <tr key={p.id}>
        <td>{p.name}</td>
        <td>₹ {p.price}</td>
        <td>{p.stock}</td>
        <td>
          <button
            className="action-button"
            onClick={() => {
              setSelectedProduct(p);
              setNewQty(1);
            }}
          >
            Select
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
      {selectedProduct && (
  <div style={{ marginTop: "10px" }}>
    <h3>Selected Product</h3>

    <p>
      <strong>{selectedProduct.name}</strong> — ₹ {selectedProduct.price}
    </p>
  </div>
)}


      <div style={{ marginTop: "20px", textAlign: "right" }}>
        <button
          className="action-button"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>

        <button
  disabled={!selectedProduct}
  onClick={() => {
    // Check if item already exists in bill
    const existingItem = billItems.find(
      (item) => item.id === selectedProduct.id
    );

    if (existingItem) {
      // If already in bill, just increase qty by 1
      setBillItems(
        billItems.map((item) =>
          item.id === selectedProduct.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      // Add new item to bill
      const newItem = {
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        qty: 1,
      };

      setBillItems([...billItems, newItem]);
    }

    // Reset and close modal
    setSelectedProduct(null);
    setNewQty(1);
    setShowModal(false);
  }}
>
  Save
</button>


      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default Billing;
