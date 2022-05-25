import React from 'react'

function Rank(props) {
	const { route } = props
	return <div>Rank {route}</div>
}

export default React.memo(Rank)
