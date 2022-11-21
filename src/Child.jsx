const Child = ({ setValue }) => {
	return (
		<>
			<div>Child</div>
			<button onClick={() => setValue("Parent Has Been Updated")}>
				change Parent Value
			</button>
		</>
	)
}

export default Child;