import { prisma } from "../../../../database/prismaClient";

interface IFinishDelivery {
  id_delivery: string;
  id_deliveryman: string;
}

/* The `FinishDeliveryUsecase` class updates the end time of a delivery in a database using Prisma. */
export class FinishDeliveryUsecase {
  async execute({ id_delivery, id_deliveryman }: IFinishDelivery) {
    const result = await prisma.deliveries.update({
      where: {
        id: id_delivery,
        id_deliveryman,
      },
      data: {
        end_at: new Date(),
      },
    });

    return result;
  }
}
