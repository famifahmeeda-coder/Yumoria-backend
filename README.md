# Yumoria Backend

This is the backend API for the Yumoria Recipe Sharing Platform.

The backend is built using Node.js, Express.js, and MongoDB. It provides APIs for recipes, user authentication, and AI-powered recipe suggestions.

## Features

- User registration and login
- Password hashing using bcryptjs
- JWT-based authentication
- Protected API routes
- Recipe management
- MongoDB database integration
- AI-powered recipe suggestions using Gemini API
- CORS support
- Environment variable configuration

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Google Gemini API
- dotenv
- CORS
- Nodemon

## Project Structure

```text
yumoria_backend/
│
├── config/
│   └── database configuration
│
├── controllers/
│   ├── aiController.js
│   └── userController.js
│
├── middlewares/
│   └── authentication middleware
│
├── models/
│   └── database models
│
├── routes/
│   ├── aiRoutes.js
│   ├── userRoutes.js
│   └── recipe routes
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## Installation

Clone the repository:

```bash
git clone https://github.com/famifahmeeda-coder/Yumoria-backend.git
```

Go to the project folder:

```bash
cd yumoria_backend
```

Install the required packages:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the backend root folder.

The project uses environment variables for sensitive information such as:

```text
PORT
MONGO_URI
JWT_SECRET
GEMINI_API_KEY
```

Do not share or upload the actual values of these variables.

The `.env` file is included in `.gitignore`.

## Running the Backend

Start the development server using:

```bash
npm run dev
```

The backend runs on:

```text
http://localhost:5000
```

## API Routes

### User Authentication

Register a new user:

```text
POST /api/users/register
```

Login:

```text
POST /api/users/login
```

### Recipe API

Recipe routes are available under:

```text
/api/recipes
```

These routes are used for managing recipe data.

### AI Recipe Suggestions

AI recipe suggestions are available through:

```text
POST /api/ai/suggestions
```

This route is protected and requires a valid JWT token.

The user provides ingredients and the Gemini API generates recipe suggestions.

## Authentication

The backend uses JSON Web Tokens (JWT) for authentication.

After successful login, the user receives a token.

Protected routes require the token in the Authorization header:

```text
Authorization: Bearer YOUR_TOKEN
```

## Database

MongoDB is used to store application data.

Mongoose is used to create models and communicate with the MongoDB database.

## AI Integration

The backend uses the Google Gemini API to generate recipe suggestions.

Users can provide ingredients, and the AI generates practical recipe ideas based on those ingredients.

## Testing

The backend APIs were tested using Postman.

The following features were tested:

- User registration
- User login
- JWT authentication
- Recipe API
- Protected routes
- AI recipe suggestions
- Unauthorized access to protected routes

## Development

Run the development server with:

```bash
npm run dev
```

Nodemon automatically restarts the server when backend files are changed.

## Author

Fathimath Fahmeeda

GitHub:

https://github.com/famifahmeeda-coder

## License

This project was created as part of a Full Stack Development course project.