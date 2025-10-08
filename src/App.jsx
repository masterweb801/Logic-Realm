import './css/App.css'
import './css/colors.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
