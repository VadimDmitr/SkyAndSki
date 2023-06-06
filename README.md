# BB Front-end

This is the front-end repository for https://sky-and-ski.onrender.com project.

- Make sure to set up the back-end server first by following the instructions in the [back-end README](https://github.com/Code-the-Dream-School/bb-practicum-team-4-back/blob/dev/README.md).

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

# Website User Story

## Homepage and Logo
When accessing the website, a logo is visible at the top of the page, which can always be clicked on to return to the homepage.

## About Section
Clicking on "About" leads to a section providing more information about our store. Pop-up text appears when hovering the cursor over a title or picture, making the site more interactive.

## Shop Section
Clicking on "Shop" navigates to the catalog where shopping can be started immediately.

## Contact Section
In the "Contact" section, our office address and a map are provided to assist with locating us. 

## Header Color Changes
As different sections are visited, the header color changes to red to signify a new section.

## Shop Now Button
The "Shop Now" button redirects to the shopping catalog for quick access.

## Our Gallery Section
In the "Our Gallery" section, pictures pop up and move.

## Mobile Version Gallery Section
In the mobile version, a carousel changes pictures every 3 seconds, or the user can manually select different pictures.

## Partners Section
A section is dedicated to showcasing company logos of our partners. 

## Why Choose Us Section
In the "Why Choose Us" section, a pop-up picture and link provide reasons why many people choose us. Expanding pictures are also added for more interactivity.

## Our Video Section
The "Our Video" section features a video specifically made for this project that showcases our logos and our happy customers.

## Map and Location
Before reaching the footer, a map displays the location of our physical store.

## Footer Section
The footer includes a subscription field for newsletters, company information, customer support links, and social media icons.

## Responsiveness
The website is fully responsive and compatible with all mobile devices.

- For back-end side user should be able to
  - login and create an account
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
