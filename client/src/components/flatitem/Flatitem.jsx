import "./flatitem.css"

export const Flatitem = ({item}) => {
    return (
        
        <div className='flat'>
            <div className="flatWrapper">
                <div className="imgContainer">
                    <img src={item.profileImg} alt="" className="flatImg" />
                </div>
                <div className="InfoContainer">
                    <h1 className="title">{item.title}</h1>
                    <span className="flatDesc">{item.desc}</span>
                    <p className="flatPrice">{item.price}</p>
                    <div className="flatSelect">
                        <label>Size</label>
                        <select className="newUserSelect" name="Size" id="active">
                            <option value="1">1BHK</option>
                            <option value="2">2BHK</option>
                            <option value="3">3BHK</option>
                        </select>
                        </div>
                </div>
            </div>
        </div>
    )
}
