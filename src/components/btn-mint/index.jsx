import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

function ButtonMint() {
	return (
		<div className='mint-btn-container'>
			<Link to="/mint">
				Mint Now
			</Link>
		</div>
	)
}

export default ButtonMint