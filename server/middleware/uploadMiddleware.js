import multer from "multer";
import path from "path";

// Storage configuration
const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }

});

// File filter
const fileFilter = (req, file, cb) => {

  const allowedTypes = /jpeg|jpg|png|webp/;

  const isValid = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );

  if (isValid) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed"));
  }

};

const upload = multer({
  storage,
  fileFilter
});

export default upload;