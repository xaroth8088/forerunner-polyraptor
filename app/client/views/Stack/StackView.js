import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { EVENT_TYPES } from 'records/GameStateRecord';

import './StackView.scss';

function StackView({ stack }) {
    if (stack.size === 0) {
        return (
            <div className="stack">
                <div className="stack__empty">
                    The stack is currently empty
                </div>
            </div>
        );
    }
    return (
        <div className="stack">
            <div className="stack__count">
                {`${stack.size} events(s) pending on the stack`}
            </div>
            {
                stack
                    .reverse()
                    .map(
                        event => (
                            <div className="stack__event">
                                {event === EVENT_TYPES.FORERUNNER_ETB ? '1 damage to all creatures' : 'create Polyraptor token'}
                            </div>
                        )
                    )
                    .toJS()
            }
        </div>
    );
}

StackView.propTypes = {
    stack: PropTypes.instanceOf(List).isRequired
};

export default StackView;
