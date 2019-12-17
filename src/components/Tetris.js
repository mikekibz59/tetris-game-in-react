import React from 'react';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { createStage } from '../gameHelper';
import {
	StyledTetrisWrapper,
	StyledTetrisComponent,
} from './styles/StyledTetris';

const Tetris = () => {
	return (
		<StyledTetrisWrapper>
			<StyledTetrisComponent>
				<Stage stage={createStage()} />
				<aside>
					<div>
						<Display text='score' />
						<Display text='Rows' />
						<Display text='Level1' />
					</div>
					<StartButton />
				</aside>
			</StyledTetrisComponent>
		</StyledTetrisWrapper>
	);
};

export default Tetris;
