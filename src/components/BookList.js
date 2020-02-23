import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

class BookList extends Component {
    static contextType = ThemeContext;

    render() {

        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <div className="book-list"
             style={{color: theme.syntax, background: theme.bg}}>
                <ul>
                    <li style={{background: theme.ui}}>Dustu chelere dol</li>
                    <li style={{background: theme.ui}}>The old man and the sea</li>
                    <li style={{background: theme.ui}}>Around the world in eighty days</li>
                </ul>
            </div>
        ); //end of return
    } //end of render()
} //end of BookList class comp

export default BookList;