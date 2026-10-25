import {Link,useNavigate} from "react-router-dom"
import {useState} from "react"
import api from "./api/axios"

export default function Register(){
  
  const [name,setName] = useState("");
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [message,setMessage] = useState("")

const navigate = useNavigate()
    
async function handleRegister(e) {
  e.preventDefault()

  try{

    const response =await api.post("/api/auth/register",{
      name,email,password
    })

    setMessage(response.data.message)
    navigate("/login")
  }
  catch (error) {
    setMessage(
      error.response?.data?.message || "Register Failed"
    )
  }
  
}


return (
    <div className="flex min-h-screen items:center justify-center bg-movie-bg p-6 text-white">
      
      <div className="w-full max-w-sm rounded-2xl bg-movie-surface p-8 shadow-lg">

        <h1 className="mb-2 text-3xl font-bold">Create Account</h1>
        <p className="mb-6 text-gray-400">
            Join Cinewonder and explore your movie universe
        </p>
        <form onSubmit={handleRegister} className="space-y-4">
            <div>
                <label htmlFor="name" className="mb-2 block font-bold">
Full Name:
                </label>
                <input id="name" name="name" type="text" required placeholder="Enter Your full name"
                onChange={(e) => setName(e.target.value)}
                 className="w-full p-2 rounded-md border-gray-600 bg-movie-bg outline-none focus:border-movie-accent"    />
            </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-bold">
Email:
                </label>
                <input id="email" name="email" type="email" required placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                 className="w-full p-2 rounded-md border-gray-600 bg-movie-bg outline-none focus:border-movie-accent"    />
            </div>
              <div>
                <label htmlFor="password" className="mb-2 block font-bold">
Password:
                </label>
                <input id="password" name="password" type="password" required placeholder="Enter Your Password"
                onChange ={(e) => setPassword(e.target.value)}
                 className=" p-2 w-full rounded-md border-gray-600 bg-movie-bg outline-none focus:border-movie-accent"    />
            </div>

            {message && <p className="text-sm text-purple-300">{message}</p>}
            <button type="submit" 
            className="w-full rounded-md bg-movie-accent p-3 font-bold">Register
            </button>

            <p className="mt-6 text-center text-gray-400">
                Already have an account ?
                <Link to="/login" className="font-semibold text-movie-accent hover:underline">
                Login</Link>
            </p>


        </form>
      </div>

    </div>
)

}