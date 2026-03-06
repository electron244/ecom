import express from "express";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post("/", upload.single("image"), (req, res) => {

  res.status(200).json({
    message: "Image uploaded successfully",
    file: req.file.filename
  });

});

export default router;