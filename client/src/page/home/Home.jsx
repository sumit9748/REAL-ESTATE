import React from 'react'
import {Topbar} from "../../components/topbar/Topbar"
import { Slider } from '../../components/slider/Slider'
import { Flats } from '../../components/flats/Flats'
import { Newsletter } from '../../components/newsletter/Newsletter'
import { Footer } from '../../components/footer/Footer'

export const Home = () => {
    return (
        <div className='home'>
            <Topbar/>
            <Slider/>
            <Flats/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
