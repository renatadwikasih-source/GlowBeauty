import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart(product);

    alert(
      `${product.name} berhasil ditambahkan ke keranjang!`
    );
  }

  return (
    <div className="product-card">

      {/* GAMBAR PRODUK */}
      <div className="product-image">
        {product.category === "Makeup"
          ? "💄"
          : product.category === "Body Care"
          ? "🧼"
          : "🧴"}
      </div>

      {/* KATEGORI */}
      <span className="product-category">
        {product.category}
      </span>

      {/* NAMA */}
      <h3>{product.name}</h3>

      {/* RATING */}
      <div className="rating">
        ⭐ {product.rating}
      </div>

      {/* HARGA */}
      <p className="price">
        Rp{product.price.toLocaleString("id-ID")}
      </p>

      {/* STOK */}
      <p className="stock">
        Stok: {product.stock}
      </p>

      {/* CONDITIONAL RENDERING */}
      {product.stock > 0 ? (
        <button
          className="add-button"
          onClick={handleAddToCart}
        >
          🛒 Tambah ke Keranjang
        </button>
      ) : (
        <button
          className="sold-button"
          disabled
        >
          Stok Habis
        </button>
      )}

    </div>
  );
}

export default ProductCard;