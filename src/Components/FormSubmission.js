import React, { useState } from 'react'

function FormSubmission({gameLost, medals, onAddRecord, resetMedals}) {
  const [formData, setFormData] = useState({
    src: '',
    name: '',
    medals: 0,
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((formData) => ({...formData, [name]: value}) )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj= {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    }
    fetch('http://localhost:3001/champions',configObj)
    .then(r=> r.json())
    .then((submission) => {
      onAddRecord(submission)
      resetMedals()
      setFormData({
      src: '',
      name: '',
      medals: 0,
      })
    })
  }
  return (
    <form className='form-submit' onSubmit={handleSubmit}>
      <label className='form'>Image URL</label>
      <input 
        type = 'text'
        id='src'
        name='src'
        value={formData.src}
        onChange={handleChange} 
      />
      <label className='form'>Your Name</label>
      <input 
        type='text'
        id='name'
        name='name'
        onChange={handleChange}
        value={formData.name}
      />
      <label className='form'>Number of Medals</label>
      <input
        type="number"
        name="medals"
        id="medals"
        onChange={handleChange}
        value={formData.medals}

      />
      <button className="button" type='submit'>Submit</button>
    </form>
  )
}

export default FormSubmission