import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import NavBar from "./navBar";
import Body from "./body";
import Profile from "./profile";
import Login from "./login";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body></Body>}>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <NavBar /> */}
    </>
  );
}

export default App;
