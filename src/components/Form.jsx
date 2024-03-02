import React from 'react'
import { useState } from 'react'

const Form = ({onAddItem}) => {
	const [name, setName] = useState('');

	function handleSubmit(e){
		e.preventDefault();

		if (!name) return;

		const newItem = {name, checked:false, id: Date.now()};
		onAddItem(newItem);

		setName('');
	}

	return (
		<form className='todo-add' onSubmit={handleSubmit}>
			<input type="text" placeholder='Add Input' className='todo-input' value={name} onChange={(e) => setName(e.target.value)} />
			<button className='todo-add-btn'>ADD</button>
		</form>
	)
}

export default Form
