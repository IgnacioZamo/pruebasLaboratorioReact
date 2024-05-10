import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import ReactPage from "./assets/components/pages/react";
import TailwindPage from "./assets/components/pages/tailwind";
import NavBar from "./assets/components/navbar/NavBar";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/react" element={<ReactPage />} />
          <Route path="/tailwind" element={<TailwindPage />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;