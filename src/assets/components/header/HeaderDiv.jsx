import "./header.css"

export default function Header({ setObjArray, objArray}) {
    return(
        <div className="headerDiv">
            <h1>Notifications <span>0</span></h1>
            <button onClick={()=> {
                setObjArray(()=> {
                    return objArray.map(obj => {
                        if(!obj.status){
                            obj.status = true
                        }
                        return obj
                    })
                })
            }} className="markBtn">Mark all as read</button>
        </div>
    )
}