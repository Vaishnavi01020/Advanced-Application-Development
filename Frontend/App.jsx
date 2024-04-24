import { useState } from 'react'
import Wedding from './components/Wedding'
import './App.css'
import Birthday from './components/Birthday'
import Engagement from './components/Engagement'
import HouseWarming from './components/HouseWarming'
//import Slider from './components/Slider'
import AddOns from './components/AddOns'
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          <Routes>
          <Route path="/Birthday" element={<Birthday />} /> 
          <Route path="/Engagement" element={<Engagement />} /> 
          <Route path="/HouseWarming" element={<HouseWarming />} /> 
          <Route path="/Wedding" element={<Wedding />} /> 
           
          <Route path="/AddOns" element={<AddOns />} /> 
          </Routes>
        </Router>
        
        </div>
    </>
  )
}

export default App
