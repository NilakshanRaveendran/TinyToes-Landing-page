import React from 'react'
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Component/Home';
import Footer from './Component/Footer';


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
          <Footer />
        </div>
      </Router>
  )
}

export default App;