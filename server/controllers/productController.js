import Product from "../models/productModel.js";

// CREATE PRODUCT (ADMIN)
export const createProduct = async (req, res) => {
  try {

    const { name, description, price, category, stock, image } = req.body;

    // validation
    if (!name || !description || !price || !category || !stock) {
      return res.status(400).json({
        message: "Please provide all required fields"
      });
    }

    const product = await Product.create({
      name,
      description,
      price,
      category,
      stock,
      image,
      createdBy: req.user._id
    });

    res.status(201).json({
      message: "Product created successfully",
      product
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


// GET ALL PRODUCTS
export const getAllProducts = async (req, res) => {
  try {

    const products = await Product.find();

    res.status(200).json({
      count: products.length,
      products
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// GET SINGLE PRODUCT
export const getSingleProduct = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.status(200).json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// UPDATE PRODUCT (ADMIN)
export const updateProduct = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      message: "Product updated successfully",
      updatedProduct
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};