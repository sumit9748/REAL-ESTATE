import React from 'react'
import Search from '@material-ui/icons/Search';
import "./topbar.css"

export const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <span className="logo">Acre-State</span>
                </div>
                <div className="topbarCenter">
                <Search/>
                <input placeholder='Search your location...' className="topbarCenterSearch" />
                </div>
                <div className="topbarRight">
                    <span className="about">About</span>
                    <span className="username">Sumit Mondal</span>
                    <img src="https://scontent.fccu15-1.fna.fbcdn.net/v/t1.6435-9/53766537_2370429279847438_717318912059899904_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=c_1imT7I-RoAX9iZeM4&_nc_ht=scontent.fccu15-1.fna&oh=00_AT8nrmPx4DliGTVqkOWmOK58LuX0BOfgZ1Bg5LEV531rdw&oe=61E1238C" alt="" className="profileImg" />
                    <span className="about">Details</span>
                </div>
            </div>
        </div>
    )
}
