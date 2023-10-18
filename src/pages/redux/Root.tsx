import { Outlet } from "react-router-dom";
import { HeaderTemplate } from "../../components/HeaderTemplate";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

export const Root = () => {
  return (
    <HeaderTemplate>
      <Provider store={store}>
        <div>
          <div>Redux root</div>
          <hr />
          <div>
            <Outlet />
          </div>
        </div>
      </Provider>
    </HeaderTemplate>
  );
};
