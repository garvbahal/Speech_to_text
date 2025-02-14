import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <div className=" font-poppins w-[100vw] h-[100vh] overflow-x-hidden leading-[91.4%]">
      <NavBar token={token} setToken={setToken} />

      <Routes>
        <Route path="/" element={<HomePage token={token} />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route
          path="/login"
          element={<LoginPage token={token} setToken={setToken} />}
        />
        <Route path="/signup" element={<SignUpPage token={token} />} />
      </Routes>
    </div>
  );
}

export default App;
