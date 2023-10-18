import { Outlet } from "react-router-dom";
import { HeaderTemplate } from "../../components/HeaderTemplate";

export const Root = () => {
  return (
    <HeaderTemplate>
      <div>
        <div>Redux root</div>
        <hr />
        <div>
          <Outlet />
        </div>
      </div>
    </HeaderTemplate>
  );
};
