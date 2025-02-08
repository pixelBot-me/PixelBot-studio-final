import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './common/Footer'
import Home from './components/home/Home'
import AboutUs from './components/aboutUs/AboutUs';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about-us" element={<AboutUs></AboutUs>} /> 
        </Routes>
        <Footer /> 
      </Router>
    </>
  )
}

export default App
