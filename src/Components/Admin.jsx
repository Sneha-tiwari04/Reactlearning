import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState(null); // Track kar rha hai kaunsa product edit ho rha hai

  // 1. Read: LocalStorage se data load karna
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("appleProducts")) || [];
    setProducts(savedData);
  }, []);

  // 2. Create & Update Logic
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editId) {
      // UPDATE: Agar editId hai toh purane ko update karo
      const updatedProducts = products.map(p => 
        p.id === editId ? { ...p, name, price } : p
      );
      setProducts(updatedProducts);
      localStorage.setItem("appleProducts", JSON.stringify(updatedProducts));
      setEditId(null); // Reset edit mode
    } else {
      // CREATE: Naya product add karo
      const newProduct = { id: Date.now(), name, price };
      const updatedProducts = [...products, newProduct];
      setProducts(updatedProducts);
      localStorage.setItem("appleProducts", JSON.stringify(updatedProducts));
    }
    
    setName(""); setPrice(""); // Form khali karo
  };

  // 3. Edit Mode On Karna: Input fields mein data bhar dena
  const startEdit = (product) => {
    setEditId(product.id);
    setName(product.name);
    setPrice(product.price);
  };

  // 4. Delete: Product hatana
  const deleteProduct = (id) => {
    const filtered = products.filter(p => p.id !== id);
    setProducts(filtered);
    localStorage.setItem("appleProducts", JSON.stringify(filtered));
  };

  return (
    <div className="pt-24 max-w-4xl mx-auto p-6 font-sans min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Apple Admin Panel</h1>
      
      {/* FORM: Create and Update */}
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-10 shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          {editId ? "Edit Product" : "Add New Product"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <input 
            className="flex-1 p-3 border rounded-lg focus:outline-blue-500 bg-white" 
            placeholder="Product Name" 
            value={name} onChange={(e) => setName(e.target.value)} required 
          />
          <input 
            className="flex-1 p-3 border rounded-lg focus:outline-blue-500 bg-white" 
            placeholder="Price (₹)" 
            value={price} onChange={(e) => setPrice(e.target.value)} required 
          />
          <button className={`px-8 py-3 rounded-lg font-semibold text-white transition-all ${editId ? 'bg-orange-500 hover:bg-orange-600' : 'bg-black hover:bg-gray-800'}`}>
            {editId ? "Update" : "Add"}
          </button>
          {editId && (
            <button 
              type="button" 
              onClick={() => {setEditId(null); setName(""); setPrice("");}}
              className="px-4 py-3 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* TABLE: Displaying Products */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-[14px]">
          <thead className="bg-[#f5f5f7] border-b border-gray-200">
            <tr>
              <th className="p-4 font-semibold text-gray-600">Product Name</th>
              <th className="p-4 font-semibold text-gray-600">Price</th>
              <th className="p-4 font-semibold text-gray-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr><td colSpan="3" className="p-10 text-center text-gray-400">No products added yet.</td></tr>
            ) : (
              products.map(product => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-[#fafafa] transition-colors">
                  <td className="p-4 font-medium">{product.name}</td>
                  <td className="p-4">₹{product.price}</td>
                  <td className="p-4 text-right flex justify-end gap-4">
                    <button 
                      onClick={() => startEdit(product)}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => deleteProduct(product.id)}
                      className="text-red-500 hover:underline font-medium"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;