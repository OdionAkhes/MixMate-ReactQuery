/** @format */

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  About,
  HomeLayout,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from "./pages";
import{ loader as landingLoader} from "./pages/Landing"


import { loader as singleCocktailLoader } from "./pages/Cocktail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader,
        errorElement: <SinglePageError />,
        element: <Landing />,
      
      },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
        loader: singleCocktailLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        errorElement: <SinglePageError />,
      },
      {
        path: "/about",
        element: <About />,
  
      },
    ],
  },
]);
  

const App = () => {
  return (

    <RouterProvider router={router}/>
  );
};
export default App;
