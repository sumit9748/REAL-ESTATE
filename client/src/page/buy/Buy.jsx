import React from 'react'
import { Topbar } from '../../components/topbar/Topbar'
import { Buyflat } from '../../components/buyflat/Buyflat'
import { buyItems } from '../../data'
import Newsletter from '../../components/newsletter/Newsletter'
import Footer from '../../components/footer/Footer'
import axios from "axios"
import { useState,useEffect } from 'react'

export const Buy = () => {

    const [flats,setFlats]=useState([]);
    useEffect(()=>{
        const getFlats=async()=>{
            try{
                const res=await axios.get("/property/")
                setFlats(res.data);
            }catch(err){}
        };getFlats();
    },[])

    return (
        <div>
           <Topbar/>
           <Buyflat items={flats}/> 
           <Newsletter/>
           <Footer/>
        </div>
    )
}
