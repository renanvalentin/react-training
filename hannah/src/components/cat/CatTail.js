import React, {Component, PropTypes} from 'react';
import './CatTail.css';

function CatTail(props) {
    return (
        <div className="CatTail">
            <div className="CatTail__draw">Z</div>
            <div>
                {props.children}
            </div>
        </div>
    );
}

CatTail.propTypes = {
    children: PropTypes.node.isRequired
};

export default CatTail;