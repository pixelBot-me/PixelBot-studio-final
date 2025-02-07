import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Footer from './common/Footer'
import Header from './common/Header'
import Home from './components/home/Home'
import AboutUs from './components/aboutUs/AboutUs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Router>
        {/* <Header /> */}
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
