import React from 'react';

import Title from './Title';
import MissionStatement from './MissionStatement';
import Testimonials from './Testimonials';
import Portal from './Portal';

import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";
function LandingPage() {
    return (
        <div>
            <Title />
            <MissionStatement />
            <Testimonials />
            <Portal />
            <header className="App-header"></header>
        </div>
    );
}

export default LandingPage;
