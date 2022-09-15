import React from 'react'

function Questions({value,question,onRightAnswer,onWrongAnswer}) {

  return (
    <div>
        <button
        className='trivia-button'
        onClick={(e) => {
            if (e.target.value === question.correct_answer) {
                onRightAnswer(question.correct_answer[0])
            } else 
            onWrongAnswer()
        }}
        value = {value}>
            {value}
        </button>
    </div>
  )
}

export default Questions