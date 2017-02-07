import React, {Component, PropTypes} from 'react';

import './TextBox.css';

function TextBox({value, onChange}) {
    return (
        <input type="text"
               className="TextBox"
               value={value}
               onChange={({target}) => onChange(target.value)}/>
    );
}

TextBox.defaultProps = {
    onChange: () => false,
    value: ''
};

TextBox.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
};

export default TextBox;