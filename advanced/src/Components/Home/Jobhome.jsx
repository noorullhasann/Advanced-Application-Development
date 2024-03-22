import React from 'react'
import Navigationbar from './Navigationbar'
import Footer from './Footer/Footer'
import "./Home.css"
import Filter from './Filter/Filter'  
import Jobcard from './Jobcard/Jobcard'

export default function Jobhome() {

  

  return (
    <div>
    <Navigationbar/>
    <Jobcard/>
      <Filter/>
    <Footer/>
    </div>
    )
  }
  
  // <div className='has_card1'>
  // <h3 className='card1_css'>Job ID: 4<br/>
  // Job Title: Software Engineer<br/>
  // Department: IT<br/>
  // Location: Mumbai<br/>
  // Responsibility: Team Lead<br/>
  // Qualification: 3 Years experience<br/>
  // Category: Premium<br/>
  // Deadline: 02-03-2023<br/>
  // Application Fee: 250</h3>
  // </div>
  // <div className='has_card2'>
  // <h3 className='card1_css'>Job ID: 5<br/>
  // Job Title: Web developer<br/>
  // Department: IT<br/>
  // Location: Delhi<br/>
  // Responsibility: Team Lead<br/>
  // Qualification: 5 Years experience<br/>
  // Category: Premium<br/>
  // Deadline: 10-03-2023<br/>
  // Application Fee: 250</h3>
  // </div>