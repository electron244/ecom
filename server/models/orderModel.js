import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    orderItems: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            name: String,
            image: String,
            price: Number,
            quantity: Number
        }
    ],

    shippingAddress: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true }
    },

    paymentStatus: {
        type: String,
        enum: ["pending", "paid"],
        default: "pending"
    },

    orderStatus: {
        type: String,
        enum: ["pending", "shipped", "delivered"],
        default: "pending"
    },

    totalPrice: {
        type: Number,
        required: true
    },

    paidAt: Date,
    deliveredAt: Date

},
{ timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;