import {useEffect,useState} from "react"

export default function wishlist(){

    const [wishlist,setwishlist] = usestate(() => {
        return JSON.parse(
            localStorage.getItem("cinewonder-wishlist") || "[]"
        )
    })
    
    useEffect(() => {
        localStorage.setItems("cinewonder-wishlist",
        JSON.stringify(wishlist)
        )
    },[wishlist])

    function remoteMovie(id){
        setwishlist((previous) => {
            previous.filter((movie) => movie._id!==id)
        })
    }
     
    return (
        <main classname="min h-screen bg-movie-bg p-10 text-white">
            <h1 className="mb-6 text-3xl font-bold">
                My Wishlist ♥</h1>
             {wishlist.length === 0 ? (
                <p className="text-gray-400">
                    Your wishlist is empty.Add some movies!
                </p>
             ): (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {wishlist.map(movie) => (
                        <article
                        key={movie._id}
                        className="rounded-2xl border border-white/10 bg-movie-surface p-4">
                            {movie.poster ? (
                             <img 
                             src={movie.poster}
                             alt={movie.title}
                             className="mb-4 h-56 w-full rounded-xl object-cover" />
                            ):(
                                <div className="mb-4 flex h-56 items-center justify-center"
                            )}
                        </article>
                    )}
                </div>
             )}
          
        </main>
    )
}