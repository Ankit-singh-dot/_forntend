import { Outlet } from "react-router-dom";
import NavBar from "./navBar";
import Footer from "./footer";

const Body = () => {
  return <>
  <NavBar></NavBar>
  <Outlet></Outlet>
  <Footer></Footer>
  </>;
};
export default Body;
