import { io } from "../../index";
import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function deleteOrder(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await Order.findByIdAndDelete(id);

    io.emit("orders@delete", id);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
