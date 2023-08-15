import { useState } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../../components/videoPlayer";
import MediaPlayers from "../player";

function SingleVideo() {
    const params = useParams();

    return(
        <MediaPlayers id={params.id}/>
    )
}

export default SingleVideo