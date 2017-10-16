import { h, render, Component } from 'preact';

/** @jsx h */

import { App } from './components/App';

$(document).ready(function(){
    render(<App />,document.getElementById('app'));
})
