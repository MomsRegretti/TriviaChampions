import './App.css';
import Navigation from './Components/Navigation';
import {useState, useEffect} from 'react'
import Medalcontainer from './Components/Medalcontainer';
import FormSubmission from './Components/FormSubmission';
import Leaderboard from './Components/Leaderboard';
import TriviaArena from './Components/TriviaArena';
 
function App() {
  const [question, setQuestion] = useState([])
  const [display, setDisplay] = useState(false)
  const [gameRunning, setGameRunning] = useState(false)
  const [gameLost, setGameLost] = useState(false)
  const [medals, setMedals] = useState([])
  const [records, setRecords] = useState([])

  const getQuestion = () => {
    fetch('https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple')
    .then(r=>r.json())
    .then(data=> {
      setQuestion(data.results)
    })
  };
  
  useEffect((getQuestion),[])

  useEffect(() => {
    fetch('http://localhost:3001/champions')
    .then((r)=>r.json())
    .then((data)=>setRecords(data))
  },[])

  const onAddRecord = (newRecord) => {
    setRecords([...records, newRecord])
  }

  const onRightAnswer = (newMedal) => {
    getQuestion()
    setMedals([...medals, newMedal])
  }

  const onWrongAnswer = () => {
    setGameRunning(false)
    setGameLost(true)
    getQuestion()
  }
 
  const displayQuestion = () => {
  setDisplay(!display)
  setGameRunning(true)
}
  const onTryAgain = () => {
    setDisplay(!display)
    setGameLost(false)
    getQuestion()
    resetMedals()
  }
  const resetMedals = () => {
    setMedals([])
  }

  return (
    <div className="App-container">
      <div className='title'>
        <header>
          <h1>TRIVIA CHAMPIONS</h1>
        </header>
      </div>
        <Navigation/>
        <TriviaArena onTryAgain={onTryAgain} getQuestion={getQuestion} display={display} displayQuestion={displayQuestion} gameLost={gameLost} gameRunning={gameRunning} onWrongAnswer={onWrongAnswer} onRightAnswer={onRightAnswer} question={question[0]}/>
        <Medalcontainer medals={medals}/>
        <FormSubmission gameLost={gameLost} medals={medals} resetMedals={resetMedals} onAddRecord={onAddRecord}/>
        <Leaderboard records={records}/>
    </div>
  );
}
 
export default App;