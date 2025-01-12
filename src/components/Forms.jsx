import React from 'react'
import './form.css'

const Forms = () => {
  return (
    <form>
        <p className="tag">Book Your Train Ticket</p>
      <label htmlFor="">From
      <input type="text" placeholder="Enter Departure Station"/>
      </label>
      <label htmlFor="">To
        <input type="text" placeholder="Enter Arrival Station"/>
      </label>
      <label htmlFor="">
        Date
        <input type="date"/>
      </label>
      <button>Search Trains</button>
    </form>
  )
}

export default Forms
