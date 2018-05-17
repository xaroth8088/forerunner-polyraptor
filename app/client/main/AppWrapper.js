import HomeController from "controllers/HomeController";
import React from 'react'
import { hot } from 'react-hot-loader';
import './client.scss';

const AppWrapper = () => (<HomeController/>);

export default hot(module)(AppWrapper);
