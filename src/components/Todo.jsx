import React from 'react'
import { useState } from 'react'
import Form from './Form'
import List from './List';

const Todo = () => {
    const [items, setItems] = useState([]);

    function handleAddItem(item) {
        setItems([...items, item]);
    }

    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id != id));
    }

    function handleToggleItem(id) {
        setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked} : item )));
    }

    return (

        <div className='todo'>
            <div className='todo-header'>To-Do List</div>
            <Form onAddItem={handleAddItem}/>
            <List items={items} onToggleItem={handleToggleItem} onDeleteItem={handleDeleteItem} />

        </div>
    )
}

export default Todo
