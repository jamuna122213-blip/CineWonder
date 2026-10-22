import { Link } from "react-router-dom"

export default function Login(){
    return (
        <div classname="flex min-h-screen items-center justify-center bg-movie-bg p-6 text-white">
        <div className="w-full max-w-sm rounded-2xl bg-movie-surface p-8 shadow-lg">

            <h1 className="mb-2 text-3xl font-bold">
                Welcome Back Kids
            </h1>
            <p  className="mb-6 text-gray-400">
                Login to explore your movie uiverse
            </p>

            <form onSubmit={(e) => e.preventDefault()}
                className="space-y-4">
            
            <div>
                <label htmlfor="email"
                className="mb-2 block font-bold">
                    Email
                </label>
                <input id="email" type="email" name="email" required place />
            </div>

            </form>
        </div>
        </div>
    )
}