import { NavLink, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

export const Root = () => {
  return (
    <div>
      <div
        className="p-3 flex items-center justify-center
        space-x-4 border-b bg-blue-50"
      >
        <div>
          <NavLink
            to="home"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Redux Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="counter"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Redux Counter
          </NavLink>
        </div>
        <div>
          <NavLink
            to="rtk/home"
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Go to RTK Query
          </NavLink>
        </div>
      </div>

      <div>Redux root</div>
      <hr />
      <Provider store={store}>
        <Outlet />
      </Provider>
    </div>
  );
};
