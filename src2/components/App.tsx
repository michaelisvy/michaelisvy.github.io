import { Outlet } from "react-router-dom";
import { Menu } from ".";

export const App = () => {
  return (
    <>
      <Menu />
      <Outlet />
       
    </>
  );
}
