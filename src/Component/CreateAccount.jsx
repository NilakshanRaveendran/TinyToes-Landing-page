import React from 'react'
import './CreateAccount.css'

import mar3 from '../assets/Group1.png'
import mar4 from '../assets/Group2.png'
import mar5 from '../assets/Group3.png'
import mar6 from '../assets/Group4.png'
import mar7 from '../assets/Group5.png'
import mar8 from '../assets/Group6.png'
import Marquee from "react-fast-marquee"


import { useNavigate } from 'react-router-dom';


const CreateAccount = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/otp'); // Replace '/target-page' with the route you want to navigate to
    };



    return (
        <div className="CreateAccount">
            <div className="CreateAccount1">

                <h2>TinyToes at SriLanka</h2>
                <p>
                    At TinyToes, we are committed to providing a safe, nurturing, and stimulating environment that supports the holistic development of your child. Our daycare center offers a comprehensive range of services designed to meet the diverse needs of children and families, ensuring that parents can have peace of mind while they are at work.
                </p>
                <br></br>


                <h4>
                    Child-Centered Approach to Learning and Development
                </h4>
                <p>
                    At TinyToes, we recognize that the early years of a child's life are crucial for their overall development. Our programs are designed to foster cognitive, emotional, social, and physical growth in a supportive and engaging environment. We follow a child-centered approach, where the unique needs, interests, and abilities of each child are at the core of our curriculum. Through age-appropriate activities, we aim to nurture creativity, critical thinking, and problem-solving skills in children, setting a strong foundation for their future learning.
                </p>

                <h4>
                    Comprehensive Early Childhood Education
                </h4>
                <p>
                    We understand that early childhood education plays a pivotal role in shaping a child's future. Our team of experienced educators is dedicated to delivering high-quality early education that is both enriching and enjoyable. The curriculum at TinyToes is carefully crafted to incorporate a variety of learning experiences, including language development, math, science, and the arts. Additionally, we place a strong emphasis on cultural awareness and socialization, helping children develop a sense of community and respect for diversity.
                </p>


                <Marquee className='marquee' pauseOnHover>

                    <div className="img-marquee">
                        <img src={mar3} alt="" />
                    </div>
                    <div className="img-marquee">
                        <img src={mar4} alt="" />
                    </div>
                    <div className="img-marquee">
                        <img src={mar5} alt="" />
                    </div>
                    <div className="img-marquee">
                        <img src={mar6} alt="" />
                    </div>
                    <div className="img-marquee">
                        <img src={mar7} alt="" />
                    </div>
                    <div className="img-marquee">
                        <img src={mar8} alt="" />
                    </div>
                </Marquee>

            </div>


            <div className="CreateAccount2">
                <div className="content1">
                    <h4>Start for free</h4>
                    <h2>Create new account.</h2>
                    <div className="sec1">
                        <p>Already a Member?</p>
                        <a href="./login">
                            <p className="Login">Login</p>
                        </a>
                    </div>
                </div>



                <div className="content2">
                    <div className="row">
                        <div className="name">
                            <h4>First name</h4>
                            <input type="text"
                                name="firstname"
                                id="subscribe"
                                placeholder='First name' />
                        </div>

                        <div className="lastname">
                            <h4>Last name</h4>
                            <input type="text"
                                name="lastname"
                                id="subscribe"
                                placeholder='Last name' />
                        </div>
                    </div>


                    <div className="row">
                        <div className="name">
                            <h4>Phone no</h4>
                            <input type="text"
                                name="phone_no"
                                className='input-box'
                                placeholder='Phone number' />
                        </div>
                    </div>

                    <div className="row">
                        <div className="address">
                            <h4>Address</h4>
                            <input type="text"
                                name="address"
                                className='input-box'
                                placeholder='Address' />
                        </div>
                    </div>

                    <div className="row">
                        <div className="name">
                            <h4>Email</h4>
                            <input type="text"
                                name="email"
                                className='input-box'
                                placeholder='Email' />
                        </div>
                    </div>

                    <div className="row">
                        <div className="name">
                            <h4>Password</h4>
                            <input type="password"
                                name="password"
                                className='input-box'
                                placeholder='password' />
                        </div>
                    </div>

                    <div className="row">
                        <div className="name">
                            <h4>Confirm Password</h4>
                            <input type="password"
                                name="confirm-password"
                                className='input-box'
                                placeholder='Confirm-password' />
                        </div>
                    </div>
                    <button className="button"  onClick={handleClick} >Login</button>


                </div>
            </div>

        </div>


        /* 
  <div className="CreateAccount2">
    <h3>Your email or Phone number</h3>
    <input type="email"
      name=""
      id="subscribe"
      placeholder='Email or User name' />

    <input type="password"
      name=""
      id="subscribe"
      placeholder='Password' />

    <button className="button" onClick={otpButton}>Login</button>
    <div className="or">
      <hr />
      <p>or</p>
      <hr />
    </div>
    <button className='sign-button'><img src={image3} alt="" />Continue with Google</button>
    <button className='sign-button'><img src={image2} alt="" />Continue with Apple</button>
    <div className="CreateAccount3">
      <p>Don't have an account?</p>
      <a href="./login">
      <p className="signup">Sign up</p>
      </a>
    </div>
  </div> */
    )
}

export default CreateAccount;