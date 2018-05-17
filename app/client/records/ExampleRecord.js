import { Record } from 'immutable';

export const EXAMPLE_RECORD_KEYS = Object.freeze({
    count: 'count',
});

const exampleRecordSchema = {
    [EXAMPLE_RECORD_KEYS.count]: 0,
};

class ExampleRecord extends Record(exampleRecordSchema, 'ExampleRecord') {
    getCount() {
        return this.get(EXAMPLE_RECORD_KEYS.count) || 0;
    }

    setCount(newCount) {
        return this.set(EXAMPLE_RECORD_KEYS.count, newCount);
    }

    increment() {
        return this.setCount(this.getCount() + 1);
    }
}

export default new ExampleRecord();
