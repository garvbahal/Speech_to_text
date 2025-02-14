import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className=" font-poppins w-[100vw] h-[100vh] overflow-x-hidden leading-[91.4%]">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
