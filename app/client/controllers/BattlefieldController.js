import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { GAME_STATE_RECORD_KEYS } from 'records/GameStateRecord';
import BattlefieldView from 'views/Battlefield/BattlefieldView';

function mapStateToProps(state){
    return {
        battlefield: state.GameStateReducer.get(GAME_STATE_RECORD_KEYS.battlefield),
    };
}

function BattlefieldController({ battlefield }) {
    return (
        <BattlefieldView
            battlefield={battlefield}
        />
    );
}

BattlefieldController.propTypes = {
    battlefield: PropTypes.instanceOf(List).isRequired,
};

export default connect(mapStateToProps)(BattlefieldController);
