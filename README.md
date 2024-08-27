

---

# MERN Stack Application

## Overview

This project is a full-stack web application built using the MERN stack. The application includes user authentication, integration with Google Sign-In, and filtering and displaying LinkedIn profiles. The main technologies used are:

- **MongoDB:** A NoSQL database to store user information, profile filters, and potentially cache LinkedIn profile details.
- **Express.js:** A backend framework to handle HTTP requests, routes, and interactions with MongoDB.
- **React.js:** A frontend library to build the user interface.
- **Node.js:** A JavaScript runtime environment to run the backend server.

## Features Implementation

### 1. Sign in/Sign up Options

#### Backend (Node.js + Express.js + MongoDB):
- **API Endpoints:** Created for user registration and authentication.
- **User Credentials:** Stored securely in MongoDB with hashed passwords using `bcrypt`.
- **Session Management:** Managed using JSON Web Tokens (JWT) for authentication.

#### Frontend (React.js):
- **Forms:** Created for sign-up and sign-in using React components.
- **HTTP Requests:** Handled using Axios or Fetch API to communicate with backend endpoints.
- **Form Validation:** Implemented client-side validation for forms.

### 2. Sign in/Sign up with Google

#### Backend:
- **OAuth 2.0 Authentication:** Implemented using Passport.js with Google Strategy.
- **User Data:** Retrieved from Google and stored in MongoDB.

#### Frontend:
- **Google Sign-In Button:** Added to allow users to sign in with Google.
- **Google Authentication:** Handled using the Google Sign-In JavaScript library.
- **User Session:** Once authenticated, the Google access token is sent to the server to validate and create a user session.

### 3. Filter and Display LinkedIn Profile

#### Frontend:
- **Dropdown Menus:** Created a page with three dropdown menus (college, degree, company) using React components.
- **Data Fetching:** Fetched data for dropdown options dynamically.
- **State Management:** Used React's `useState` and `useEffect` to handle dropdown changes and store selected values.
- **Filter Submission:** Added a button to submit selected filters.

#### Backend:
- **API Endpoint:** Implemented to receive filter selections from the frontend.
- **LinkedIn Profile Query:** Used selected filters to query LinkedIn profiles.
- **Data Return:** Returned LinkedIn profile data to the frontend for display.

#### Integration with LinkedIn API/Scraping:
- **LinkedIn API:** If using LinkedIn's API, obtain API access by registering your application with LinkedIn Developer Platform. Use the API to search for profiles based on selected filters.

## Additional Considerations

### 1. Security
- Implemented HTTPS.
- Used `bcrypt` for password hashing.
- Validated and sanitized user input to prevent SQL injection and XSS attacks.

### 2. Error Handling
- Implemented robust error handling on both the frontend and backend to provide a smooth user experience.

### 3. State Management
- Considered using Redux or Context API for global state management in React, especially if the app grows in complexity.

## Installation and Setup

### Prerequisites
- Node.js
- MongoDB
- npm (Node Package Manager)

### Backend Setup
1. Clone the repository.
2. Navigate to the backend directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file for environment variables:
   ```bash
   PORT=<Your Port>
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   GOOGLE_CLIENT_ID=<Your Google Client ID>
   GOOGLE_CLIENT_SECRET=<Your Google Client Secret>
   ```
5. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Navigate to `http://localhost:<Your Port>` in your browser.
2. Sign up or sign in using email/password or Google.
3. Use the filter options to search for LinkedIn profiles.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.



---


