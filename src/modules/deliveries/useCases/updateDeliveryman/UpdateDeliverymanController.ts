import { Request, Response } from "express";
import { UpdateDeliverymanUsecase } from "./UpdateDeliverymanUsecase";

export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_person } = request;
    const { id: id_delivery } = request.params;

    const updateDeliverymanUseCase = new UpdateDeliverymanUsecase();
    const delivery = await updateDeliverymanUseCase.execute({
      id_delivery,
      id_deliveryman: id_person,
    });

    return response.json(delivery);
  }
}
