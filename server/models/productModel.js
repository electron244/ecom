import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true,
    trim: true
  },

  description: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true,
    default: 0
  },

  category: {
    type: String,
    required: true
  },

  stock: {
    type: Number,
    required: true,
    default: 0
  },

  images: [
    {
      url: {
        type: String
      }
    }
  ],

  ratings: {
    type: Number,
    default: 0
  },

  numReviews: {
    type: Number,
    default: 0
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

},
{
  timestamps: true
}
);

const Product = mongoose.model("Product", productSchema);

export default Product;