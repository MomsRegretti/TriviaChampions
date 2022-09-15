import React from 'react'
import Champ from './Champ'

function Leaderboard({records}) {

  return (
    <div className='leaderboard'>
      <b>HALL OF FAME</b>
    {records.map(record => {
      return <Champ key={record.id} name={record.name} src={record.src} medals={record.medals}/>
    })}
    </div>
  )
}

export default Leaderboard