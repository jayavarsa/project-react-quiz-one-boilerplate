import React from "react";
import '../css/Quiz.css'
class Quiz extends React.Component{
    render(){
        return(
            <div className="main-container">
                <h1 className="heading">Question</h1>
                <div className="question_num">
                    <h3>1 of 15</h3>
                </div>
                <h3 id="question" className="content">What is the capital city of France?</h3>
                <div className="options">
                    <div className="answer">Dog</div>
                    <div className="answer">Cat</div>
                    <div className="answer">Elephant</div>
                    <div className="answer">Goat</div>
                </div>
                <div className="buttons_div">
                    <button className="buttons" id="b1">previous</button>
                    <button className="buttons" id="b2">Next</button>
                    <button className="buttons" id="b3">Quit</button>
                </div>
            </div>
        )
    }
}

export default Quiz