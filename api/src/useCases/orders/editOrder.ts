import { io } from "../../index";
import { Request, Response } from "express";

import { Order } from "../../models/Order";

interface IEditOrderRequest {
  status?: string;
  paymentMethod?: string;
}

export async function editOrder(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { status, paymentMethod } = req.body as IEditOrderRequest;

    const updateFields: IEditOrderRequest = {};

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    if (paymentMethod && !["CASH", "CARD", "QR_CODE"].includes(paymentMethod)) {
      return res.status(400).json({ error: "Invalid method" });
    }

    if (status && !["WAITING", "IN_PRODUCTION", "DONE", "PAID"].includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    if (status) {
      updateFields.status = status;
    }

    if (paymentMethod) {
      updateFields.paymentMethod = paymentMethod;
    }

    await Order.findByIdAndUpdate(id, updateFields);

    io.emit("orders@edit", id, status, paymentMethod);
    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
