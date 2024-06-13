import React from 'react'
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';


const App = () => {
  return (
      <Router>
        <div className="app">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path = "/" element = {<Home/>}/>
              <Route path = "/about" element = {<About />}/>
              <Route path = "/contact" element = {<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
  )
}

export default App;