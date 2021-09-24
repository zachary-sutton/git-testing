import React from "react"

function HomeContentCard(props){
    return(
        <div className="home-content-card">
            <h1>{props.name}</h1>
            <img src={props.src} />
            <p>{props.desc}</p>
        </div>
    )
}

export default HomeContentCard