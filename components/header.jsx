import { useState } from "react"
import { useGlobalContext } from "../context/context";
import SpotifyLogin from "../server/apis/spotifyLogin";
function Header({onSearchLagu}){
    const {setSearch} = useGlobalContext();

    const changeSearch = (e) => {
        setSearch(e.target.value);
        onSearchLagu(e.target.value);
    }

    return(
    <header className="bg-emerald-500 py-4">
        <div className="mx-auto flex items-center justify-between px-4">
            <h1 className="text-2xl text-white">Toko<span className="font-bold">Play</span></h1>
            <input type="search" className="text-center rounded-lg w-[40%]"
            onKeyDown={(e) => {
                if(e.key === "Enter"){
                    setSearch(e.target.value);
                }
            }}/>
            {/* <button className="bg-white text-red-500 rounded-full px-4 py-2 hover:bg-black hover:text-white">Log in</button> */}
            <SpotifyLogin />
        </div>
    </header>
    )
}

Header.propTypes;

export default Header