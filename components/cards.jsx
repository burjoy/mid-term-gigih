import { Link } from "react-router-dom"
function Cards({title, id, url = "https://placehold.co/150"}){
    return(
        <>
        <div className="bg-white rounded-lg p-4 music_card">
            <Link to={`/video/${id}`}>
                <img src= {url} alt="" className="w-full mb-4 music_album" width={150} height={150}/>
                <h2 className="text-lg font-bold music_title">{title}</h2>
            </Link>
            {/* {artists?.map((artist, index) => (
                <p className="text-sm text-gray-500 music_artist" key={index}>{artist}</p>
            ))} */}
            {/* <p className="count">Count: 0</p> */}
            {/* <audio src="" className="w-full" id = "50" controls></audio>
            <div className="flex justify-between mt-4">
                <button className="bg-blue-500 text-white rounded-full px-4 py-2 mr-2 updateBtn">Update</button>
                <button className="bg-red-500 text-white rounded-full px-4 py-2 deleteBtn">Delete</button>
            </div> */}
        </div>
        </>
    )
}

Cards.propTypes

export default Cards