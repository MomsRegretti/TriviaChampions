import React from 'react'

function Champ({src,name,medals}) {
    const medalArray = new Array(medals).fill(1)
  return (
    <div className='leaderboard-container'>
        <img className='img' alt="A legend" src={src}/>
        <span className='submission-text'>{name}</span>
        {medalArray.map((medal) => {
            return <img className ="img" key= {medal} alt='medal' src="https://images.vexels.com/media/users/3/194373/isolated/lists/e39f51c7a78159c8fb0610863f6fe339-golden-education-medal-icon.png"></img>
        })}
    </div>
  )
}

export default Champ