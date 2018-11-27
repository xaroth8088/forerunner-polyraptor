import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import CardView from 'views/CardView/CardView';

import './BattlefieldView.scss';

function BattlefieldView({ battlefield }) {
    if (battlefield.size === 0) {
        return (
            <div className="battlefield">
                <div className="battlefield__empty">
                    The battlefield is currently empty
                </div>
            </div>
        );
    }
    return (
        <div className="battlefield">
            <div className="battlefield__count">
                {`${battlefield.size} creature(s) on the battlefield`}
            </div>
            {
                battlefield
                    .map(
                        card => <CardView card={card}/>
                    )
                    .toJS()
            }
        </div>
    );
}

BattlefieldView.propTypes = {
    battlefield: PropTypes.instanceOf(List).isRequired
};

export default BattlefieldView;
