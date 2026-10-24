

function MoviePlayer({videoUrl,videoId,poster}){
  if (videoUrl){
    return (
        <div className="w-full aspect-video">
            <video className="w-full h-full rounded-xl bg-black"
            src={videoUrl}
            poster={poster || undefined}
            controls
            preload ="metadata"
            playsInline
            >
                Your Browser does not support video playback.
            </video>
        </div>
    )
  }

  if (videoId){
    return (
    <div className="w-full aspect-video">
       <iframe
        className="w-full h-full rounded-xl"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title="Movie"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        />
    </div>
    )
  }

  return <p>Video is not Available</p>
}

export default MoviePlayer