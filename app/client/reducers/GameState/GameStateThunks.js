import { GAME_STATE_RECORD_KEYS } from 'records/GameStateRecord';
import { processStack } from 'reducers/GameState/GameStateActions';

export function autoPlay() {
    return (dispatch, getState) => {
        const stackSize = getState().GameStateReducer.get(GAME_STATE_RECORD_KEYS.stack).size;
        if (stackSize === 0) {
            return;
        }

        dispatch(processStack());

        setTimeout(
            () => {
                dispatch(autoPlay());
            },
            1000 - 40 * stackSize
        );
    };
}
