import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateClient {
  username: string;
  password: string;
}

/* The `CreateClientUseCase` class in TypeScript checks if a client already exists, hashes the
password, and creates a new client if it doesn't exist. */
export class CreateClientUseCase {
  async execute({ password, username }: ICreateClient) {
    const clientExists = await prisma.client.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (clientExists) {
      throw new Error("Client already exists");
    }

    const hashPassword = await hash(password, 10);
    const client = await prisma.client.create({
      data: {
        username,
        password: hashPassword,
      },
    });
    console.log({ client });
    return client;
  }
}
