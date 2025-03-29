import { compare } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";
import { sign } from "jsonwebtoken";
import { JWT_SECRET_DELIVERYMAN } from "../../../../utils";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

/* The `AuthenticateDeliverymanUseCase` class handles authentication for deliverymen by verifying their
username and password and generating a JWT token upon successful authentication. */
export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (!deliveryman) {
      throw new Error("Username or Password invalid!");
    }

    const passwordMatch = compare(password, deliveryman.password);
    if (!passwordMatch) {
      throw new Error("Username or Password invalid!");
    }

    const token = sign({ username }, JWT_SECRET_DELIVERYMAN, {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return token;
  }
}
