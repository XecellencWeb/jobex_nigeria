import React from 'react'

const Spinner = ({text}:{
    text:string
}) => {
  return (
    <div
        id="spinner"
        className="show spinner-container"
      >
        <div
          className="spinner-border text-primary"
          style={{width: "3rem" ,height: "3rem"}}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
        <p className="spinner-text">{text+'...' ||'Loading...'}</p>
      </div>
  )
}

export default Spinner
