function VideoPlayer({id = "Plv9odDmQ58"}){
    return(
    <div className="flex-1 relative">
    <iframe
      className="absolute inset-0 w-full h-full"
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>
    )
}

export default VideoPlayer