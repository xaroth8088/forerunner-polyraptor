import PropTypes from 'prop-types';
import React from 'react';

import './TotalDamageView.scss';

function TotalDamageView({ total_creature_damage }) {
    return (
        <div className="total-damage">
            <h2>Damage Dealt to Each Creature</h2>
            {total_creature_damage}
        </div>
    );
}

TotalDamageView.propTypes = {
    total_creature_damage: PropTypes.number.isRequired
};

export default TotalDamageView;
