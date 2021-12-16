import React from 'react'
import Footer from '../../components/footer/Footer'
import Newsletter from '../../components/newsletter/Newsletter'
import { Sellflat } from '../../components/sellflat/Sellflat'
import { Topbar } from '../../components/topbar/Topbar'

export const Sell = () => {
    return (
        <div>
           <Topbar/>
           <Sellflat/>
           <Newsletter/>
           <Footer/> 
        </div>
    )
}
