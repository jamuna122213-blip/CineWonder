# 🎬 CineWonder

### Discover Movies. Find Your Next Favorite.

CineWonder is a movie discovery web application that allows users to explore movies, search for their favorites, and organize movies they want to watch. Built with React and Tailwind CSS, CineWonder combines a modern dark-themed interface with a full-stack backend powered by Node.js, Express, and MongoDB.

The project focuses on providing a simple, responsive, and enjoyable movie-browsing experience.

---

## 📸 Screenshots

<!-- Add your project screenshots in the docs/screenshots/ directory. -->

### 🏠 Home Page

<!-- Replace the placeholder below with your home page screenshot. -->

![CineWonder Home Page](docs/screenshots/home.png)

### 🔐 Login Page

![CineWonder Login Page](docs/screenshots/login.png)

### 📝 Register Page

![CineWonder Register Page](docs/screenshots/register.png)

### 🎥 Movie Details

![CineWonder Movie Details](docs/screenshots/movie-details.png)

### ❤️ Watchlist

![CineWonder Watchlist](docs/screenshots/watchlist.png)

> **Note:** Replace these screenshot paths with your actual screenshots. Remove any sections for pages that are not implemented yet.

---

## ✨ Features

- 🎬 **Movie Discovery** — Browse and explore movies.
- 🔍 **Movie Search** — Find movies using the search functionality.
- 🗂️ **Category Filtering** — Explore movies by category.
- 🔐 **User Authentication** — Register and log in to your account.
- ❤️ **Personal Watchlist** — Keep track of movies you want to watch.
- 👤 **User Profile** — Access your personal profile.
- 📱 **Responsive Interface** — Designed for a comfortable browsing experience across different screen sizes.
- 🎨 **Modern UI** — Dark-themed design with purple accents, smooth styling, and the Fredoka font.

*Features may vary depending on the current implementation.*

---

## 🛠️ Tech Stack

### Frontend

- **React** — Component-based user interface.
- **Vite** — Fast development server and build tool.
- **Tailwind CSS v4** — Utility-first styling.
- **React Router DOM** — Client-side navigation.
- **Axios** — HTTP requests to the backend.

### Backend

- **Node.js** — JavaScript runtime.
- **Express.js** — Backend API and routing.
- **MongoDB** — NoSQL database.
- **Mongoose** — MongoDB object modeling.

### Tools & Deployment

- **Git & GitHub** — Version control and source code hosting.
- **Vercel** — Deployment platform.
- **MongoDB Atlas** — Cloud database hosting.

---

## 📁 Project Structure

```text
Cine_Wonder/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │   └── hero.png
│   │   ├── components/
│   │   │   ├── AuthLayout.jsx
│   │   │   ├── MoviePlayer.jsx
│   │   │   └── Navbar.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── Movie.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── movieRoutes.js
│   ├── .env
│   ├── .gitignore
│   ├── movies.json
│   ├── seedMovies.js
│   ├── server.js
│   └── package.json
│
├── docs/
│   └── screenshots/
│
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run CineWonder locally.

### 1. Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [Git](https://git-scm.com/)
- A MongoDB database, either local MongoDB or MongoDB Atlas.

### 2. Clone the Repository

```bash
git clone https://github.com/jamuna122213-blip/CineWonder.git
```

Navigate to the project directory:

```bash
cd CineWonder
```

### 3. Set Up the Backend

Navigate to the server directory:

```bash
cd server
```

Install the dependencies:

```bash
npm install
```

Create a `.env` file inside the `server/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB connection string.

**Important:** Never commit your `.env` file or expose your database credentials publicly.

Start the backend server:

```bash
node server.js
```

The backend should run on:

`http://localhost:5000`

### 4. Set Up the Frontend

Open a new terminal at the project root and navigate to the client directory:

```bash
cd client
```

Install the dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

`http://localhost:5173`

### 5. Verify the Application

- Confirm that the frontend opens successfully.
- Confirm that the backend server starts without errors.
- Verify that MongoDB connects successfully.
- Test the frontend features that are currently implemented.

---

## 🌐 Deployment

CineWonder is being deployed using Vercel.

### Frontend Deployment

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure the frontend project with `client` as the root directory if deploying the client separately.
4. Configure the required production environment variables.
5. Deploy the application and test the generated URL.

### Backend Deployment

The Express backend requires a server runtime. If deploying it separately, configure the backend service and its environment variables.

### MongoDB Atlas

For a cloud database:

1. Create a MongoDB Atlas cluster.
2. Create a database user.
3. Configure network access appropriately.
4. Add the MongoDB connection string to the backend deployment's environment variables.
5. Verify that the deployed backend can connect to the database.

**Deployment note:** Deploying the frontend does not automatically make a separately running Express server available online. Configure the frontend to send API requests to the deployed backend URL, and ensure that CORS settings allow the deployed frontend origin.

---

## 🔑 Environment Variables

Keep all credentials and private configuration values in environment variables.

### Backend — `server/.env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Add any other variables required by your authentication or backend code.

For production, configure environment variables in the hosting platform instead of relying on a local `.env` file.

Never publish database passwords, authentication secrets, or other private credentials in this repository.

---

## 🧠 What I Learned

Through CineWonder, I am exploring and practicing:

- Building reusable UI components with React.
- Managing frontend navigation with React Router.
- Styling applications with Tailwind CSS v4.
- Organizing a project into frontend and backend modules.
- Creating REST API endpoints using Express.js.
- Connecting MongoDB with Mongoose.
- Implementing user authentication and application state management.
- Using Git and GitHub for version control.
- Deploying a full-stack application and configuring production environments.

---

## 🔮 Future Improvements

- Expand the movie collection and category options.
- Improve movie filtering and search.
- Enhance movie detail pages.
- Improve watchlist management.
- Add smoother animations and loading states.
- Strengthen authentication and error handling.
- Improve accessibility and mobile responsiveness.
- Add more testing and performance optimizations.

---

## 🤝 Contributing

Suggestions and improvements are welcome.

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit your changes.
5. Open a pull request.

---

## 👨‍💻 Author

**Sri Sabari**

GitHub: [@jamuna122213-blip](https://github.com/jamuna122213-blip)

Project Repository: [CineWonder](https://github.com/jamuna122213-blip/CineWonder)

---

## 📄 License

This project is currently a personal learning project. A formal open-source license can be added when the project is ready for public distribution.

---

<p align="center">
  Made with ❤️ and code.
  <br />
  <strong>CineWonder — Your next favorite movie awaits!</strong>
</p>