import Product from "../models/productModel.js";

// CREATE PRODUCT (ADMIN)
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock, image } = req.body;

    // validation
    if (!name || !description || !price || !category || !stock) {
      return res.status(400).json({
        message: "Please provide all required fields",
      });
    }

    const product = await Product.create({
      name,
      description,
      price,
      category,
      stock,
      image,
      createdBy: req.user._id,
    });

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ALL PRODUCTS WITH SEARCH + FILTER + PAGINATION
export const getAllProducts = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const keyword = req.query.keyword
      ? { name: { $regex: req.query.keyword, $options: "i" } }
      : {};

    const category = req.query.category ? { category: req.query.category } : {};

    const priceFilter = {};

    if (req.query.minPrice) {
      priceFilter.$gte = Number(req.query.minPrice);
    }

    if (req.query.maxPrice) {
      priceFilter.$lte = Number(req.query.maxPrice);
    }

    const price = Object.keys(priceFilter).length ? { price: priceFilter } : {};

    const filter = {
      ...keyword,
      ...category,
      ...price,
    };

    const totalProducts = await Product.countDocuments(filter);

    const products = await Product.find(filter)
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json({
      totalProducts,
      currentPage: page,
      totalPages: Math.ceil(totalProducts / limit),
      products,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET SINGLE PRODUCT
export const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "createdBy",
      "name email",
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// DELETE PRODUCT (ADMIN)
export const deleteProduct = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    await product.deleteOne();

    res.status(200).json({
      message: "Product deleted successfully"
    });

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
        message: "Product not found",
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );

    res.status(200).json({
      message: "Product updated successfully",
      updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET TOP RATED PRODUCTS
export const getTopProducts = async (req, res) => {
  try {

    const products = await Product.find({})
      .sort({ ratings: -1 })
      .limit(4);

    res.status(200).json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// GET PRODUCTS BY CATEGORY
export const getProductsByCategory = async (req, res) => {
  try {

    const categoryName = req.params.name;

    const products = await Product.find({
      category: { $regex: categoryName, $options: "i" }
    });

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