import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import "./styles/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/signup";
  return (
    <BrowserRouter>
     {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
         <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
