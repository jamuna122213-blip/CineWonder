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
    const [genre,setGenre]=useState("")

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

        <h1 ClassName="text-3xlfont-bold tracking-wide">
            Find Your Next Favourite Movie..
        </h1>

        <p className="text-3xl font-bold tracking-wide">
            Discover movie for every mood
        </p>    
        </div>

            <input type="text" placeholder="Enter Your Favourite Movie"
        value={search} onChange={(e) => setSearch(e.target.value)}
        className="w-100 rounded-xl bg-movie-surface p-4 [box_shadow:0_0_3px_white]"
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


        </main>
    )
 }