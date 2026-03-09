import { useSelector, useDispatch } from "react-redux";

const Cart = () => {

  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const increaseQty = (item) => {
    dispatch({
      type: "cart/addToCart",
      payload: { ...item, quantity: item.quantity + 1 }
    });
  };

  const decreaseQty = (item) => {

    if (item.quantity <= 1) return;

    dispatch({
      type: "cart/addToCart",
      payload: { ...item, quantity: item.quantity - 1 }
    });
  };

  const removeItem = (id) => {

    dispatch({
      type: "cart/removeFromCart",
      payload: id
    });

  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-8">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (

        <div className="grid md:grid-cols-3 gap-8">

          {/* CART ITEMS */}

          <div className="md:col-span-2 space-y-6">

            {cartItems.map((item) => (

              <div
                key={item._id}
                className="flex items-center gap-4 border p-4 rounded"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover"
                />

                <div className="flex-1">

                  <h2 className="font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-gray-500">
                    ₹{item.price}
                  </p>

                </div>

                {/* QUANTITY */}

                <div className="flex items-center gap-2">

                  <button
                    onClick={() => decreaseQty(item)}
                    className="px-3 py-1 bg-gray-200"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQty(item)}
                    className="px-3 py-1 bg-gray-200"
                  >
                    +
                  </button>

                </div>

                {/* REMOVE */}

                <button
                  onClick={() => removeItem(item._id)}
                  className="text-red-500"
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

          {/* CART SUMMARY */}

          <div className="border p-6 rounded h-fit">

            <h2 className="text-xl font-semibold mb-4">
              Cart Summary
            </h2>

            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800">
              Proceed to Checkout
            </button>

          </div>

        </div>

      )}

    </div>
  );
};

export default Cart;