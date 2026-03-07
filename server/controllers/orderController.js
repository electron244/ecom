import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";

// POST /api/orders
export const createOrder = async (req, res) => {
  try {

    const { orderItems, shippingAddress, totalPrice } = req.body;

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: "No order items" });
    }

    // create order
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      totalPrice,
    });

    const createdOrder = await order.save();

    // decrement product stock
    for (const item of orderItems) {
      const product = await Product.findById(item.product);

      if (product) {
        product.countInStock -= item.quantity;
        await product.save();
      }
    }

    res.status(201).json(createdOrder);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET /api/orders/me
export const getMyOrders = async (req, res) => {
  try {

    const orders = await Order.find({ user: req.user._id });

    res.status(200).json(orders);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/orders/:id
export const getOrderById = async (req, res) => {
  try {

    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET /api/orders (Admin)
export const getAllOrders = async (req, res) => {
  try {

    const orders = await Order.find({})
      .populate("user", "name email");

    res.status(200).json(orders);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /api/orders/:id/status
export const updateOrderStatus = async (req, res) => {
  try {

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found"
      });
    }

    order.orderStatus = req.body.status;

    if (req.body.status === "delivered") {
      order.deliveredAt = Date.now();
    }

    const updatedOrder = await order.save();

    res.status(200).json(updatedOrder);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// PUT /api/orders/:id/pay
export const updateOrderPayment = async (req, res) => {
  try {

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found"
      });
    }

    order.paymentStatus = "paid";
    order.paidAt = Date.now();

    const updatedOrder = await order.save();

    res.status(200).json(updatedOrder);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// DELETE /api/orders/:id
export const deleteOrder = async (req, res) => {
  try {

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found"
      });
    }

    await order.deleteOne();

    res.status(200).json({
      message: "Order deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};