import mongoose from "mongoose";
import hashPassword from "../middleware/hashPassword.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true,
      minlength: 6
    },

    role: {
      type: String,
      enum: ["admin", "customer"],
      default: "customer"
    }
  },
  {
    timestamps: true
  }
);


// attach middleware
userSchema.pre("save", hashPassword);

const User = mongoose.model("User", userSchema);

export default User;