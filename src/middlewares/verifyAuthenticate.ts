import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { JWT_SECRET_CLIENT, JWT_SECRET_DELIVERYMAN } from "../utils";

interface IPayload {
  sub: string;
}

/**
 * The function `verifyAuthenticate` is used to verify and authenticate a user's token based on the
 * request headers and URL.
 * @param {Request} request - The `request` parameter in the `verifyAuthenticate` function represents
 * the incoming HTTP request object. It contains information about the request made by the client, such
 * as headers, body, URL, and other relevant data.
 * @param {Response} response - The `response` parameter in the `verifyAuthenticate` function is used
 * to send a response back to the client making the request. It is an instance of the `Response` class,
 * which is typically used to set the HTTP status code, headers, and body of the response that will be
 * sent back
 * @param {NextFunction} next - The `next` parameter in the `verifyAuthenticate` function is a function
 * that is called to pass control to the next middleware function in the stack. It is typically used to
 * move to the next middleware function in the chain. In this context, `next()` is called after the
 * authentication verification is successful
 */
export async function verifyAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authorizaton: string = request.headers.authorization;
  const url: string = request.originalUrl;

  if (!authorizaton) {
    response.status(401).json({ message: "Token missing." });
  }

  // Bearer token
  const [_, token] = authorizaton.split(" ");

  const secret = url.includes("deliveryman")
    ? JWT_SECRET_DELIVERYMAN
    : JWT_SECRET_CLIENT;

  try {
    const { sub } = verify(token, secret) as IPayload;
    request.id_person = sub;

    next();
  } catch (err) {
    response.status(401).json({
      MessageChannel: "Invalid Token",
    });
  }
}
