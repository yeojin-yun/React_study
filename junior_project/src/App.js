import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CardGrid from "./components/CardGrid";
import PromiseDetail from "./pages/PromiseDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardGrid></CardGrid>} />
        <Route path="/lesson/:id" element={<PromiseDetail />} />
        <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} />
      </Routes>
    </Router>
  );
}

export default App;
