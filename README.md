# BB Front-end

This is the front-end repository for https://sky-and-ski.onrender.com

- Make sure to set up the back-end server first by following the instructions in the [back-end README](https://github.com/Code-the-Dream-School/bb-practicum-team-4-back/blob/readme/README.md).

## Prerequisites

- Make sure you have [Node.js](https://nodejs.org/) installed on your system.

## Getting started

- Clone the repository.

```bash
git clone https://github.com/VadimDmitr/SkyAndSki.git
```

- Install dependencies.

```bash
cd SkyAndSki
npm install
```

- Build and run the project.

```bash
npm start
```

Navigate to `http://localhost:3000`

## User stories

- User should be able to
  - login or create an account
  - see a list of products
  - search for a product
  - add product to cart
- For MVP - the cart will not persist
- User should be able to checkout
- Checkout page takes shipping and billing info
- Payment information (?)
- Place order
- After an order is placed it automatically goes into “completed” status
- A logged in user is able to access order history
- User should not be able to access order history if not logged in
