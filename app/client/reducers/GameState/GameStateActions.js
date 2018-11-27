export const ADD_POLYRAPTOR = 'ADD_POLYRAPTOR';
export const ADD_FORERUNNER = 'ADD_FORERUNNER';
export const PROCESS_STACK = 'PROCESS_STACK';
export const RESET = 'RESET';
export const CAST_DINOSAUR = 'CAST_DINOSAUR';
// TODO: remove_*

export function addPolyraptor() {
    return {
        type: ADD_POLYRAPTOR,
        payload: {},
    };
}

export function addForerunner() {
    return {
        type: ADD_FORERUNNER,
        payload: {},
    };
}

export function reset() {
    return {
        type: RESET,
        payload: {},
    };
}

export function processStack() {
    return {
        type: PROCESS_STACK,
        payload: {},
    };
}

export function castDinosaur() {
    return {
        type: CAST_DINOSAUR,
        payload: {},
    };
}

