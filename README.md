# E-Commerce React App with Firebase

## Description
This is a fully functional e-commerce web application built using React and Firebase. It offers features such as user authentication (sign-in/sign-up), browsing and filtering products, adding items to the cart, and placing orders. The app uses Firebase for real-time database management and authentication, ensuring a seamless user experience.

## Features
- **User Authentication**: Sign up and sign in using Firebase Authentication.
- **Product Listing**: View all available products with detailed descriptions.
- **Product Filtering**: Filter products based on categories, price, or other attributes.
- **Add to Cart**: Add items to a cart for purchase.
- **Cart Management**: View, update, or remove items from the cart.
- **Order Placement**: Place orders directly from the cart.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used
- **Frontend**: React, CSS
- **Backend**: Firebase Realtime Database
- **Authentication**: Firebase Authentication
- **Hosting**: Netlify

## Installation
Follow these steps to set up and run the project locally:

1. Clone the repository:
   ```bash
   git clone <https://github.com/bharatlal124/Busy-buy-Project>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-folder>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a Firebase project and set up a Realtime Database and Authentication.

5. Add Firebase configuration to the project:
   - Create a `.env` file in the root directory.
   - Add the Firebase configuration keys:
     ```env
     REACT_APP_API_KEY=your-api-key
     REACT_APP_AUTH_DOMAIN=your-auth-domain
     REACT_APP_DATABASE_URL=your-database-url
     REACT_APP_PROJECT_ID=your-project-id
     REACT_APP_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_APP_ID=your-app-id
     ```

6. Start the development server:
   ```bash
   npm start
   ```

7. Open your browser and navigate to `http://localhost:3000`.

## Deployment
The app is deployed on Netlify. To deploy your own version:
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `build` folder to Netlify.

## Screenshots
_Add screenshots of your app here to showcase its features._

 
