import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import { routes } from "./routes";
import "express-async-errors"; // Make sure this is imported to handle async errors
import { PORT } from "./utils";

const app = express();

app.use(express.json());

// Register routes
app.use(routes);

/* This code snippet is defining an error handling middleware in an Express application written in
TypeScript. */
app.use(
  (
    err: unknown, // The error might not be an instance of 'Error'
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    // Ensure this middleware returns `void`
    if (err instanceof Error) {
      res.status(400).json({
        message: err.message,
      });
    } else {
      res.status(500).json({
        status: 500,
        message: "Internal server error",
      });
    }
  }
); // Register the error handler as the last middleware

app.listen(PORT, () => {
  console.log(`Running application on port ${PORT}`);
});
