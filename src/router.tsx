import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage as ReduxHome } from "./pages/redux/Home";
import { HomePage as RtkHome } from "./pages/rtk/Home";
import { Root as RtkRoot } from "./pages/rtk/Root";
import { Root as ReduxRoot } from "./pages/redux/Root";
import { PostsPage } from "./pages/rtk/Posts";
import { LazyPokemonsPage } from "./pages/rtk/LazyPokemons";
import { CounterPage } from "./pages/redux/Counter";
import { PostDetail } from "./pages/rtk/PostDetail";
import { Skip } from "./pages/rtk/Skip";

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
      {
        path: "counter",
        element: <CounterPage />,
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
      { path: "posts/:postId", element: <PostDetail /> },
      { path: "skip", element: <Skip /> },
      { path: "lazy-pokemons", element: <LazyPokemonsPage /> },
    ],
  },
]);
