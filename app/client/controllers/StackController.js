import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { GAME_STATE_RECORD_KEYS } from 'records/GameStateRecord';
import StackView from 'views/Stack/StackView';

function mapStateToProps(state){
    return {
        stack: state.GameStateReducer.get(GAME_STATE_RECORD_KEYS.stack),
    };
}

function StackController({ stack }) {
    return (
        <StackView
            stack={stack}
        />
    );
}

StackController.propTypes = {
    stack: PropTypes.instanceOf(List).isRequired,
};

export default connect(mapStateToProps)(StackController);
