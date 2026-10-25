import {useEffect,useState} from "react"

 export default function Wishlist() {
   
    const [wishlist,setwishlist] = useState(() => {
        return JSON.parse(
            localStorage.getItem("cinewonder-wishlist") || "[]"
        )
    })
    
    useEffect(() => {
        localStorage.setItem("cinewonder-wishlist",
        JSON.stringify(wishlist)
        )
    },[wishlist])

    function removeMovie(id){
        setwishlist((previous) => {
           return previous.filter((movie) => movie._id!==id)
        })
    }
     
    return (
        <main className="min h-screen bg-movie-bg p-10 text-white">
            <h1 className="mb-6 text-3xl font-bold">
                My Wishlist ♥</h1>
             {wishlist.length === 0 ? (
                <p className="text-gray-400">
                    Your wishlist is empty.Add some movies!
                </p>
             ): (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {wishlist.map((movie) => (
                        <article
                        key={movie._id}
                        className="rounded-2xl border border-white/10 bg-movie-surface p-4">
                            {movie.poster ? (
                             <img 
                             src={movie.poster}
                             alt={movie.title}
                             className="mb-4 h-56 w-full rounded-xl object-cover" />
                            ):(
                                <div className="mb-4 flex h-56 items-center justify-center">
                                    No POster Available
                                </div>
                            )}

                            <h2 className="font-semibold">
                                {movie.title}
                            </h2>

                            <p className="my-1 text-sm text-gray-400">
                                {movie.genre}
                            </p>

                            <button onClick={()=>removeMovie(movie._id)}
                                className="mt-4 rounded-full bg-purple-900 px-4 py-2 hover:bg-purple-700"

                                >Remove ♥</button>
                        </article>
                    ))}
                </div>
             )}
          
        </main>
    )
}
