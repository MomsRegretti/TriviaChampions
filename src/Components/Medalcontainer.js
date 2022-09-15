import React from 'react'

function Medalcontainer({medals}) {
  return (
    <div className='medal-container'>
      <p>Your Medals</p>
    {medals.map(medal => {
        return <img className = "img" key= {medal} alt='medal' src="https://images.vexels.com/media/users/3/194373/isolated/lists/e39f51c7a78159c8fb0610863f6fe339-golden-education-medal-icon.png" />
    })}
    </div>
  )
}

export default Medalcontainer