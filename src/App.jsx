import React from "react";
import { GlobalProvider } from "../context/context";
import { RouterProvider } from "react-router-dom";
import { router } from "../routes/route";

function App() {
  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
}

export default App;
