import { useState } from "react"
import "./Inventory.css";
import { productsData } from "../data/productsData";

function Inventory() {
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [newName, setNewName] = useState("");
  const [newQty, setNewQty] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [editingId, setEditingId] = useState(null);
const [products, setProducts] = useState(productsData || []);
  const [selectedIds, setSelectedIds] = useState([]);


  const filteredProducts = products.filter((item) =>
  item.name.toLowerCase().includes(searchText.toLowerCase()));

  const getStatus = (stock) => {
  if (stock === 0) return "out";
  if (stock < 20) return "low";
  return "good";
};

const totalItems = products.length;
const lowStockCount = products.filter(p => p.stock > 0 && p.stock < 20).length;
const outOfStockCount = products.filter(p => p.stock === 0).length;
const expiredCount = 0;

  return (
    <div className="page-container">
      {/* TOP SUMMARY CARDS */}
<div className="inventory-stats-grid">

  <div className="stat-card">
    <h3>Total Items</h3>
    <p style={{ fontSize: "24px", fontWeight: "bold" }}>{totalItems}</p>
    <span>Total items in stock</span>
  </div>

  <div className="stat-card">
    <h3>Low Stock Items</h3>
    <p style={{ fontSize: "24px", fontWeight: "bold" }}>{lowStockCount}</p>
    <span>Running low</span>
  </div>

  <div className="stat-card">
    <h3>Expired Items</h3>
    <p style={{ fontSize: "24px", fontWeight: "bold" }}>{expiredCount}</p>
    <span>Past expiry</span>
  </div>

  <div className="stat-card">
    <h3>Out of Stock</h3>
    <p style={{ fontSize: "24px", fontWeight: "bold" }}>{outOfStockCount}</p>
    <span>Currently zero</span>
  </div>
</div>

      {/* HEADER */}
      <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  }}
>
  <h1>Stock</h1>

  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
    <input
  type="text"
  placeholder="Search item..."
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
  style={{
    padding: "8px 10px",
    borderRadius: "6px",
    color: "black",
    backgroundColor: "white",
    border: "1px solid #ccc",
  }}
/>


    <button className="inventory-action-button">Filter</button>

    <button
  className="add-button"
  onClick={() => {
    setEditingId(null);
    setNewName("");
    setNewQty("");
    setNewPrice("");
    setShowModal(true);
  }}
>
  + Add Item
</button>


  </div>
</div>


      {/* TABLE */}
      <h2 style={{ marginBottom: "10px" }}>Inventory Overview</h2>

      <div className="inventory-panel">
        <table width="100%" cellPadding="10">
          <thead>
            <tr>
  <th></th>
  <th>Item Name</th>
  <th>Image</th>
  <th>Stock</th>
  <th>Price</th>
  <th>Last Updated</th>
  <th>Status</th>
  <th>Action</th>
</tr>

          </thead>

          <tbody>
  {filteredProducts.map((item) => (
    <tr key={item.id}>
      <td>
        <input
  type="checkbox"
  checked={selectedIds.includes(item.id)}
  onChange={(e) => {
    if (e.target.checked) {
      setSelectedIds([...selectedIds, item.id]);
    } else {
      setSelectedIds(selectedIds.filter((id) => id !== item.id));
    }
  }}
/>
      </td>

      <td style={{ textAlign: "center" }}>{item.name}</td>

      <td>
        <img
          src="https://via.placeholder.com/40"
          alt="product"
          style={{ borderRadius: "4px" }}
        />
      </td>

      <td style={{ textAlign: "center" }}>{item.stock}</td>
      <td style={{ textAlign: "center" }}>{item.price}</td>
      <td style={{ textAlign: "center" }}>{item.updated}</td>

     <td style={{ textAlign: "center" }}>
  <span className={`status ${getStatus(item.stock)}`}>
    {getStatus(item.stock) === "good"
      ? "Good"
      : getStatus(item.stock) === "low"
      ? "Low Stock"
      : "Out of Stock"}
  </span>
</td>





      <td style={{ position: "relative" }}>
        <button  style={{ position: "absolute", top: "10px", right: "50px" }} className="dots-button" >⋮</button>

        <div className="action-menu">
          <button
  onClick={() => {
    setEditingId(item.id);
    setNewName(item.name);
    setNewQty(item.stock);
    setNewPrice(item.price);
    setShowModal(true);
  }}
>
  Edit
</button>

          <button
  onClick={() => {
    const confirmDelete = window.confirm(
      `Delete ${item.name}?`
    );

    if (confirmDelete) {
      setProducts(products.filter((p) => p.id !== item.id));
      setSelectedIds(selectedIds.filter((id) => id !== item.id));
    }
  }}
>
  Delete
</button>

        </div>
      </td>
    </tr>
  ))}
</tbody>


        </table>
      </div>
      {showModal && (
  <div className="modal-overlay">
    <div className="modal">
      <h2>{editingId ? "Edit Product" : "Add Product"}</h2>

      <div className="form-group">
        <label>Product Name</label>
        <input type="text"
        placeholder="Enter product name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        disabled={editingId !== null}/>
      </div>

      <div className="form-group">
        <label>Price</label>
        <input type="number"
        placeholder="Enter price"
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Stock</label>
        <input type="number"
        placeholder="Enter stock quantity"
        value={newQty}
        onChange={(e) => setNewQty(e.target.value)}/>
      </div>

      <div style={{ marginTop: "20px", textAlign: "right" }}>
        <button className="inventory-action-button"
          onClick={() => {
          setEditingId(null);
          setShowModal(false);
          }}
        >
          Cancel
        </button>


        <button
  className="inventory-action-button"
  style={{ marginLeft: "10px" }}
  onClick={() => {
    if (!newName || !newQty || !newPrice) {
      alert("Please fill all fields");
      return;
    }

    if (editingId) {
      // UPDATE EXISTING PRODUCT
      const updatedProducts = products.map((p) =>
        p.id === editingId
          ? {
              ...p,
              name: newName,
              stock: Number(newQty),
              price: Number(newPrice),
              updated: "Today",
            }
          : p
      );

      setProducts(updatedProducts);
    } else {
      // ADD NEW PRODUCT
      const newProduct = {
        id: Date.now(),
        name: newName,
        stock: Number(newQty),
        price: Number(newPrice),
        status: "good",
        updated: "Today",
      };

      setProducts([...products, newProduct]);
    }

    // Reset form & close modal
    setNewName("");
    setNewQty("");
    setNewPrice("");
    setEditingId(null);
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

export default Inventory;
