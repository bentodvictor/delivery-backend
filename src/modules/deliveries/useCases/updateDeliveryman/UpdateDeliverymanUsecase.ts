import { prisma } from "../../../../database/prismaClient";

interface IUpdateDeliveryman {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateDeliverymanUsecase {
  async execute({ id_delivery, id_deliveryman }: IUpdateDeliveryman) {
    const updateResult = prisma.deliveries.update({
      where: {
        id: id_delivery,
      },
      data: {
        id_deliveryman,
      },
    });

    return updateResult;
  }
}
