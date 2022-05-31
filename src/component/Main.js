import React from "react"
import "./Main.css"
function Main(props){
    return(
        <div className="content">
        <div className="journal">
            <div>
            <img src={props.img} className="image"/>
            </div>
            <div>
            <p className="country">{props.country}</p>
            <h1 className="place">{props.place}</h1>
            <h3 className="date">{props.date}</h3>
            <p className="text">{props.text}</p>
            </div>
        </div>
        </div>
    )
}
export default Main