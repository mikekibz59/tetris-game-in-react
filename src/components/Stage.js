import React from 'react';
import Cell from './Cell';

const Stage = ({ stage }) => (
	<div>
		{console.log(stage)}
		{stage.map((row) =>
			row.map((cell, idx) => <Cell key={idx} type={cell[0]} />)
		)}
	</div>
);

export default Stage;
