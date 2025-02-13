import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
