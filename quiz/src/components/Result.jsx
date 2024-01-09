import React from "react";
import '../css/Result.css'
class Result extends React.Component{
    render(){
        return(
            <div className="reult_div">
                <h2>Result</h2>
                <div className="dialogue_box">
                    <h3>You need more practice</h3>
                    <h2>Your score is 20 %</h2>
                    <div className="result_question">
                        <div className="question">
                            <h2 className="question_h">Total number of question</h2>
                            <h3>15</h3>
                        </div>
                        <div className="question">
                            <h2 className="question_h">Total number of question</h2>
                            <h3>15</h3>
                        </div>
                        <div className="question">
                             <h2 className="question_h">Total number of question</h2>
                            <h3>15</h3>
                        </div>
                        <div className="question">
                            <h2 className="question_h">Total number of question</h2>
                            <h3>15</h3>
                        </div>
                    </div>
                    <div className="button_div">
                        <button className="button">Play again</button>
                        <button className="button">Home</button>

                    </div>
                </div>
            </div>
        )
    }
}

export default Result