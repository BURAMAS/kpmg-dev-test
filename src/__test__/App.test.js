import React from "react";
import ReactDOM from 'react-dom';
import { renderer, cleanup, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Information from '../components/Information';
import Table from '../components/Table';
import Map from '../components/Map';
import Navigator from '../components/Navigator';
import Header from '../components/Header';
import Data from '../components/Data';
import Greeting from '../components/Greeting';
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";


afterEach(cleanup);

test('Renders Table', () =>{
    const div = document.createElement('div');
    const root = createRoot(div)
    root.render(<Table/>)
}

);

test('Renders Map', () =>{
    const div = document.createElement('div');
    const root = createRoot(div)
    root.render(<Map/>)
}
)

test('Renders Header', () =>{
    const div = document.createElement('div');
    const root = createRoot(div)
    root.render(<Header/>)
}
)

test('Renders Navigator', () =>{
    const div = document.createElement('div');
    const root = createRoot(div)
    root.render(<Navigator/>)
}
)

test('Renders Greeting', () =>{
    const div = document.createElement('div');
    const root = createRoot(div)
    root.render(<Greeting/>)
}
)
