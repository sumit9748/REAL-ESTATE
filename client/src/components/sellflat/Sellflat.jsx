import "./sellflat.css"
import Add from '@material-ui/icons/AddAPhotoOutlined';
import { useRef } from "react";
import { useState } from "react";

export const Sellflat = () => {
    const [file,setFile]=useState("")
    const submitHandler=(e)=>{
        e.preventDefault();
        
    }
    return (
        <div className='sell'>
            <div className="sellWrapper">
            <form action="" className="sellForm" onSubmit={submitHandler}>
                <div className="sellLeft">
                    <label htmlFor="file">
                        <Add className="sellLeftIcon"/>
                        <input style={{display:"none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])} />
                    </label>
                </div>
                <div className="sellRight">
                    <span className="Title">User Details</span>
                    
                        <div className="sellItem">
                            <label>Username</label>
                            <input type="text" placeholder="your name..." />
                        </div>
                        <div className="sellItem">
                            <label>Full-Name</label>
                            <input type="text" placeholder="your full name..." />
                        </div>
                        <div className="sellItem">
                            <label>Address</label>
                            <input type="text" placeholder="your Address..." />
                        </div>
                        <div className="sellItem">
                            <label>Phone</label>
                            <input type="text" placeholder="your Contact..." />
                        </div>
                        <div className="sellItem">
                            <label>Active</label>
                            <select className="sellSelect" name="active" id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        
                   
                </div>
                <button className="sellButton" type="submit">Sell</button>
                </form>
            </div>
        </div>
    )
}
