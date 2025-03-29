import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./CreateDeliveryUseCase";

/* The `CreateDeliverymanController` class handles incoming requests to create a new deliveryman by
invoking the `CreateDeliverymanUseCase` and returning the result as JSON. */
export class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createDeliverymanUseCase = new CreateDeliverymanUseCase();
    const result = await createDeliverymanUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}
