import { Outlet } from "react-router-dom";
import { store } from "../../rtkquery/store";
import { Provider } from "react-redux";

export const Root = () => {
  return (
    <Provider store={store}>
      <div>
        <div>Rtk root</div>
        <div>
          <Outlet />
        </div>
      </div>
    </Provider>
  );
};
