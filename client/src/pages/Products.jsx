import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/slices/productSlice";
import { Link } from "react-router-dom";

const Products = () => {

  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-8">
        All Products
      </h1>

      {loading && (
        <p className="text-center">Loading products...</p>
      )}

      {error && (
        <p className="text-red-500 text-center">
          {error}
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {products &&
          products.map((product) => (

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
  );
};

export default Products;