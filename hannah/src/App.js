import React, {Component} from 'react';

import Home from './components/scenes/Home';

import Cat from './components/cat/Cat';

import TextBox from './components/form/TextBox';
import Button from './components/form/Button';

import Offset from './components/offset/Offset';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            foods: [],
            showingPoop: false
        };

        this.minFood = 2;

        this.addFood = this.addFood.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.displayPoop = this.displayPoop.bind(this);
        this.hidePoop = this.hidePoop.bind(this);
    }

    addFood() {
        const foods = this.state.foods;

        if (this.state.inputValue) {
            foods.push(this.state.inputValue);

            this.setState({
                foods: foods,
                inputValue: ''
            });

        }
    }

    updateInputValue(value) {
        this.setState({
            inputValue: value
        });
    }

    displayPoop() {
        if (this.state.foods.length > this.minFood) {
            this.setState({
                showingPoop: true,
                foods: []
            });
        }
    }

    hidePoop() {
        this.setState({
            showingPoop: false
        });
    }

    render() {
        return (
            <Home>
                <Cat onCatClick={this.displayPoop}
                     showPoop={this.state.showingPoop}
                     onPoop={this.hidePoop}/>
                <Offset direction='right'
                        x={10}
                        y={100}>
                    <TextBox value={this.state.inputValue}
                             onChange={this.updateInputValue}/>
                    <Button onClick={this.addFood}
                            text='ADD'/>
                    <ul>
                        {
                            this.state.foods.map((food, index) => (
                                <li key={'foods:' + index}>{food}</li>
                            ))
                        }
                    </ul>
                </Offset>
            </Home>
        );
    }
}

export default App;
