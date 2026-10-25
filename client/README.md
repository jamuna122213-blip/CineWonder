# 🎬 CineWonder

### Discover Movies. Find Your Next Favorite.

CineWonder is a full-stack movie discovery web application built to make exploring movies simple and enjoyable. Users can browse movies, search for favorites, filter by category, and organize movies they want to watch.

Built with React, Tailwind CSS, Node.js, Express, and MongoDB, CineWonder combines a modern dark-themed interface with a full-stack architecture.

🌐 **Live Website:** [CineWonder](https://cine-wonder.vercel.app/)

📦 **GitHub Repository:** [CineWonder on GitHub](https://github.com/jamuna122213-blip/CineWonder)

---

## 📸 Screenshots


### 🏠 Home Page
![CineWonder Home Page](../images/home.png)

### 🔐 Login Page

![CineWonder Login Page](../images/login.png)

### 📝 Register Page

![CineWonder Register Page](../images/register.png)

### 🎥 Movie Listening
![CineWonder Movie Listing](../images/movies.png)

### ❤️ Watchlist

![CineWonder Watchlist](../images/wishlist.png)


---

## ✨ Features

- 🎬 **Movie Discovery** — Browse and explore available movies.
- 🔍 **Movie Search** — Find movies using search functionality.
- 🗂️ **Category Filtering** — Explore movies by category.
- 🔐 **User Authentication** — Register and log in.
- ❤️ **Personal Watchlist** — Organize movies you want to watch.
- 👤 **User Profile** — Access the profile interface.
- 📱 **Responsive UI** — Designed for a comfortable browsing experience across screen sizes.
- 🎨 **Modern Design** — Dark theme, purple accents, and the Fredoka font.


---

## 🛠️ Tech Stack

### Frontend
- **React** — Component-based user interface.
- **Vite** — Development server and build tool.
- **Tailwind CSS v4** — Utility-first styling.
- **React Router DOM** — Client-side navigation.
- **Axios** — HTTP requests.

### Backend
- **Node.js** — JavaScript runtime.
- **Express.js** — Backend API and routing.
- **MongoDB** — NoSQL database.
- **Mongoose** — MongoDB object modeling.

### Tools and Deployment
- **Git & GitHub** — Version control and source code hosting.
- **Vercel** — Frontend and backend deployment.
- **MongoDB Atlas** — Cloud database hosting.

---

## 📁 Project Structure

```text
CineWonder/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vercel.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── models/
│   ├── routes/
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

### Prerequisites

Install the following tools:

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)
- MongoDB locally or a MongoDB Atlas account.

### 1. Clone the Repository

```bash
git clone https://github.com/jamuna122213-blip/CineWonder.git
cd CineWonder
```

### 2. Set Up the Backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace the placeholder with your own MongoDB connection string.

Start the backend:

```bash
node server.js
```

The local backend is expected to run at `http://localhost:5000`.

### 3. Set Up the Frontend

Open a second terminal at the project root:

```bash
cd client
npm install
npm run dev
```

Open the local URL displayed by Vite, usually `http://localhost:5173`.

### 4. Verify the Application

- Confirm the frontend loads.
- Confirm the backend starts successfully.
- Confirm the MongoDB connection works.
- Test the implemented pages and API features.

> **Security:** Never commit your `.env` file or expose database credentials in your repository.

---

## 🌐 Deployment

### Frontend

The CineWonder frontend is deployed on Vercel.

🔗 **Live Website:** [https://cine-wonder.vercel.app/](https://cine-wonder.vercel.app/)

### Backend

The Express backend is deployed separately.

🔗 **Backend URL:** [https://cine-wonder-wsry.vercel.app/](https://cine-wonder-wsry.vercel.app/)

### Database

MongoDB Atlas is used to host the cloud database. The backend connects to Atlas through the `MONGO_URI` environment variable.

Production deployments require the correct environment variables, database credentials, API configuration, and CORS settings.

---

## 💡 My Deployment Journey

One of the most valuable parts of building CineWonder was deploying it for the first time.

I was new to deploying full-stack applications using **Vercel and MongoDB Atlas**. Although the application worked locally, getting everything running in production introduced a completely different set of challenges.

I spent around **3–4 hours troubleshooting deployment errors**, checking logs, correcting configuration, and understanding how the frontend, backend, and cloud database communicate with each other.

Some of the challenges I worked through included:

- Deploying the frontend and backend separately.
- Configuring environment variables for production.
- Connecting the Express backend to MongoDB Atlas.
- Troubleshooting MongoDB authentication failures.
- Understanding Vercel runtime errors through deployment logs.
- Fixing React Router refresh issues using Vercel rewrites.
- Learning the importance of configuring production API URLs and CORS.

The process taught me that building an application is only one part of full-stack development. Deploying it, debugging production issues, and connecting different services are equally important skills.

**The biggest lesson:** Errors are part of development. Reading logs, understanding the root cause, and fixing problems step by step helped me learn much more than simply getting the application to run.

---

## 🧠 What I Learned

Through CineWonder, I am learning and practicing:

- Building reusable components with React.
- Managing navigation with React Router.
- Styling applications using Tailwind CSS v4.
- Creating REST APIs with Express.js.
- Connecting MongoDB with Mongoose.
- Managing frontend state and authentication flows.
- Using Git and GitHub for version control.
- Deploying applications using Vercel.
- Connecting a backend to a cloud database with MongoDB Atlas.
- Debugging deployment and configuration errors.

---

## 🔮 Future Improvements

- Expand the movie collection and category options.
- Improve search and filtering.
- Enhance movie detail pages.
- Improve watchlist management.
- Add smoother animations and loading states.
- Strengthen authentication and error handling.
- Improve accessibility and mobile responsiveness.
- Add automated tests and performance optimizations.

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



- GitHub: [@jamuna122213-blip](https://github.com/jamuna122213-blip)
- Project: [CineWonder Repository](https://github.com/jamuna122213-blip/CineWonder)
- Live Website: [CineWonder](https://cine-wonder.vercel.app/)

---

## 📄 License

This is currently a personal learning project. A formal open-source license can be added when the project is ready for public distribution.

---

<p align="center">
  Made with ❤️, persistence, and code.
  <br />
  <strong>CineWonder — Your next favorite movie awaits!</strong>
</p>