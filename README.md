# Nestora

Nestora is a full stack real estate marketplace built using the MERN stack. It allows users to browse properties, search for listings, create and manage their own properties, and contact landlords.

The project was built to gain practical experience with React, Node.js, Express, MongoDB, authentication, REST APIs, cloud image storage, and deployment.

## Live Demo

https://nestora-pink.vercel.app

## Features

### User Authentication

Users can create an account and sign in using their email and password.

The application uses JWT authentication with HTTP only cookies to protect private routes. Google sign in is also implemented using Firebase Authentication.

Users can:

* Sign up and sign in
* Sign in with Google
* Update their profile
* Update their password
* Delete their account
* Sign out

### Property Listings

Authenticated users can create and manage property listings.

Each listing can include:

* Property name
* Description
* Address
* Property type
* Bedrooms
* Bathrooms
* Parking availability
* Furnished status
* Regular price
* Discounted price
* Property images
* Contact information

Users can create, update, and delete their own listings.

### Search

Users can search for properties using the search functionality.

The search page allows users to explore available properties based on different listing options and filters.

### Image Uploads

Cloudinary is used to handle property and profile images.

Users can upload multiple images when creating a listing. The uploaded image URLs are stored with the listing data in MongoDB.

### User Listings

Users have a private profile page where they can view their own listings and manage them.

### Responsive Design

The frontend is built with React and Tailwind CSS and is designed to work across different screen sizes.

## Technologies Used

### Frontend

* React.js
* Redux Toolkit
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* cookie-parser

### Services

* Firebase Authentication for Google OAuth
* Cloudinary for image storage
* Vercel for deployment
* GitHub for source control and version management

## Project Structure

```text
Nestora/
├── client/
│   ├── dist/
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── assets/
│   │   │   └── default_house.jpeg
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── ListingItem.jsx
│   │   │   ├── OAuth.jsx
│   │   │   └── PrivateRoute.jsx
│   │   ├── firebase.js
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── CreateListing.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Listing.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Search.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── SignUp.jsx
│   │   │   └── UpdateListing.jsx
│   │   └── redux/
│   │       ├── store.js
│   │       └── user/
│   │           └── userSlice.js
│   └── vite.config.js
├── package.json
├── package-lock.json
├── server/
│   └── src/
│       ├── app.js
│       ├── config/
│       │   └── database.js
│       ├── controllers/
│       │   ├── auth.controller.js
│       │   ├── listing.controller.js
│       │   └── user.controller.js
│       ├── index.js
│       ├── models/
│       │   ├── listing.model.js
│       │   └── user.model.js
│       ├── routes/
│       │   ├── auth.route.js
│       │   ├── listing.route.js
│       │   └── user.route.js
│       └── Utils/
│           ├── error.js
│           └── verifyUser.js
└── vercel.json
```

## API Routes

### Authentication

```text
POST /api/auth/signup
POST /api/auth/signin
POST /api/auth/google
GET  /api/auth/signout
```

### User

```text
POST   /api/user/update/:id
DELETE /api/user/delete/:id
GET    /api/user/listings/:id
```

### Listings

```text
POST   /api/listing/create
GET    /api/listing/get/:id
POST   /api/listing/update/:id
DELETE /api/listing/delete/:id
GET    /api/listing/search
```

## Deployment

The Nestora frontend and backend are deployed using Vercel.

The application uses environment variables for sensitive configuration such as:

* MongoDB connection string
* JWT secret
* Cloudinary credentials
* Firebase configuration
* Frontend API URL

## Future Improvements

Some features I would like to add in the future include:

* Favorites and saved properties
* Property reviews and ratings
* Map based property search
* Real time messaging
* Email notifications
* Admin dashboard
* More advanced search filters

## Author

### Areeba Waqar

