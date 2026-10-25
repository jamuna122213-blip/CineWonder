import { NavLink,useNavigate } from "react-router-dom"
import {useAuth} from "../context/AuthContext"


const links = [
    {name:"Home",path:"/"},
    {name:"Wishlist",path:"/wishlist"},
    {name:"Profile",path:"/profile"},
    // {name:"Login",path:"/login"},
    // {name:"Register",path:"/register"}
]          


export default function Navbar(){

    const {user,logout} = useAuth()
    const navigate = useNavigate()
    
    function handleLogout(){
        logout()
        navigate("/login")
    }

    const navLinks = user ? links :
     [
        ...links,
        {name:"Login",path:"/login"},
        {name:"Register",path:"/register"}
     ]


    return (
        <nav className="sticky top-0 z-50 border-b bg-movie-bg/90 px-5 py-4">
            <div className="mx-auto flex max-w-7xl items-center  justify-between gap-4">
                <NavLink to="/" className="font-fredoka text-3xl font-semibold tracking-tight">

                <span className="text-movie-accent">Kid</span>
                Movie
                </NavLink>

             <div className="flex items-center gap-5">
                {navLinks.map((link) => (
                <NavLink key={link.path}
                to={link.path}
                end={link.path==="/"}
                className={({isActive})=> 
                `relative font-fredoka text-lg  after:bottom-0.5 after:left-0
                 after:w-full after:bg-blue-500
                  after:transition-transform 
                  after:duration-300 after:h-0.5 after:absolute
                ${
                    isActive 
                     ? "font-semibold text-movie-accent after:scale-x-100"
                     :"text-gray-400 after:scale-x-0 hover:text-white"
                }`
  
                }
                >
               {link.name}
                </NavLink>
                ))}
                {user && (
                    <>
                    <span className="font-fredoka text-white">
                        HI,{user.name}
                    </span>
                    <button onClick={handleLogout}
                    className="font-fredoka text-gray-400 transition hover:text-white">
                        Logout</button>
                    </>
                )}
             </div>
            </div>
        </nav>
    )
}