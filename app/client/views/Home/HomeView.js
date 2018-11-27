import BattlefieldController from 'controllers/BattlefieldController';
import ButtonsController from 'controllers/ButtonsController';
import StackController from 'controllers/StackController';
import TotalDamageController from 'controllers/TotalDamageController';
import React from 'react';

import './HomeView.scss';

function HomeView() {
    return (
        <div className="home">
            <div className="home__title">Forerunner of the Empire + Polyraptor Simulator</div>
            <ButtonsController/>
            <StackController/>
            <BattlefieldController/>
            <TotalDamageController/>
        </div>
    );
}

HomeView.propTypes = {};

export default HomeView;
