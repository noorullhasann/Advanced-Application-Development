import React from 'react'
import "./Adminhome.css"
import Footer from '../Home/Footer/Footer'
import Adminslider from './Adminslider/Adminslider'
import Adminnav from './Adminnav'

export default function Adminhome() {
  return (
    <div>
    <div className='jobnav'>
      <Adminnav/>
      </div>
      <img className='home_img' src='https://images.pexels.com/photos/7014929/pexels-photo-7014929.jpeg?auto=compress&cs=tinysrgb&w=600' alt='background' height={"100%"} width={"99%"}></img>
      <div className="homepage">
      <header>
        <h1>Welcome to JobPortal</h1>
      </header>
      <section className="main-content">
        <h2>Find Your Dream Job</h2>
        <div className="job-opportunities">
          <h3 className='header'>Explore Exciting Job Opportunities</h3>
          <p className='para'>Discover a wide range of job openings across various industries and roles. Whether you're looking for a full-time position, internship, or freelance opportunity, we have something for everyone.</p>
        </div>

        <Adminslider/>

        <div className="trained-candidates">
          <h3>Connect with Trained Candidates</h3>
          <p>Access a pool of highly skilled and qualified candidates who are ready to contribute to your organization's success. Our platform connects you with talented professionals from diverse backgrounds and expertise.</p>
        </div>
      </section>

      <Footer/>
    </div>

    </div>
  )
}
