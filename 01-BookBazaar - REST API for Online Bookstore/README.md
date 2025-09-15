# 📚 BookBazaar - REST API for Online Bookstore

A comprehensive backend API for an online bookstore that allows users to browse, purchase, and review books. Built with Node.js, Express, and modern backend practices.

## 🚀 Features

- **User Authentication** - JWT-based registration and login system
- **Book Management** - Full CRUD operations with admin controls
- **Review System** - Users can add and manage book reviews
- **Order Processing** - Complete order management system
- **Admin Controls** - Role-based access for book management

## 📁 Project Structure

```
01-BOOKBAZAAR - REST API FOR/
├── 📦 node_modules/
├── 📂 Postman collection/
│   ├── BookBazaar.postman_collection.json
├── 📂 src/
│   ├── 📂 config/
│   ├── 📂 controllers/
│   │   ├── auth.controller.js
│   │   ├── books.controller.js
│   │   ├── order.controller.js
│   │   └── review.controller.js
│   ├── 📂 middlewares/
│   │   └── auth.middleware.js
│   ├── 📂 models/
│   │   ├── Book.model.js
│   │   ├── Orders.model.js
│   │   ├── Review.model.js
│   │   └── User.model.js
│   ├── 📂 routes/
│   │   ├── auth.route.js
│   │   ├── books.route.js
│   │   └── order.route.js
│   └── 📂 services/
│       └── auth.service.js
├── 📂 utils/
│   ├── api-error.js
│   └── api-response.js
├── 📄 app.js
├── 📄 index.js
├── 📄 .env
├── 📄 .env.example
├── 📄 .gitignore
├── 📄 package.json
└── 📄 package-lock.json
```

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Environment**: dotenv
- **Development**: Nodemon

## ⚡ Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/bookbazaar-api.git
   cd bookbazaar-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment setup**

   ```bash
   cp .env.example .env
   ```

   Update `.env` with your configuration:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/bookbazaar
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRES_IN=7d
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   ```

4. **Start the server**

   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

The API will be available at `http://localhost:3000`

## 🔗 API Endpoints

### 🔐 Authentication Routes

| Method | Endpoint         | Description       | Access  |
| ------ | ---------------- | ----------------- | ------- |
| POST   | `/auth/register` | Register new user | Public  |
| POST   | `/auth/login`    | User login        | Public  |
| GET    | `/auth/me`       | Get user profile  | Private |

### 📚 Book Routes

| Method | Endpoint     | Description                   | Access |
| ------ | ------------ | ----------------------------- | ------ |
| POST   | `/books`     | Add new book                  | Admin  |
| GET    | `/books`     | List all books (with filters) | Public |
| GET    | `/books/:id` | Get book details              | Public |
| PUT    | `/books/:id` | Update book                   | Admin  |
| DELETE | `/books/:id` | Delete book                   | Admin  |

### ✍️ Review Routes

| Method | Endpoint                 | Description        | Access      |
| ------ | ------------------------ | ------------------ | ----------- |
| POST   | `/books/:bookId/reviews` | Add review to book | Private     |
| GET    | `/books/:bookId/reviews` | Get book reviews   | Public      |
| DELETE | `/reviews/:id`           | Delete review      | Owner/Admin |

### 🛒 Order Routes

| Method | Endpoint      | Description                 | Access      |
| ------ | ------------- | --------------------------- | ----------- |
| POST   | `/orders`     | Create new order            | Private     |
| GET    | `/orders`     | Get user's orders           | Private     |
| GET    | `/orders/all` | Get all orders (admin view) | Admin       |
| GET    | `/orders/:id` | Get order details           | Owner/Admin |

## 🧪 Testing

### Using Postman

1. Import the provided [Postman collection](./Postman%20collection/BookBazaar.postman_collection.json)
2. Set up environment variables:
   - `base_url`: http://localhost:3000
   - `auth_token`: (will be set automatically after login)

### Sample Test Flow

1. Register a new user
2. Login to get JWT token
3. Browse books
4. Add books to cart
5. Place an order
6. Add a review

## 📦 Dependencies

### Core Dependencies

```json
{
  "express": "^4.18.2",
  "mongoose": "^7.5.0",
  "jsonwebtoken": "^9.0.2",
  "bcryptjs": "^2.4.3",
  "dotenv": "^16.3.1",
  "cors": "^2.8.5"
}
```

## 🔧 Development

### Available Scripts

```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm run test       # Run tests (if implemented)
npm run lint       # Run ESLint
```

### Code Style

- Use ES6+ features
- Follow RESTful API conventions
- Implement proper error handling
- Use middleware for common functionality
- Maintain consistent response format

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

If you have any questions or need help with setup, please open an issue in the GitHub repository.

---

**Built with ❤️ by [Aniket Dey](https://aniketdey.vercel.app/)**
- [**Portfolio**](https://aniketdey.vercel.app/)
- [**GitHub**](https://github.com/AniketDey06)
