import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Footer from './common/Footer'
import Header from './common/Header'
import Home from './components/home/Home'
// import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
