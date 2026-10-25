 import { useEffect,useState } from "react"
import api from "../api/axios"
import MoviePlayer from "../components/MoviePlayer"



 export default function Home(){
    const [search,setSearch]=useState("")
    const [genre,setGenre]=useState("All")
     
    const [selectedMovie,setSelectedMovie]=useState(null)

    const [wishlist,setWishlist] = useState(() => {
        return JSON.parse(localStorage.getItem("cinewonder-wishlist") || "[]")
    })

    const [movies,setMovies] = useState([])
    const [loading,setLoading] = useState(true)
        
    useEffect(() => {
        localStorage.setItem("cinewonder-wishlist",JSON.stringify(wishlist))
    })
    
    useEffect(() => {
        api.get("/api/movies")
        .then((response) => {
            setMovies(response.data)
        })
        .catch((error) => {
            console.log("Failed to fetch movies:",error);
        })
        .finally(() => {
            setLoading(false)
        })
    },[]);

    if (loading){
        return <p>Loading Movies</p>
    }
    

    const genres = ["All",...new Set(movies.map((movie) => movie.genre))]


    const filtered = movies.filter(
        (movie) => 
            movie.title.toLowerCase().includes(search.toLowerCase()) &&
            
        (genre === "All" || movie.genre === genre)
    )



            
    return (
        <main className="flex min-h-screen  flex-col gap-15 bg-movie-bg p-10 text-white">
        <div className="flex h-[200px] w-full flex-col gap-5 rounded-4xl bg-purple-900 p-10 [box-shadow:0_0_5px_white] [text-shadow:0_0_10px_white] ">
        <p className="tracking-widest">
            Your Movie Universe
        </p>

        <h1 className="text-3xl font-bold tracking-wide">
            Find Your Next Favourite Movie..
        </h1>

        <p className="text-3xl font-bold tracking-wide">
            Discover movie for every mood
        </p>    
        </div>

            <input type="text" placeholder="Enter Your Favourite Movie"
        value={search} onChange={(e) => setSearch(e.target.value)}
        className="w-100% rounded-xl bg-movie-surface p-4 [box_shadow:0_0_3px_white]"
        />

        <div className="flex w-full gap-10  ml-0">
            {genres.map((g) => (
                <button key={g} 
                onClick={()=>setGenre(g)}
                className={`rounded-full p-3 ${
                    genre==g
                    ? "bg-movie-accent text-bold"
                    :"bg-movie-surface text-gray-300"
                }`}>
                    {g}
                </button>
            ))}
        </div>

        <h1 className="text-2xl font-bold">
            Explore Movies
        </h1>

        {selectedMovie && (
            <div className="mb-6">
                <h2 className="mb-3 text-xl font-bold">
                    Now Playing:{selectedMovie.title}
                </h2>

                <MoviePlayer videoUrl ={selectedMovie.videoUrl} videoId={selectedMovie.videoId} poster={selectedMovie.poster} />
            </div>
        )}

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((movie) => (
                <article
                onClick ={() => setSelectedMovie(movie)}
                key={movie._id}
                className="p-3 rounded-2xl border border-white/10 bg-movie-surface transition hover:-translate-y-1"
                >
 
                <div className="mb-4 h-56 overflow-hidden rounded-xl bg-movie-bg">
                    {movie.poster ? (
                        <img 
                        src={movie.poster}
                        alt={movie.title}
                        className="h-full w-full object-cover"
                        />):
                        (
                            <div className="flex h-full items-center justify-center text-gray-400">
                                No  Poster Available
                            </div>
                        )}
                </div>
                       

                <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold">{movie.title}</h3>

                <button onClick={(e) => {
                    e.stopPropagation()
            
                    setWishlist((previous) => {
                        const exists = previous.some(
                            (item) => item._id === movie._id
                        )
                    
                        if (exists){
                            return previous.filter(
                                (item) => item._id!=movie._id
                            )
                        }

                        return [...previous,movie]
                    })
                }}>
                    {wishlist.some((item) => item._id===movie._id)
                    ? "♥ Saved"
                : "♡ Add to Wishlist"
                }
                </button>
                </div>    

                <p className="mt-1 text-sm text-gray-400">{movie.genre}</p>

                </article>
            ))}
        </div>


        </main>
    )
 }