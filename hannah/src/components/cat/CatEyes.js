import React, {Component, PropTypes} from 'react';
import './CatEyes.css';

function CatEyes(props) {
    return (
        <div className="CatEyes CatEyes--align" style={{color: props.color}}>^^</div>
    );
}

CatEyes.propTypes = {
  color: PropTypes.string
};

export default CatEyes;