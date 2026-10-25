import { Link,useNavigate } from "react-router-dom"
import {useState} from "react"

import {useAuth} from "../context/AuthContext"
import api from "./api/axios"

export default function Login(){

    const {login} = useAuth()

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [message,setMessage] = useState("")

    const navigate = useNavigate()


    async function handleLogin(e) {
        e.preventDefault();

        try{
          const response = await api.post("/api/auth/login", {
          email,
          password
      })
            login(response.data.user)
            navigate("/")
        }
        catch(error) {

            console.log("Login error:",error);
            console.log("server response:",error.response?.data)
            console.log("Status",error.response?.status)

            
            setMessage(
                error.response?.data?.message || "Login Failed"
            )
        }
    }


    return (
        
        <div className="flex min-h-screen items-center justify-center bg-movie-bg p-6 text-white">
        <div className="w-full max-w-sm rounded-2xl bg-movie-surface p-8 shadow-lg">

            <h1 className="mb-2 text-3xl font-bold">
                Welcome Back Kids
            </h1>
            <p  className="mb-6 text-gray-400">
                Login to explore your movie uiverse
            </p>

            <form onSubmit={handleLogin}
                className="space-y-4">
            <div>
                <label htmlFor="email"
                className="mb-2 block font-bold">
                    Email
                </label>
                <input id="email" type="email" name="email" required 
                placeholder="ENter Email Id" 
                autoComplete="email"
                value={email}
                onChange ={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-600 bg-movie-bg p-3 outline-none focus:border-movie-accent"
                />
            </div>
            <div>
                <label className="mb-2 block font-bold" htmlFor="password">
                  Password
                </label>
                <input id="password" type="password" name="password" required placeholder="Enter Password"
                 value ={password}
                 onChange ={(e) => setPassword(e.target.value)}
                 className="w-full rounded-md border border-gray-600 bg-movie-bg p-3 outline-none focus:border-movie-accent" />
            </div>
             
             {message && (
                <p className="text-sm text-purple-300">
                    {message}
                </p>
             )}
            <button className="w-full rounded-md bg-movie-accent p-3 font-bold text-white transition hover:opacity-90">Login</button>

            <p className="mt-6 text-center text-gray-400">
                New Here?
                <Link to="/register" className="font-semibold text-movie-accent hover:underline">
                Create Account</Link>
            </p>

            </form>
        </div>
        </div>

    )
}