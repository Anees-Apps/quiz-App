import React, { useState } from 'react';
import {QuizData} from '../Data/QuizData';
import QuizResult from './Quiz.Result';
function Quiz(){
    const [CurrentQuestion,setCurrentQuestion]=useState(0);
    const[score,setScore]=useState(0);
    const[clickedOption,setClickedOption]=useState(0);
    const[showResult,setShowResult]=useState(false);
    const changeQuestion= ()=>{
        console.log(CurrentQuestion)
        updateScore();
        if(CurrentQuestion<QuizData.length-1){
            console.log("quiz lenght", QuizData.length)
        setCurrentQuestion(CurrentQuestion+1);
        setClickedOption(0);
        }
    else{
        setShowResult(true);
    }
    
    }
    const updateScore=()=>{
        if (clickedOption===QuizData[CurrentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll =()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
return(
    <div>
        <p className="heading-txt">QUIZ App</p>
        <div className="container">
        
            {showResult ?(
                <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
            ):(
            
            <>
            <div className="question -container">
                <span id="question-number">{CurrentQuestion+1}.</span>
                <span id ="question-txt">{QuizData[CurrentQuestion].question}</span>
            </div>
                <div className="option-container">
                {QuizData[CurrentQuestion].option.map((option,i)=>{
                    return(
                        <button className={`option-btn ${
                                clickedOption === i+1 ?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}
                </div>

                <input type="button" value="Next" id="Next-Button" onClick={changeQuestion}></input>
                </>)}
        </div>
      
    </div>
)
}
export default Quiz;