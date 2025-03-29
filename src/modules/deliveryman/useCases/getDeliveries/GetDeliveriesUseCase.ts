import { prisma } from "../../../../database/prismaClient";

/* The GetDeliveriesUseCase class retrieves deliveries for a specific deliveryman using Prisma. */
export class GetDeliveriesUseCase {
  async execute(id_deliveryman) {
    const deliveries = await prisma.deliveryman.findMany({
      where: {
        id: id_deliveryman,
      },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });

    return deliveries;
  }
}
