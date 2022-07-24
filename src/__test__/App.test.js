import React from "react";
//import ReactDOM, { render, unmountComponentAtNode } from 'react-dom';
import { render, cleanup, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Table from '../components/Table';
import Map from '../components/Map';
import Navigator from '../components/Navigator';
import Header from '../components/Header';
import Data from '../components/Data';
import Greeting from '../components/Greeting';
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import {unmountComponentAtNode } from "react-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import Information from "../components/Information";

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    //root = createRoot(container);
    document.body.appendChild(container);
})

afterEach(() => {
    // cleanupon exiting
    unmountComponentAtNode(container)
    container.remove();
    container = null;
});

describe('Render Tests', () => {

    test('Map Renders', async() => {
        render(
        <Router>
            <Map/>
        </Router>, container)
    });

    test('Table Renders', async() => {
        render(
        <Router>
            <Table/>
        </Router>, container)
    });

    test('Header Renders', async() => {
        render(
        <Router>
            <Header/>
        </Router>, container)
    });

    test('Information Renders', async() => {
        render(
        <Router>
            <Information/>
        </Router>, container)
    });

    test('Greeting Renders', async() => {
        render(
        <Router>
            <Greeting/>
        </Router>, container)
    });

    test('Navigator Renders', async() => {
        render(
        <Router>
            <Map/>
        </Router>, container)
    });

})
