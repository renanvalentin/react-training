import React, {Component, PropTypes} from 'react';

import './TextBox.css';

class TextBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <input type="text"
                   className="TextBox"
                   onChange={this.onChange}
                   value={this.state.value}/>
        );
    }
}

TextBox.propTypes = {
    children: PropTypes.node.isRequired
};

export default TextBox;