import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter } from 'reducers/Example/ExampleActions';
import { asyncIncrement } from 'reducers/Example/ExampleThunks';
import HomeView from 'views/Home/HomeView';

const mapStateToProps = state => ({
    count: state.ExampleReducer.getCount(),
});

const mapDispatchToProps = dispatch => ({
    onSimpleIncrement() {
        dispatch(incrementCounter());
    },
    onAsyncIncrement() {
        dispatch(asyncIncrement());
    },
    onLargeIncrement() {
        dispatch(incrementCounter(5));
    },
});

const HomeController = ({
    count, onSimpleIncrement, onAsyncIncrement, onLargeIncrement,
}) => (
    <HomeView
        count={count}
        onSimpleIncrement={onSimpleIncrement}
        onAsyncIncrement={onAsyncIncrement}
        onLargeIncrement={onLargeIncrement}
    />
);

HomeController.propTypes = {
    count: PropTypes.number.isRequired,
    onSimpleIncrement: PropTypes.func.isRequired,
    onAsyncIncrement: PropTypes.func.isRequired,
    onLargeIncrement: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeController);
