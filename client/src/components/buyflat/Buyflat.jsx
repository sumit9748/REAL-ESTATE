import "./buyflat.css"
import { Link } from "react-router-dom"
export const Buyflat = ({items}) => {
    return (
        <div className="buy">
            <div className="buyWrapper">
            <h1 className="buyTitle">Projects In high Demand</h1>
                <div className="buyItems">
                    {items.map(item=>(

                   
                    <div className="buyItem">
                        <div className="buyItemTop">
                            <img src={item.profileImg} alt="" className="buyImg" />
                        </div>
                        <div className="buyItemBottom">
                            <span className="Title">{item.title}</span>
                            <span className="location"> {item.address}</span>
                            <span className="price">{item.price}</span>
                            <Link to={`/flat/`+item._id}>
                            <button className="BuyButton">Buy</button>
                            </Link>
                        </div>
                    </div>
                     ))}
                    
                </div>
            </div>
        </div>
    )
}
