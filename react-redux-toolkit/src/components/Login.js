import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user';

function Login() {
	const dispatch = useDispatch();

	return (
		<div>
			<button onClick={() => { 
				dispatch(login({ name:'shunsuke', age: '41', email:'s.baba0610@gmail.com' }))
				}}>Login</button>
			<button onClick={() => { dispatch(logout()) }}>logout</button>
		</div>
	)
}

export default Login
