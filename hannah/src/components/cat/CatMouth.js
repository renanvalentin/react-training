import React, {Component, PropTypes} from 'react';
import './CatMouth.css';

function CatMouth(props) {
    return (
        <div className="CatMouth CatMouth--align" style={{color: props.color}}>.</div>
    );
}

CatMouth.propTypes = {
    color: PropTypes.string
};

export default CatMouth;