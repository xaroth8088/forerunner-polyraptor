import React from 'react';
import PropTypes from 'prop-types';
import './HomeView.scss';

const HomeView = (props) => (
    <div className="home">
        <div className="home__title">Welcome to the Fandom React Boilerplate!</div>
        <div className="home__count">Current count: {props.count}</div>
        <button onClick={props.onSimpleIncrement}>Simple Increment</button>
        <button onClick={props.onAsyncIncrement}>Async Increment</button>
    </div>
);

HomeView.propTypes = {
    count: PropTypes.number.isRequired,
    onSimpleIncrement: PropTypes.func.isRequired,
    onAsyncIncrement: PropTypes.func.isRequired,
};

export default HomeView;
