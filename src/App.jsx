import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './components/NavBar'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="my-portfolio" element={<HomePage/>} />
        </Routes>
      </Router>
      </>
  )
}

export default App
