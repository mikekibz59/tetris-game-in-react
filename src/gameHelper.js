export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

/**
 * Creates a grid (20 x 12)
 * fills each sets [0, 'clear']
 */
export const createStage = () => {
	return Array.from(Array(STAGE_HEIGHT), () =>
		new Array(STAGE_WIDTH).fill([0, 'clear'])
	);
};
