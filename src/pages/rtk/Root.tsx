import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <div>Rtk root</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
