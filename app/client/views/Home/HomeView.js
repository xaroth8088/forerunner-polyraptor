import React from 'react';
import PropTypes from 'prop-types';
import Button from '@wikia/react-design-system/components/Button';

import './HomeView.scss';

const HomeView = ({
    count, onSimpleIncrement, onAsyncIncrement, onLargeIncrement,
}) => (
    <div className="home">
        <div className="home__title">Welcome to the Fandom React Boilerplate!</div>
        <div className="home__count">
            {`Current count: ${count}`}
        </div>
        <Button onClick={onSimpleIncrement}>Simple Increment</Button>
        <Button onClick={onAsyncIncrement}>Async Increment</Button>
        <Button onClick={onLargeIncrement}>Large Increment</Button>
    </div>
);

HomeView.propTypes = {
    count: PropTypes.number.isRequired,
    onSimpleIncrement: PropTypes.func.isRequired,
    onAsyncIncrement: PropTypes.func.isRequired,
    onLargeIncrement: PropTypes.func.isRequired,
};

export default HomeView;
