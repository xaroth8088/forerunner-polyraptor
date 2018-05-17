import { incrementCounter } from 'reducers/Example/ExampleActions';
import axios from 'axios';

export const asyncIncrement = () => (
    async (dispatch, getState) => {
        let response;
        try {
            response = await axios({
                method: 'GET',
                url: 'http://localhost:8080'
            });
        } catch (err) {
            console.error(`Couldn't contact localhost:${err}`);
            return;
        }

        console.info(`Received response from localhost:${response.data}`);

        dispatch(incrementCounter());
    }
);
