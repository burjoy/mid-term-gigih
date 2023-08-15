import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts";

import Container from "../pages/container";
import MediaPlayers from "../pages/player";
import SingleVideo from "../pages/videos/_id";

const router  = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
        {
            path: '/',
            element: <Container />
        },
        {
            path: '/video/:id',
            element: <SingleVideo />
        }
    ]
    }
]);

export {router}