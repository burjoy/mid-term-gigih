import { useState, useEffect } from "react"
import { useGlobalContext } from "../context/context"
import Cards from "../components/cards"
import Header from "../components/header"
import list from "../components/list_song.json"
import getAllVideos from "../apis/getAllVideo"

function Container(){
    const {search} = useGlobalContext();
    const [daftarVideo, setDaftarVideo] = useState();
    const [newVideo, setNewVideo] = useState();
    const onSearchChange = (value) => {
        console.log(value);
        const filterLagu = list.filter(entry => (
            entry.title.includes(value)
        ));
        setLagu(filterLagu);
    }


    useEffect(() => {
        const fetchVideos = async () => {
          const videos = await getAllVideos();
          setDaftarVideo(videos);
        };
        fetchVideos();
      }, []);

    useEffect(() => {
        console.log(search);
        console.log(daftarVideo);
        const filtered = daftarVideo?.filter(listVideo => {
           return listVideo.title.toLowerCase().includes(search.toLowerCase());
        })
        setNewVideo(filtered);
        console.log(newVideo);
    }, [search])

    return(
    <>
    {/* <Header onSearchLagu={onSearchChange}/> */}

    <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="music_container">
            {!search ? (
                daftarVideo?.map((entry, index) => (
                    <Cards key={index}
                    title={entry.title}
                    url={entry.URLthumbnail}
                    id={entry.videoID}/>
                ))
            ): 
            (
                newVideo?.map((entry, index) => (
                    <Cards key={index}
                    title={entry.title}
                    url={entry.URLthumbnail}
                    id={entry.videoID}/>
                ))
            )}
        </div>
    </main>
    </>
    )
}

export default Container