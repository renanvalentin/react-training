import React, {Component, PropTypes} from 'react';
import './CatHead.css';

function CatHead(props) {
    return (
        <div className="CatHead" style={{background: props.texture}}>
            {props.children}
        </div>
    );
}

CatHead.propTypes = {
    children: PropTypes.node.isRequired,
    texture: PropTypes.string
};

export default CatHead;