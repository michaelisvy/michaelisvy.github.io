import { Outlet } from "react-router-dom";
import '../styles/App.css';
import { Menu } from ".";

export const App = () => {
  return (
    <>
      <Menu />
      <Outlet />
       
    </>
  );
}
