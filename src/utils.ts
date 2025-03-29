require("dotenv").config();

const { JWT_SECRET_CLIENT, JWT_SECRET_DELIVERYMAN, PORT } = process.env;

export { JWT_SECRET_CLIENT, JWT_SECRET_DELIVERYMAN, PORT };
