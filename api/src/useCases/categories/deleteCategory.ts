import { Request, Response } from "express";

import { Category } from "../../models/Category";

export async function deleteCategory(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await Category.findByIdAndDelete(id);

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
