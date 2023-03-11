import AppBar from "./components/AppBar";
import Banner from "./components/Banner";
import Login from "./components/Login";
import Main from "./components/Main";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hackathon from "./components/Hackathon";
import worshopLandpage from "./components/workshop/worshopLandpage";
export default function App() {
  return (
    <div>
      <Login />
    </div>
  );
}
