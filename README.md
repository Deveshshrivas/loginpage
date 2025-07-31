# MERN Stack Login Application

A modern, full-stack authentication application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring a beautiful animated UI and secure user authentication.

## 🚀 Features

- **User Authentication**: Secure registration and login system
- **JWT Tokens**: JSON Web Token-based authentication
- **MongoDB Atlas**: Cloud database integration
- **Modern UI**: Beautiful animated interface with Styled Components
- **Responsive Design**: Mobile-friendly responsive layout
- **Protected Routes**: Route protection for authenticated users
- **Form Validation**: Client and server-side validation
- **Error Handling**: Comprehensive error handling and user feedback

## 🛠️ Tech Stack

### Frontend
- **React 18**: Modern React with hooks
- **Styled Components**: CSS-in-JS styling
- **Framer Motion**: Smooth animations and transitions
- **React Router**: Client-side routing
- **Axios**: HTTP client for API requests
- **React Icons**: Beautiful icon library

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database with Mongoose ODM
- **JWT**: JSON Web Tokens for authentication
- **bcryptjs**: Password hashing
- **CORS**: Cross-origin resource sharing

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)
- Git

### Clone the Repository
```bash
git clone <your-repo-url>
cd mern-login-app
```

### Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the server directory:
```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

### Frontend Setup
```bash
cd client
npm install
```

## 🚀 Running the Application

### Start the Backend Server
```bash
cd server
npm start
```
The server will run on `http://localhost:5000`

### Start the Frontend Development Server
```bash
cd client
npm start
```
The React app will run on `http://localhost:3000`

## 📁 Project Structure

```
mern-login-app/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── context/        # Context providers
│   │   ├── styles/         # Styled components
│   │   └── ...
│   └── package.json
├── server/                 # Express backend
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── server.js           # Entry point
│   └── package.json
└── README.md
```

## 🔐 API Endpoints

### Authentication Routes
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

## 🎨 UI Features

- **Gradient Backgrounds**: Beautiful gradient color schemes
- **Smooth Animations**: Framer Motion powered animations
- **Modern Forms**: Styled form inputs with hover effects
- **Responsive Layout**: Works on desktop and mobile devices
- **Loading States**: Visual feedback during API calls
- **Error Messages**: User-friendly error notifications

## 🔧 Configuration

### Environment Variables

#### Server (.env)
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=your_super_secret_jwt_key
PORT=5000
```

#### Client
The frontend is configured to communicate with the backend at `http://localhost:5000`

## 📱 Usage

1. **Registration**: Create a new account with name, email, and password
2. **Login**: Sign in with your credentials
3. **Dashboard**: Access the protected dashboard after authentication
4. **Logout**: End your session securely

## 🛡️ Security Features

- Password hashing with bcryptjs
- JWT token-based authentication
- Protected API routes
- Input validation and sanitization
- CORS configuration
- Environment variable protection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Built with ❤️ using the MERN stack

## 🐛 Issues

If you find any bugs or have feature requests, please create an issue in the GitHub repository.

## 🚀 Deployment

### Backend Deployment (Heroku/Railway/Render)
1. Set environment variables in your hosting platform
2. Deploy the `server` directory
3. Ensure MongoDB Atlas is configured for production

### Frontend Deployment (Netlify/Vercel)
1. Build the React app: `npm run build`
2. Deploy the `build` directory
3. Update API URLs for production

---

**Happy Coding! 🎉**
