# Nestora

Nestora is a full stack real estate marketplace built with the MERN stack. It allows users to browse properties, search for listings, create and manage their own properties, and view landlord contact information.

The project was built to gain practical experience with React, Node.js, Express, MongoDB, authentication, REST APIs, cloud image storage, and deployment.

## Live Demo

**Frontend:** https://nestora-pink.vercel.app

## System Architecture Overview

Nestora is built using a modern full stack JavaScript architecture with the following core technologies:

| Layer            | Technology              | Purpose                                               |
| ---------------- | ----------------------- | ----------------------------------------------------- |
| Frontend         | React.js + Vite         | User interface and frontend build tooling             |
| Styling          | Tailwind CSS            | Responsive and utility first styling                  |
| State Management | Redux Toolkit           | Managing global user and authentication state         |
| Backend          | Node.js + Express.js    | REST API server and application logic                 |
| Database         | MongoDB + Mongoose      | Document storage and database modeling                |
| Authentication   | JWT + bcryptjs          | Secure authentication and password hashing            |
| Google OAuth     | Firebase Authentication | Google sign in and authentication                     |
| File Storage     | Cloudinary              | Property and profile image storage                    |
| API Security     | HTTP only Cookies       | Secure JWT token storage and private route protection |
| Deployment       | Vercel                  | Frontend and backend production hosting               |
| Source Control   | Git + GitHub            | Version control and repository management             |

## Architecture

Nestora follows a client server architecture where the React frontend communicates with the Express backend through REST APIs.

```text
                    ┌──────────────────────┐
                    │      Nestora UI      │
                    │      React.js        │
                    │    Tailwind CSS      │
                    └──────────┬───────────┘
                               │
                               │ REST API
                               ▼
                    ┌──────────────────────┐
                    │    Express.js API    │
                    │      Node.js         │
                    └──────────┬───────────┘
                               │
                  ┌────────────┼────────────┐
                  │            │            │
                  ▼            ▼            ▼
             ┌─────────┐  ┌──────────┐  ┌───────────┐
             │ MongoDB │  │Cloudinary│  │  Firebase │
             │ Database│  │  Images  │  │   OAuth   │
             └─────────┘  └──────────┘  └───────────┘
```

## Features

### User Authentication

Nestora provides user authentication using JWT and HTTP only cookies. Google authentication is implemented using Firebase Authentication.

Users can:

* Sign up and sign in
* Sign in with Google
* Update their profile
* Update their password
* Delete their account
* Sign out

### Property Listings

Authenticated users can create and manage their own property listings.

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

Users can search and explore available properties using different search options and filters.

### User Listings

Users have a private profile page where they can view and manage their own property listings.

### Contact Information

Property owners can provide their phone number and email address when creating a listing.

Visitors can view the available contact information directly on the listing page.

### Responsive Design

The frontend is built with React and Tailwind CSS and is designed to work across different screen sizes.

## Image Handling

Nestora uses Cloudinary to store property and profile images.

Images are uploaded from the frontend to Cloudinary. Cloudinary returns a secure image URL, which is then stored with the listing data in MongoDB.

```text
React Frontend
      │
      │ Upload Image
      ▼
Cloudinary
      │
      │ Secure Image URL
      ▼
React Frontend
      │
      │ Save URL
      ▼
MongoDB
```

This keeps image files out of the MongoDB database and stores only their URLs with the relevant listing data.

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

Nestora is deployed using Vercel, with the frontend and backend deployed separately.

### Frontend

```text
React + Vite
      │
      ▼
   Vercel
      │
      ▼
nestora-pink.vercel.app
```

### Backend

```text
Node.js + Express
        │
        ▼
     Vercel
        │
        ▼
nestora2.vercel.app
```

The GitHub repository is connected to Vercel for continuous deployment. Changes pushed to the configured GitHub branch can automatically trigger a new build and deployment.


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

