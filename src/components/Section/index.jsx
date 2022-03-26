import React from 'react'

function Section({id, children, className}) {
	return (
		<section id={id} className={className}>
			{children}
		</section>
	)
}

export default Section