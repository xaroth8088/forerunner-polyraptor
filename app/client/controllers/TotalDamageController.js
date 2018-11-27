import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { GAME_STATE_RECORD_KEYS } from 'records/GameStateRecord';
import TotalDamageView from 'views/TotalDamage/TotalDamageView';

function mapStateToProps(state) {
    return {
        total_creature_damage: state.GameStateReducer.get(GAME_STATE_RECORD_KEYS.total_creature_damage),
    };
}

function TotalDamageController({ total_creature_damage }) {
    return (
        <TotalDamageView
            total_creature_damage={total_creature_damage}
        />
    );
}

TotalDamageController.propTypes = {
    total_creature_damage: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(TotalDamageController);
