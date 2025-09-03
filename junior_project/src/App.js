import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CardGrid from "./components/CardGrid";
import EventHandlingDetail from "./pages/EventHandlingDetail";
import PromiseDetail from "./pages/PromiseDetail";
import UserInputDetail from "./pages/UserInputDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardGrid></CardGrid>} />
        <Route path="/lesson/1" element={<PromiseDetail />} />
        <Route path="/lesson/2" element={<EventHandlingDetail />} />
        <Route path="/lesson/3" element={<UserInputDetail />} />
        <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} />
      </Routes>
    </Router>
  );
}

export default App;
