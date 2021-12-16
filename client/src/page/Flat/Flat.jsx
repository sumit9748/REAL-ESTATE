import React from 'react'
import { Topbar } from '../../components/topbar/Topbar'
import {Flatitem} from '../../components/flatitem/Flatitem'
import Newsletter from '../../components/newsletter/Newsletter'
import Footer from '../../components/footer/Footer'
import { useLocation } from "react-router";
import axios from "axios"
import { useState,useEffect } from 'react'

export const Flat = () => {
    const location=useLocation();
  const id=(location.pathname.split("/")[2]);
  
  const [flat,setFlat]=useState([]);
  useEffect(()=>{
      const getFlat=async()=>{
          const res=await axios.get(`/property/`+id)
          setFlat(res.data);
      };getFlat();
  },[])
  console.log(flat)

    return (
        <div>
            <Topbar/>
            <Flatitem item={flat}/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
