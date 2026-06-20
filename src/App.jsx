import {BrowserRouter, Routes, Route}  from "react-router-dom"
import Homepage from "./routes/HomePage"
import About from "./routes/Aboute"
import Projects from "./routes/Projects"
import { useEffect } from "react"


function App() {
  useEffect(()=>{
    if(!localStorage.getItem("modes")){
      localStorage.setItem("modes","dark");
    }
  },[])

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="projects" element={<Projects />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App