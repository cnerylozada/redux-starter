import { Outlet } from "react-router-dom";
import { store } from "../../rtkquery/store";
import { Provider } from "react-redux";
import { Template } from "../../components/Template";

export const Root = () => {
  return (
    <Template>
      <Provider store={store}>
        <div>
          <div>Rtk root</div>
          <div>
            <Outlet />
          </div>
        </div>
      </Provider>
    </Template>
  );
};
