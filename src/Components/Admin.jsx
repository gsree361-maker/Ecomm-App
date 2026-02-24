import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Admin() {

  const [products, setProducts] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      title: newTitle,
      price: newPrice,
      category: "Custom",
      thumbnail: "https://via.placeholder.com/150"
    };

    setProducts([...products, newProduct]);
    setNewTitle("");
    setNewPrice("");
  };

  const handleRemove = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <>
      <Header />

      <div style={{ padding: "20px" }}>
        <h2>Admin Product Management</h2>

        {/* Add Section */}
        <input
          type="text"
          placeholder="Product Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <br /><br />

        <input
          type="number"
          placeholder="Price"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        />
        <br /><br />

        <button onClick={handleAddProduct}>
          Add Product
        </button>

        <hr />

        {/* Product List */}
        <section className="products">
          {products.map((p) => (
            <div className="product" key={p.id}>
              <img src={p.thumbnail} alt={p.title} />
              <h3>{p.title}</h3>
              <p>Category: {p.category}</p>
              <p>Price: ${p.price}</p>

              <button onClick={() => handleRemove(p.id)}>
                Remove
              </button>
            </div>
          ))}
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Admin;