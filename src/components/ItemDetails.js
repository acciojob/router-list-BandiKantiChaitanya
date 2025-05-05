import React, { useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

function ItemDetails() {
    let {id}=useParams()
  return (
    <div>
        <h1>Item {id}</h1>
        <p> Description for Item {id}</p>
    </div>
  )
}

export default ItemDetails