import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const AppLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AppLayout;
