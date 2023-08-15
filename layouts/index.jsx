import { Link, Outlet } from "react-router-dom";
import Header from "../components/header";

function RootLayout(){
    return(
        <>
        <Header />
        {/* <Link to='/'>Home</Link> | <Link to='/video'>Video</Link> */}
        <Outlet />
        </>
    )
}

export default RootLayout