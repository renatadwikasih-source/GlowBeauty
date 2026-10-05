import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { products } from "./data/products";
import { useCart } from "./context/CartContext";

function App() {
  const [category, setCategory] = useState("Semua");
  const [search, setSearch] = useState("");
  const [showCart, setShowCart] = useState(false);

  const { totalItems } = useCart();

  // Filter produk berdasarkan kategori dan pencarian
  const filteredProducts = products.filter((product) => {
    const matchCategory =
      category === "Semua" ||
      product.category === category;

    const matchSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  // Scroll ke bagian produk
  function goToProducts(selectedCategory = category) {
    setCategory(selectedCategory);

    setTimeout(() => {
      document
        .getElementById("produk")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  }

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          ✨ GlowBeauty
        </div>

        <div className="menu">

          <button
            onClick={() => {
              setCategory("Semua");

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Home
          </button>

          <button
            onClick={() => goToProducts("Skincare")}
          >
            Skincare
          </button>

          <button
            onClick={() => goToProducts("Makeup")}
          >
            Makeup
          </button>

          <button
            onClick={() => goToProducts("Body Care")}
          >
            Body Care
          </button>

          <button
            className="cart-button"
            onClick={() =>
              setShowCart(!showCart)
            }
          >
            🛒 Keranjang ({totalItems})
          </button>

        </div>

      </nav>

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <p className="small-title">
            ✨ BEAUTY & SELF CARE
          </p>

          <h1>
            Temukan Kecantikan
            <br />
            Terbaik Untukmu
          </h1>

          <p className="hero-description">
            Temukan berbagai produk skincare dan
            kosmetik pilihan untuk membuat kulitmu
            lebih sehat dan penampilanmu semakin
            percaya diri.
          </p>

          <button
            className="shop-button"
            onClick={() =>
              goToProducts("Semua")
            }
          >
            Belanja Sekarang →
          </button>

        </div>

        <div className="hero-image">
          💄
        </div>

      </section>

      {/* ================= CATEGORY ================= */}

      <section className="category-section">

        <div className="section-title">

          <h2>
            Belanja Berdasarkan Kategori
          </h2>

          <p>
            Pilih produk sesuai kebutuhan
            kecantikanmu
          </p>

        </div>

        <div className="categories">

          <div
            className="category-card"
            onClick={() =>
              goToProducts("Skincare")
            }
          >

            <div className="category-icon">
              🧴
            </div>

            <h3>
              Skincare
            </h3>

            <p>
              Perawatan wajah
            </p>

          </div>

          <div
            className="category-card"
            onClick={() =>
              goToProducts("Makeup")
            }
          >

            <div className="category-icon">
              💄
            </div>

            <h3>
              Makeup
            </h3>

            <p>
              Kosmetik wajah
            </p>

          </div>

          <div
            className="category-card"
            onClick={() =>
              goToProducts("Body Care")
            }
          >

            <div className="category-icon">
              🧼
            </div>

            <h3>
              Body Care
            </h3>

            <p>
              Perawatan tubuh
            </p>

          </div>

          <div
            className="category-card"
            onClick={() =>
              goToProducts("Semua")
            }
          >

            <div className="category-icon">
              🌸
            </div>

            <h3>
              Semua Produk
            </h3>

            <p>
              Lihat semua produk
            </p>

          </div>

        </div>

      </section>

      {/* ================= PRODUCTS ================= */}

      <section
        className="products-section"
        id="produk"
      >

        <div className="section-title">

          <h2>
            Produk GlowBeauty
          </h2>

          <p>
            Produk pilihan untuk kebutuhan
            kecantikanmu
          </p>

        </div>

        {/* SEARCH */}

        <div className="search-box">

          <input
            type="text"
            placeholder="🔍 Cari produk kosmetik atau skincare..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

        </div>

        {/* FILTER CATEGORY */}

        <div className="category-filter">

          <button
            className={
              category === "Semua"
                ? "active"
                : ""
            }
            onClick={() =>
              setCategory("Semua")
            }
          >
            Semua
          </button>

          <button
            className={
              category === "Skincare"
                ? "active"
                : ""
            }
            onClick={() =>
              setCategory("Skincare")
            }
          >
            Skincare
          </button>

          <button
            className={
              category === "Makeup"
                ? "active"
                : ""
            }
            onClick={() =>
              setCategory("Makeup")
            }
          >
            Makeup
          </button>

          <button
            className={
              category === "Body Care"
                ? "active"
                : ""
            }
            onClick={() =>
              setCategory("Body Care")
            }
          >
            Body Care
          </button>

        </div>

        {/* CONDITIONAL RENDERING */}

        {filteredProducts.length > 0 ? (

          <div className="products">

            {filteredProducts.map(
              (product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              )
            )}

          </div>

        ) : (

          <div className="not-found">

            <h3>
              😔 Produk tidak ditemukan
            </h3>

            <p>
              Coba cari dengan nama produk
              lainnya.
            </p>

          </div>

        )}

      </section>

      {/* ================= CART ================= */}

      {showCart && <Cart />}

      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-logo">
          ✨ GlowBeauty
        </div>

        <p>
          E-Commerce Kosmetik & Skincare
        </p>

        <p className="copyright">
          © 2026 GlowBeauty. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;