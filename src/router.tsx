import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage as ReduxHome } from "./pages/redux/Home";
import { HomePage as RtkHome } from "./pages/rtk/Home";
import { Root as RtkRoot } from "./pages/rtk/Root";
import { Root as ReduxRoot } from "./pages/redux/Root";
import { PostsPage } from "./pages/rtk/Posts";
import { LazyPokemonsPage } from "./pages/rtk/LazyPokemons";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ReduxRoot />,
    children: [
      {
        index: true,
        element: <Navigate to="home" />,
      },
      {
        path: "home",
        element: <ReduxHome />,
      },
    ],
  },
  {
    path: "/rtk",
    element: <RtkRoot />,
    children: [
      { index: true, element: <Navigate to="home" /> },
      { path: "home", element: <RtkHome /> },
      { path: "posts", element: <PostsPage /> },
      { path: "lazy-pokemons", element: <LazyPokemonsPage /> },
    ],
  },
]);
