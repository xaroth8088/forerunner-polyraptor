import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import './StackView.scss';
import { EVENT_TYPES } from 'records/GameStateRecord';

function StackView ({ stack }) {
    if (stack.size === 0) {
        return (
            <div className="stack">
                <div className="stack__empty">
                    The stack is currently empty
                </div>
            </div>
        )
    }
    return (
        <div className="stack">
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
