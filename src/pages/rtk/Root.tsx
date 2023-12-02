import { NavLink, Outlet } from "react-router-dom";
import { store } from "../../rtkquery/store";
import { Provider } from "react-redux";

export const Root = () => {
  return (
    <div>
      <div
        className="p-3 flex items-center justify-center
        space-x-4 border-b bg-yellow-50"
      >
        <div>
          <NavLink
            to="home"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="posts"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Posts
          </NavLink>
        </div>
        <div>
          <NavLink
            to="skip"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Skip
          </NavLink>
        </div>
        <div>
          <NavLink
            to="lazy-pokemons"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Lazy pokemons
          </NavLink>
        </div>
      </div>

      <div>Redux Tool Kit Query root</div>
      <hr />
      <Provider store={store}>
        <Outlet />
      </Provider>
    </div>
  );
};
