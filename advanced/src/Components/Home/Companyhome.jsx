import React from 'react'
import Navigationbar from "./Navigationbar"
import Footer from './Footer/Footer'
import Company from './Company/Company'
import Filter from './Filter/Filter'
import "./Company/Company.css"

export default function Companyhome() {
  return (
    <div>
    <Navigationbar/>
    
    <Company/>
    <div className='comfilter'>
      <Filter/>
    </div>
    <div className='comfooter'>
      <Footer/>
    </div>
    </div>
    )
  }
  
  //<img className='home_img' src='https://images.pexels.com/photos/7014929/pexels-photo-7014929.jpeg?auto=compress&cs=tinysrgb&w=600' alt='background' height={"100%"} width={"99%"}></img>