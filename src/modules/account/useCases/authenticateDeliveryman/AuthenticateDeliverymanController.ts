import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";

/* The `AuthenticateDeliverymanController` class handles authentication for deliverymen by receiving a
username and password, executing the authentication use case, and returning the result in JSON
format. */
export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();
    const result = await authenticateDeliverymanUseCase.execute({
      username,
      password,
    });

    console.log({ result });
    return response.json(result);
  }
}
