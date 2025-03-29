import { Request, Response } from "express";
import { FinishDeliveryUsecase } from "./FinishDeliveryUseCase";

/* The `FinishDeliveryController` class handles finishing a delivery by calling the
`FinishDeliveryUsecase` and returning the result in a JSON response. */
export class FinishDeliveryController {
  async handle(request: Request, response: Response) {
    const { id_person } = request;
    const { id: id_delivery } = request.params;

    const finishDeliveryUseCase = new FinishDeliveryUsecase();
    const result = await finishDeliveryUseCase.execute({
      id_delivery,
      id_deliveryman: id_person,
    });

    return response.json(result);
  }
}
