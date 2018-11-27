import { incrementCounter } from 'reducers/GameState/ExampleActions';
import axios from 'axios';

export const asyncIncrement = () => ( // eslint-disable-line import/prefer-default-export
    async (dispatch, getState) => {
        let response;

        console.info(`Before fetching, our count was:${getState().ExampleReducer.getCount()}`);

        try {
            response = await axios({
                method: 'GET',
                url: 'http://localhost:8080',
            });
        } catch (err) {
            console.error(`Couldn't contact localhost:${err}`);
            return;
        }

        console.info(`Received response from localhost, which we will ignore for this example:${response.data}`);

        dispatch(incrementCounter());
    }
);
