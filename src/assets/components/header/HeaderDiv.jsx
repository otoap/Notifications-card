import "./header.css"

export default function Header() {
    return(
        <div className="headerDiv">
            <h1>Notifications <span>3</span></h1>
            <button className="markBtn">Mark all as read</button>
        </div>
    )
}