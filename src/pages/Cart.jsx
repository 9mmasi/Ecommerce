import {  useCart } from "react-use-cart";



function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <p style={{
    textAlign:"center",
    fontSize:"1.5rem",
    marginTop:"2rem",
    fontWeight:"bold"
  }}>Your cart is empty</p>;

  return (
    <div className="page">
  <div className="container">
    <h1 className="page-title">
      Checkout ({totalUniqueItems})
    </h1>

    <div className="checkout-container">
      <div className="checkout-items">
        <h2 className="checkout-section-title">Order Summary</h2>

        {items.map((item) => (
          <div className="checkout-item" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="checkout-item-image"
            />

            <div className="checkout-item-details">
              <h3 className="checkout-item-name">{item.name}</h3>
              <p className="checkout-item-price">
                ${item.price} each
              </p>
            </div>

            <div className="checkout-item-controls">
              <div className="quantity-controls">
                <button
                  className="quantity-btn"
                  onClick={() =>
                    updateItemQuantity(
                      item.id,
                      (item.quantity ?? 0) - 1
                    )
                  }
                >
                  -
                </button>

                <span className="quantity-value">
                  {item.quantity}
                </span>

                <button
                  className="quantity-btn"
                  onClick={() =>
                    updateItemQuantity(
                      item.id,
                      (item.quantity ?? 0) + 1
                    )
                  }
                >
                  +
                </button>
              </div>

              <p className="checkout-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                className="btn btn-secondary btn-small"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
}
export default Cart
