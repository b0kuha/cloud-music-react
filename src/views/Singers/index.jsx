import React from 'react'

function Singers(props) {
	const { route } = props

	return <div>Singers {route}</div>
}

export default React.memo(Singers)
