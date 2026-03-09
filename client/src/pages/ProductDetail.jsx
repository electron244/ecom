import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {

  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { product } = useSelector((state) => state.products);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {

    const fetchProduct = async () => {

      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();

      dispatch(fetchSingleProduct(data.product));
    };

    fetchProduct();

  }, [dispatch, id]);

  const addToCartHandler = () => {

    dispatch({
      type: "cart/addToCart",
      payload: {
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.images[0]?.url,
        quantity
      }
    });

    navigate("/cart");
  };

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <div className="grid md:grid-cols-2 gap-10">

        {/* PRODUCT IMAGE */}

        <img
          src={product.images[0]?.url}
          alt={product.name}
          className="w-full rounded"
        />

        {/* PRODUCT INFO */}

        <div>

          <h1 className="text-3xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-xl text-gray-700 mb-4">
            ₹{product.price}
          </p>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          {/* QUANTITY */}

          <div className="flex items-center gap-3 mb-6">

            <button
              onClick={() =>
                setQuantity(quantity > 1 ? quantity - 1 : 1)
              }
              className="px-3 py-1 bg-gray-200"
            >
              -
            </button>

            <span>{quantity}</span>

            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1 bg-gray-200"
            >
              +
            </button>

          </div>

          {/* ADD TO CART */}

          <button
            onClick={addToCartHandler}
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
          >
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductDetail;