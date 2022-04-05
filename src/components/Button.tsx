import React from 'react';

const Button=({text}) => {
	return (
				<div className="button flex-row-vstart-hstart">
					<p className="button-text flex-hcenter">{text}</p>
				</div>
	);
};

export default Button;
