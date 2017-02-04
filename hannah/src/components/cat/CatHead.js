import React, {Component, PropTypes} from 'react';
import './CatHead.css';

function CatHead(props) {
    return (
        <div className="CatHead">
            {props.children}
        </div>
    );
}

CatHead.propTypes = {
    children: PropTypes.node.isRequired
};

export default CatHead;