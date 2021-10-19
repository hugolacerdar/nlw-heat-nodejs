import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const service = new CreateMessageService();
    try {
      const { message } = request.body;

      const result = await service.execute(message, request.user_id);

      return response.status(201).json(result);
    } catch (error) {
      return response.json({ error: error.message });
    }
  }
}

export { CreateMessageController };
