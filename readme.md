# Node.js Ecommerce API

## Overview

This project is an ecommerce platform API built using Node.js and MongoDB. It provides functionality for managing product inventory, including adding products, listing products, deleting products, and updating product quantities. This beginner-level API is designed for ecommerce platform administrators to interact with the product data.

## Installation

To run this project locally, follow these steps:

1. Clone the GitHub repository.
   `git clone https://github.com/your-username/Ecommerce_Api.git`
2. Navigate to the project directory.
   `cd Ecommerce_Api`
3. Install the project dependencies. Make sure you have Node.js and npm installed.
   `npm install`
4. Set up your MongoDB database and update the connection URL in `config/db.js`.

## Usage

To start the server, run the following command:
`node app.js`

The API will be accessible at `http://localhost:3000`.

## Endpoints:

- **Add a Product**

  - URL: `/products/create` (POST)
  - **Request**:
    ` { "name": "laptop", "quantity": 10 }`
  - **Response**:
    `{ "product": { "name": "laptop", "quantity": 10 } }`

- **List Products**

  - URL: `/products` (GET)
  - **Response**:
    `{ "products": [ { "id": 1, "name": "laptop", "quantity": 10 }, { "id": 2, "name": "camera", "quantity": 5 }, { "id": 3, "name": "smartwatch", "quantity": 8 } ] }`

- **Delete a Product**

  - URL: `/products/:id` (DELETE)
  - **Response**:
    `{"message": "Product deleted"}`

- **Update Product Quantity**

  - URL: `/products/:id/update_quantity/?number=10` (POST)
  - **Response**:
    `{ "product": { "id": 1, "name": "laptop", "quantity": 20 }, "message": "Updated successfully" }`

## Project Structure

The project is structured as follows:

- `controllers/`: Contains controller logic for handling API requests.
- `models/`: Defines the MongoDB schema for products.
- `routes/`: Defines API routes and endpoints.
- `config/`: Manages database configuration.
- `app.js`: The main application file.
- `package.` and `package-lock.`: Define project dependencies.
- `README.md`: This documentation.

## Dependencies

- Express.js: Web application framework for the server.
- Mongoose: Library for MongoDB connection and data modeling.
- Body-parser: Middleware for parsing data from requests.
- MongoDB: Database used for storing product data.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or create a pull request on GitHub.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
