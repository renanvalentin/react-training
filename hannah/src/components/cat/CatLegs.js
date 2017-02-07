import React, {Component, PropTypes} from 'react';
import './CatLegs.css';

function CatLegs(props) {
    return (
        <div className="CatLegs" style={{height: `${props.size}px`}}>
            {props.children}
        </div>
    );
}

CatLegs.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.string
};

export default CatLegs;