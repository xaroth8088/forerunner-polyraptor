import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { GAME_STATE_RECORD_KEYS } from 'records/GameStateRecord';
import { addForerunner, addPolyraptor, processStack, reset, castDinosaur } from 'reducers/GameState/GameStateActions';
import ButtonsView from 'views/Buttons/ButtonsView';

function mapStateToProps(state) {
    return {
        addButtonsEnabled: state.GameStateReducer.get(GAME_STATE_RECORD_KEYS.stack).size === 0,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onAddPolyraptor() {
            dispatch(addPolyraptor());
        },

        onAddForerunner() {
            dispatch(addForerunner());
        },

        onReset() {
            dispatch(reset());
        },

        onNextStep() {
            dispatch(processStack());
        },

        onCastDinosaur() {
            dispatch(castDinosaur());
        }
    };
}

function ButtonsController({ addButtonsEnabled, onAddPolyraptor, onAddForerunner, onReset, onNextStep, onCastDinosaur }) {
    return (
        <ButtonsView
            addButtonsEnabled={addButtonsEnabled}
            onCastDinosaur={onCastDinosaur}
            onAddPolyraptor={onAddPolyraptor}
            onAddForerunner={onAddForerunner}
            onReset={onReset}
            onNextStep={onNextStep}
        />
    );
}

ButtonsController.propTypes = {
    onCastDinosaur: PropTypes.func.isRequired,
    onAddPolyraptor: PropTypes.func.isRequired,
    onAddForerunner: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onNextStep: PropTypes.func.isRequired,
    addButtonsEnabled: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsController);
