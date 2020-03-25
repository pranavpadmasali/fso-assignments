import React from 'react'
//component that renders a single person's details.
const Detail = ({ name, number }) => {
    return (
      <>
        <li>{name} {number}</li>
      </>
    )
  }
export default Detail