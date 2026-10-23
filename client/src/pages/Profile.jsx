import { Link } from "react-router-dom"

export default function Profile(){
    return (
        <main className="flex min-h-scren items-center justify-center bg-movie-bg p-6 text-white" >
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-movie-surface p-8 text-center shadow-xl">
            <div className="bg-red-800 rounded-full flex w-24 h-24 mx-auto items-center justify-center text-5xl"> 🎬</div>
            <h1 className="text-3xl font-bold mt-2 font-fredoka">Movie Lover</h1>
             <p className="mt-2">Movie@example.com</p>
             <h3 className="mt-2 text-gray-300">Explore Stories,adventures,and unforgettable movies.</h3>

             <div className="mt-8 grid grid-cols-2 gap-4">

            <div className="rounded-xl bg-movie-bg p-4">
                <p className="text-2xl font-bold text-movie-accent">
                    6
                </p>
                <p className="mt-1 text-sm text-gray-400">
                    Movie Available
                </p>
            </div>

                   <div className="rounded-xl bg-movie-bg p-4">
                <p className="text-2xl font-bold text-movie-accent">
                    🎥
                </p>
                <p className="mt-1 text-sm text-gray-400">
                    Movie Explorer
                </p>
            </div>
             </div>

                  <Link to="/watchlist" className="rounded-2xl block mt-3 p-3 font-bold text-2xl bg-red-700 w-full" >
                View My WatchList</Link>
                <Link to="/" className="mt-4 inline-block text-sm text-gray-400 transition hover:text-movie-accent">
                    ← Back TO Home</Link>
            </div>
            
        </main>
    )
}