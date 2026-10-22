 import { useState } from "react"

 const movies=[
    {id:1,title:"Black Panter",genre:"Action"},
    {id:2,title:"Spider man",genre:"Adventure"},
    {id:3,title:"Inside Out",genre:"Comedy"},
    {id:4,title:"The Conjuring",genre:"Horror"},
    {id:5,title:"Titanic",genre:"Romance"}
 ]


 export default function Home(){
    const [search,setSearch]=useState("")
    const [genre,setGenre]=useState("All")

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

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((movie) => (
                <article
                key={movie.id}
                className="p-3 rounded-2xl border border-white/10 bg-movie-surface transition hover:-translate-y-1"
                >
                <div className="mb-4 flex h-36 items-center justify-center rounded-xl bg-blue-300">
                    Null
                </div>

                <h3>{movie.title}</h3>

                <p className="mt-1 text-sm text-gray-400">{movie.genre}</p>

                </article>
            ))}
        </div>


        </main>
    )
 }