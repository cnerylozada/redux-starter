import { Outlet } from "react-router-dom";
import { store } from "../../rtkquery/store";
import { Provider } from "react-redux";
import { HeaderTemplate } from "../../components/HeaderTemplate";

export const Root = () => {
  return (
    <HeaderTemplate>
      <Provider store={store}>
        <div>
          <div>Rtk root</div>
          <hr />
          <div>
            <Outlet />
          </div>
        </div>
      </Provider>
    </HeaderTemplate>
  );
};
