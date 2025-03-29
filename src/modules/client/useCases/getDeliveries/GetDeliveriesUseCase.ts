import { prisma } from "../../../../database/prismaClient";

/* The GetDeliveriesUseCase class retrieves deliveries for a specific client using Prisma in
TypeScript. */
export class GetDeliveriesUseCase {
  async execute(id_client: string) {
    const deliveries = await prisma.client.findMany({
      where: {
        id: id_client,
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
