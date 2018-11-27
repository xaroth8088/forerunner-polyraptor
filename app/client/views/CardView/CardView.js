import PropTypes from 'prop-types';
import React from 'react';
import CardRecord, { CARD_NAMES, CARD_RECORD_KEYS } from 'records/CardRecord';

import './CardView.scss';

function CardView({ card }) {
    return (
        <div className="card">
            {
                card.get(CARD_RECORD_KEYS.name) === CARD_NAMES.FORERUNNER ?
                    <img src="https://img.scryfall.com/cards/small/en/rix/102.jpg"/> :
                    <img src="https://img.scryfall.com/cards/small/en/rix/144.jpg"/>
            }
            {
                card.get(CARD_RECORD_KEYS.damage) > 0 ?
                    <div className="card__damage">
                        {card.get(CARD_RECORD_KEYS.damage)}
                    </div> :
                    false
            }
        </div>
    );
}

CardView.propTypes = {
    card: PropTypes.instanceOf(CardRecord.constructor).isRequired
};

export default CardView;
