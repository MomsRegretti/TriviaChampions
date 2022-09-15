import React from 'react'
import Questions from './Questions'

function Question({question, onRightAnswer, onWrongAnswer}) {

    function encodeQuestion(string) {
        return string.replace(/&quot;/g, '\"')
    }

    const incorrect_answers = question.incorrect_answers
    const options = [[...incorrect_answers]+ "," + question.correct_answer]
    const arrOpt = options[0].split(",")
    const sortedOptions = arrOpt.sort()
    
    return (
        <div className='question'>

                <p>{encodeQuestion(question.question)}</p>
                {sortedOptions.map((option) => {
                return <Questions onWrongAnswer={onWrongAnswer} onRightAnswer={onRightAnswer} question={question} key={option} value={option}/>
                })}
        </div>
    )
}
 
export default Question