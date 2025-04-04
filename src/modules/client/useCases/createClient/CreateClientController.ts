import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

/* The `CreateClientController` class handles incoming requests to create a new client by calling the
`CreateClientUseCase` and returning the result as JSON. */
export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createClientUseCase = new CreateClientUseCase();
    const result = await createClientUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}
