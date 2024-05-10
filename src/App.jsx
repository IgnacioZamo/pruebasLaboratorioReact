import { BrowserRouter as Routes, Router, Route } from "react-router-dom"

import Title from "./assets/components/title" 
import NavBar from "./assets/components/navbar/NavBar.jsx"
import ReactPage from "./assets/components/pages/react"
import TailwindPage from "./assets/components/pages/tailwind"

function App() {

  return (
<>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/ReactPage" element={<ReactPage />} />
          <Route path="/TailwindPage" element={<TailwindPage />} />
        </Routes>
      </Router>
      <Title /> 
    </>
  )
}

export default App