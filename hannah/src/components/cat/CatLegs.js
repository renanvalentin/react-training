import React, {Component, PropTypes} from 'react';
import './CatLegs.css';

function CatLegs(props) {
    return (
        <div className="CatLegs">
            {props.children}
        </div>
    );
}

CatLegs.propTypes = {
    children: PropTypes.node.isRequired
};

export default CatLegs;