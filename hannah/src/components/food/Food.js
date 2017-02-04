import React, {Component, PropTypes} from 'react';
import './Food.css';

function Food(props) {
    return (
        <div className="Food">
            {props.children}
        </div>
    );
}

Food.propTypes = {
    children: PropTypes.node.isRequired
};

export default Food;