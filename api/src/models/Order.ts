import { model, Schema } from "mongoose";
import { randomInt } from "crypto";

const generateId = () => randomInt(100000, 999999);

export const Order = model(
  "Order",
  new Schema({
    _id: {
      type: Number,
      default: generateId,
      unique: true,
      required: true,
    },
    table: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["WAITING", "IN_PRODUCTION", "DONE", "PAID"],
      default: "WAITING",
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["CASH", "CARD", "QR_CODE"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
    products: {
      type: [
        {
          product: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Product",
          },
          quantity: {
            type: Number,
            default: 1,
          },
          note: {
            type: String,
          },
        },
      ],
      required: true,
    },
  })
);
