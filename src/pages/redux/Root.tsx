import { Outlet } from "react-router-dom";
import { Template } from "../../components/Template";

export const Root = () => {
  return (
    <Template>
      <>
        <div>Redux root</div>
        <div>
          <Outlet />
        </div>
      </>
    </Template>
  );
};
