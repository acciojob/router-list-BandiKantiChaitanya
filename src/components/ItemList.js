import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function ItemList() {
    let users=[
        {id:1},
        {id:2},
        {id:3}
    ]
  return (
    <div>
        <h1>Item List</h1>
        <ul>
            {
                users.map(user=>(
                    <li key={user.id}><Link to={`/items/${user.id}`} >Item {user.id}</Link></li>
                ))
            }
        </ul>
    </div>
  )
}

export default ItemList