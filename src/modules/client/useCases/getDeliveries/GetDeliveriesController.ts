import { Request, Response } from "express";
import { GetDeliveriesUseCase } from "./GetDeliveriesUseCase";

/* The GetDeliveriesController class handles requests to retrieve deliveries for a specific person. */
export class GetDeliveriesController {
  async handle(request: Request, response: Response) {
    const { id_person } = request;

    const getAllDeliveries = new GetDeliveriesUseCase();
    const deliveries = await getAllDeliveries.execute(id_person);

    return response.json(deliveries);
  }
}
