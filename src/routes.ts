import { request, Router } from "express";
import { CreateClientController } from "./modules/client/useCases/createClient/CreateClientController";
import { AuthenticateClientController } from "./modules/account/useCases/authenticateClient/AuthenticateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { AuthenticateDeliverymanController } from "./modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { verifyAuthenticate } from "./middlewares/verifyAuthenticate";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { GetDeliveriesController } from "./modules/client/useCases/getDeliveries/GetDeliveriesController";
import { GetDeliveriesController as GetDeliveriesController_D } from "./modules/deliveryman/useCases/getDeliveries/GetDeliveriesController";
import { FinishDeliveryController } from "./modules/deliveryman/useCases/finishDelivery/FinishDeliveryController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const deliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const getDeliveriesController = new GetDeliveriesController();
const getDeliveriesController_D = new GetDeliveriesController_D();
const finishDeliveryController = new FinishDeliveryController();

/* These lines of code are defining routes for handling client-related operations in an Express
application. Here's a breakdown of what each route is doing: */
routes.post("/client", async (request, response) => {
  await createClientController.handle(request, response);
});
routes.post("/client/authenticate", async (request, response) => {
  await authenticateClientController.handle(request, response);
});
routes.post(
  "/client/delivery",
  verifyAuthenticate,
  async (request, response) => {
    await deliveryController.handle(request, response);
  }
);
routes.get(
  "/client/deliveries",
  verifyAuthenticate,
  async (request, response) => {
    getDeliveriesController.handle(request, response);
  }
);

/* This specific route `routes.get("/delivery/available", async (request, response) => {
findAllAvailableController.handle(request, response); });` is handling a GET request to the
"/delivery/available" endpoint in the Express application. */
routes.get("/delivery/available", async (request, response) => {
  findAllAvailableController.handle(request, response);
});

/* These routes are handling operations related to deliverymen in the Express application. Here's a
breakdown of what each route is doing: */
routes.post("/deliveryman", async (request, response) => {
  await createDeliverymanController.handle(request, response);
});
routes.post("/deliveryman/authenticate", async (request, response) => {
  await authenticateDeliverymanController.handle(request, response);
});
routes.put(
  "/deliveryman/delivery/:id",
  verifyAuthenticate,
  async (request, response) => {
    await updateDeliverymanController.handle(request, response);
  }
);
routes.put(
  "/deliveryman/delivery/:id/finish",
  verifyAuthenticate,
  async (request, response) => {
    await finishDeliveryController.handle(request, response);
  }
);
routes.get(
  "/deliveryman/deliveries",
  verifyAuthenticate,
  async (request, response) => {
    getDeliveriesController_D.handle(request, response);
  }
);

export { routes };
