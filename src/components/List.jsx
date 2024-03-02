import React from 'react'
import Item from './Item'

const List = ({items, onToggleItem, onDeleteItem}) => {
  return (
    <div className='todo-container'>
        { items.map((item) => (
            <Item item={item} key={item.id} onToggleItem={onToggleItem} onDeleteItem={onDeleteItem} />
        ))}
    </div>
  )
}

export default List
