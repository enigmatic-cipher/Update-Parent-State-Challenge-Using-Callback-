import './App.css'
import Child from './Child'
import { useState } from 'react'

export default function App() {
	const [value, setValue] = useState("I need to update from child")

	return (
		<>
			<h1>Update Parent State Challenge</h1>
			<div>Parent</div>
			<div>{value}</div>
			<button onClick={() => setValue("I need to update from child")}>Reset</button>
			<br></br>
			<Child setValue={setValue} />
		</>
	)
}
