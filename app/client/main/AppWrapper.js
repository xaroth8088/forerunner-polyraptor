import HomeView from 'views/Home/HomeView';
import React from 'react';
import { hot } from 'react-hot-loader';
import './client.scss';

const AppWrapper = () => (<HomeView />);

export default hot(module)(AppWrapper);
