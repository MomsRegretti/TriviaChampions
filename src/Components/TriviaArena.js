import React from 'react'
import Question from './Question'

function TriviaArena({onTryAgain, getQuestion, display, displayQuestion, gameLost, gameRunning, onWrongAnswer, onRightAnswer, question}) {
  const handleClick = () => {
      displayQuestion()
      getQuestion()
  }
  const handleLoserClick = () => {
    onTryAgain()
  }
  return (
    <div className='trivia-arena'>
        {!display ? <button className='trivia-button' id='start-button' onClick={handleClick}>Let's Begin</button> : null}
        {gameRunning ? <Question onWrongAnswer={onWrongAnswer} onRightAnswer={onRightAnswer} question={question}/>: null}
        {gameLost? <div>
          <h4 style={{}}>GAME OVER</h4>
            <button className='trivia-button' onClick={handleLoserClick}>Try Again?</button>
          </div>
          : null}
    </div>
  )
}

export default TriviaArena