import React from 'react'

function EventCard(props) {
  return (
    <>
      <div className="flex">
        <div className="Notes" style={{boxSizing:'border-box'}}>
            <h5 className=''>{props.name}</h5>
            <p className='m-0 p-0'> <span className='fw-bold text-muted '>Date:</span> {new Date(props.date).toLocaleDateString()} </p>
            <p className='m-0 p-0'> <span className='fw-bold text-muted '>Time:</span> {new Date(props.date).toLocaleTimeString()} </p>
            <p className='m-0 p-0'> <span className='fw-bold text-muted '>Location:</span> {props.location} </p>
            <p className='m-0 p-0' style={{boxSizing:'border-box',overflowY:'scroll'}}> <span className='fw-bold text-muted '>Description:</span> {props.description} </p>
        </div>
      </div>

      </>
  )
}

export default EventCard;