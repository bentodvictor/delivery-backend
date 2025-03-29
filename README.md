# A Small Delivery Backend

This collection contains API requests used for managing deliveries and users. It is structured with different categories of requests such as "Deliveries," "Client," and "Deliveryman."

## `.env` File Example
```env
PORT=3000
DATABASE_URL="postgresql://usr:pass@localhost:5432/deliveries?schema=public"
JWT_SECRET_CLIENT="your_client_secret"
JWT_SECRET_DELIVERYMAN="your_deliveryman_secret"
```

## Endpoints

### 😋 Client

#### Create Client

- **URL:** `your_server`/client/
- **Method:** POST
- **Body:**
  ```json
  {
    "username": "John Due",
    "password": "batatinhafrita123"
  }
  ```

#### Authenticate
- **URL:** `your_server`/client/authenticate
- **Method:** POST
- **Body:**
  ```json
  {
    "username": "John Due",
    "password": "batatinhafrita123"
  }
  ```

#### Create Delivery
- **URL:** `your_server`/client/delivery
- **Method:** POST
- **Body:**
  ```json
  {
    "item_name": "Lunch 01"
  }
  ```
- **Authentication:** Bearer `client_token`

#### List Deliveries
- **URL:** `your_server`/client/deliveries
- **Method:** GET
- **Authentication:** Bearer `client_token`

### 🛵 Deliveryman

#### Create Deliveryman

- **URL:** `your_server`/deliveryman
- **Method:** POST
- **Body:**
  ```json
  {
    "username": "Klebinho",
    "password": "batatinhafrita123"
  }
  ```

#### Authenticate Deliveryman
- **URL:** `your_server`/deliveryman/authenticate
- **Method:** POST
- **Body:**
  ```json
  {
    "username": "Klebinho",
    "password": "batatinhafrita123"
  }
  ```

#### Catch Delivery
- **URL:** `your_server`/deliveryman/delivery/`delivery_id`
- **Method:** PUT
- **Authentication:** Bearer `deliveryman_token`

#### List Deliveryman Deliveries
- **URL:** `{your_server`/deliveryman/deliveries
- **Method:** GET
- **Authentication:** Bearer `deliveryman_token`

#### Finish Delivery
- **URL:** `your_server`/deliveryman/delivery/`delivery_id`/finish
- **Method:** PUT
- **Authentication:** Bearer `deliveryman_token`

### 🚚 Deliveries

#### Get Available Deliveries
- **URL:** `your_server`/delivery/available
- **Method:** GET
- **Authentication:** Bearer `deliveryman_token`