import React from 'react'

const Item = ({item, onToggleItem, onDeleteItem}) => {
  return (
    <div key={item.id} className='todo-items'>
        <input type="checkbox" checked={item.checked} className="todo-items-checkbox" onChange={() => onToggleItem(item.id)} />
        <span  style={item.checked ? { textDecoration: 'line-through'} : {}} className='todo-items-text'>
            { item.name }
        </span>
        <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </div>
  )
}

export default Item
