import React from 'react'
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Component/Home';


const App = () => {
  return (
      <Router>
        <div className="app">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path = "/" element = {<Home/>}/>
            </Routes>
          </div>
        </div>
      </Router>
  )
}

export default App;