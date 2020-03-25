import React from 'react'
//component that renders a single person's details.
const Filter = ({ filterVal, handleFilter }) => {
    return (
      <div>
          filter shown with: <input value={filterVal} onChange={handleFilter}/>
      </div>
    )
  }

export default Filter