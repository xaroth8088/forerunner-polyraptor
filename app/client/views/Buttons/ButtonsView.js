import PropTypes from 'prop-types';
import React from 'react';

import './ButtonsView.scss';

function ButtonsView({ addButtonsEnabled, onAddPolyraptor, onAddForerunner, onReset, onNextStep, onCastDinosaur }) {
    return (
        <div className="buttons">
            <button type="button" onClick={onReset}>Reset Game State</button>
            <button type="button" onClick={onAddPolyraptor} disabled={!addButtonsEnabled}>Add Polyraptor</button>
            <button type="button" onClick={onAddForerunner} disabled={!addButtonsEnabled}>Add Forerunner</button>
            <button type="button" onClick={onNextStep} disabled={addButtonsEnabled}>Next Step</button>
            <button type="button" onClick={onCastDinosaur} disabled={!addButtonsEnabled}>Start Shenanigans (by casting a dinosaur of some sort)</button>
        </div>
    );
}

ButtonsView.propTypes = {
    onAddPolyraptor: PropTypes.func.isRequired,
    onAddForerunner: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onNextStep: PropTypes.func.isRequired,
    onCastDinosaur: PropTypes.func.isRequired,
    addButtonsEnabled: PropTypes.bool.isRequired,
};

export default ButtonsView;
