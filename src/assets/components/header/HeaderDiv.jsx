import "./header.css"

export default function Header({counter, setObjArray, objArray}) {
    return(
        <div className="headerDiv">
            <h1>Notifications <span>{counter}</span></h1>
            <button onClick={()=> {
                setObjArray(()=> {
                    objArray.map(obj => {
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