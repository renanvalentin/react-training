import React, {Component} from 'react';

import Home from './components/scenes/Home';
import Cat from './components/cat/Cat';

import TextBox from './components/form/TextBox';

class App extends Component {
    render() {
        return (
            <Home>
                <Cat />
                <TextBox/>
            </Home>
        );
    }
}

export default App;
