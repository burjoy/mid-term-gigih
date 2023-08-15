import React from 'react'
import ReactDOM from 'react-dom/client'
// import Header from '../components/header'
// import Cards from '../components/cards'
import Container from '../pages/container'
import MediaPlayers from '../pages/player'
import App from './App'
// import Images from './components/image'
// import HeaderExercise from './exercise/header'

// import {RouterProvider} from "react-router-dom"
// import {router} from "../routes/route"
// import { GlobalContext } from '../context/context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Container /> */}
    {/* <MediaPlayers /> */}
    {/* <GlobalContext.Provider value={user}>
    <RouterProvider router={router}></RouterProvider>
    </GlobalContext.Provider> */}
    <App />
  </React.StrictMode>,
)