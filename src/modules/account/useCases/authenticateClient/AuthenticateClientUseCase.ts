import { compare } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";
import { sign } from "jsonwebtoken";
import { JWT_SECRET_CLIENT } from "../../../../utils";

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.client.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error("Username or Password invalid!");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or Password invalid");
    }

    const token = sign({ username }, JWT_SECRET_CLIENT, {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}
