import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/theme';

function ChangeColor() {
	const [color, setColor] = useState('');
	const dispatch = useDispatch();

	return (
		<div>
			<select onChange={(e)=> {
				setColor(e.target.value);
			}}>
				<option value="">----</option>
				<option value="blue">Blue</option>
				<option value="red">Red</option>
				<option value="green">Green</option>
				<option value="orange">Orange</option>
			</select>
			<button onClick={()=>{dispatch(changeColor(color))}}>CHANGE COLOR</button>
		</div>
	)
}

export default ChangeColor;
