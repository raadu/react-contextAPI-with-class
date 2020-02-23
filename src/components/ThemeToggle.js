import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

class ThemeToggle extends Component {
    static contextType = ThemeContext;

    render() {
        const {toggleTheme} = this.context;

        return (
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        ); //end of return
    } //end of render()
} //end of ThemeToggle class comp

export default ThemeToggle;