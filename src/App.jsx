import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './common/Footer'
import Header from './common/Header'
// import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <h1>main section</h1>
      <Footer/>
    </>
  )
}

export default App
