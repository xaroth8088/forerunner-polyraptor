export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export const incrementCounter = (amount = 1) => ({
    type: INCREMENT_COUNTER,
    payload: {
        amount,
    },
});
