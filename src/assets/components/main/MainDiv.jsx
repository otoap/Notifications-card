import "./mainDiv.css"

export default function card({obj, objArray, setObjArray, setCounter}) {

    return (
        <div onClick={()=> {
            if(obj.status==false) {
                setObjArray(objArray.map(item => {
                    if(item.id == obj.id) {
                        item.status = !item.status;
                    }
                    return item
                }))
            }
            }} style={!obj.status?{backgroundColor:"#F7FAFD"}:{backgroundColor:""}} className="card">
            <img src={obj.photo} alt="avatar-image" />
            <div className="textDiv">
                <div className={obj.status? "texts" : "unreadTexts"}>
                    <h2>{obj.name}</h2>
                    <p>{obj.action}  {obj.on?<span className="pspan">{obj.on}</span>:<span className="gspan">{obj.group}</span>}</p>
                </div>
                <div className="time">
                    <span>{obj.time}</span>
                    {obj.message?<p className="message">{obj.message}</p>:""}
                </div>
            </div>
        </div>
    )
}
