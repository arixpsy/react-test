import React from 'react'

type TestProps = {
	children?: React.ReactNode
}

const Test = ({ children }: TestProps) => {
	return (
		<div>
			<p>This is a Test Component</p>
			{children}
			<button>Click me</button>
			{import.meta.env.VITE_TEST}
			{import.meta.env.VITE_CONFIG_VALUE}
		</div>
	)
}

export default Test
