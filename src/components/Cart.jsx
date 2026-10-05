import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    decreaseQuantity,
    addToCart,
    removeFromCart,
    totalPrice,
  } = useCart();

  return (
    <section className="cart-section">

      <div className="section-title">

        <h2>
          🛒 Keranjang Belanja
        </h2>

        <p>
          Produk yang kamu pilih
        </p>

      </div>

      {cart.length === 0 ? (

        <div className="empty-cart">

          <div className="empty-cart-icon">
            🛍️
          </div>

          <h3>
            Keranjang masih kosong
          </h3>

          <p>
            Yuk pilih produk favoritmu!
          </p>

        </div>

      ) : (

        <div className="cart-container">

          <div className="cart-items">

            {cart.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                <div className="cart-item-image">
                  {item.category ===
                  "Makeup"
                    ? "💄"
                    : item.category ===
                      "Body Care"
                    ? "🧼"
                    : "🧴"}
                </div>

                <div className="cart-item-info">

                  <span>
                    {item.category}
                  </span>

                  <h3>
                    {item.name}
                  </h3>

                  <strong>
                    Rp
                    {item.price.toLocaleString(
                      "id-ID"
                    )}
                  </strong>

                </div>

                <div className="quantity-control">

                  <button
                    onClick={() =>
                      decreaseQuantity(
                        item.id
                      )
                    }
                  >
                    −
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      addToCart(item)
                    }
                  >
                    +
                  </button>

                </div>

                <div className="cart-item-total">

                  Rp
                  {(
                    item.price *
                    item.quantity
                  ).toLocaleString(
                    "id-ID"
                  )}

                </div>

                <button
                  className="remove-button"
                  onClick={() =>
                    removeFromCart(
                      item.id
                    )
                  }
                >
                  🗑️
                </button>

              </div>

            ))}

          </div>

          <div className="cart-summary">

            <h3>
              Total Belanja
            </h3>

            <div className="total-price">
              Rp
              {totalPrice.toLocaleString(
                "id-ID"
              )}
            </div>

            <button
  className="checkout-button"
  onClick={() => {
    if (cart.length === 0) {
      alert("Keranjang masih kosong.");
      return;
    }

    alert(
      `Pesanan berhasil dibuat!\nTotal pembayaran: Rp${totalPrice.toLocaleString(
        "id-ID"
      )}`
    );
  }}
>
  Checkout →
</button>

          </div>

        </div>

      )}

    </section>
  );
}

export default Cart;