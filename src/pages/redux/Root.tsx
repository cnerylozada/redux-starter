import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <div>Redux root</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
