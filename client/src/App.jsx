import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

        
function Watchlist() {
  return (
    <main className="p-8 text-2xl">
      Your WatchList
    </main>
  );
}



export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </>
  )
}
