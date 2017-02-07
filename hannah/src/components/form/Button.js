import React, {PropTypes} from 'react';

import './Button.css';

function Button({onClick, text}) {
    return (
        <button onClick={onClick} className="Button">
            {text}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string
};

export default Button;