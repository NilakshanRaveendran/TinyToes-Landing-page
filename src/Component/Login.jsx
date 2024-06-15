import React from 'react'
import './Login.css'
import img1 from '../assets/Vector.png'
import img2 from '../assets/Vector1.png'
import img3 from '../assets/Vector2.png'

const Login = () => {
  return (
    <div className="login">
      <div className="content1">
        <div className="head">
          <img src={img1} alt="" />
          <h3>Daycare</h3>
        </div>
        <div className="para">
          <p>
              In Sri Lanka, daycare centres cater to the needs of working parents by providing safe and nurturing environments for children. 
          </p>
        </div>

        <div className="head">
            <img src={img2} alt="" />
            <h3>Features</h3>
        </div>
        <div className="para">
            <p>
            In Sri Lanka, daycare centres cater to the needs of working parents by providing safe and nurturing environments for children. 
            </p>
        </div>

        <div className="head">
            <img src={img3} alt="" />
            <h3>Updates</h3>
        </div>
        <div className="para">
            <p>
            In Sri Lanka, daycare centres cater to the needs of working parents by providing safe and nurturing environments for children. 
            </p>
        </div>


      </div>
      <div className="vertical-line"></div>
      <div className="sign">
        <h2>Sign up</h2>
      </div>
    </div>
  )
}

export default Login;