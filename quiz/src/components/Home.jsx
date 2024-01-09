import React from "react";
import '../css/Home.css'
class Home extends React.Component{
    render(){
        return(
            <div className="container">
                <h1>Quiz App</h1>
                <button className="play_button">Play</button>
            </div>
        )
    }
}

export default Home