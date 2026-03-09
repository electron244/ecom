import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/slices/productSlice.js";
import { Link } from "react-router-dom";

const Home = () => {

  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>

      {/* HERO SECTION */}

      <div className="bg-gray-100 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Discover Amazing Products
        </h1>

        <p className="text-gray-600 mb-6">
          Best deals on high quality products
        </p>

        <Link
          to="/products"
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
        >
          Shop Now
        </Link>
      </div>

      {/* FEATURED PRODUCTS */}

      <div className="px-6 py-10">

        <h2 className="text-2xl font-bold text-center mb-8">
          Featured Products
        </h2>

        {loading && (
          <p className="text-center">Loading products...</p>
        )}

        {error && (
          <p className="text-center text-red-500">
            {error}
          </p>
        )}

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {products &&
            products.slice(0, 8).map((product) => (

              <div
                key={product._id}
                className="border rounded-lg p-4 shadow hover:shadow-lg transition"
              >

                <img
                  src={product.images[0]?.url}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded"
                />

                <h3 className="mt-3 font-semibold">
                  {product.name}
                </h3>

                <p className="text-gray-600">
                  ₹{product.price}
                </p>

                <Link
                  to={`/product/${product._id}`}
                  className="block mt-3 text-center bg-black text-white py-2 rounded hover:bg-gray-800"
                >
                  View Product
                </Link>

              </div>

            ))}

        </div>
      </div>

    </div>
  );
};

export default Home;