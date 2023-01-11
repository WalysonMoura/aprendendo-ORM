import { Request, Response } from "express";
import { CreateVideoService } from "../services/CreateVideoService";

export class CreateVideoController {
  async handle(req: Request, res: Response) {
    const { name, description, category_id, duration } = req.body;

    const service = new CreateVideoService();
    const result = service.execute({
      name,
      description,
      duration,
      category_id,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result)
  }
}
