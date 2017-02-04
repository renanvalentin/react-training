import React, {Component, PropTypes} from 'react';
import './CatLeg.css';

function CatLeg(props) {
    const align = props.align === 'left' ? 'CatLeg--left' : 'CatLeg--right';

    return (
        <div className={`CatLeg ${align}`}/>
    );
}

CatLeg.propTypes = {
    align: PropTypes.oneOf(['left', 'right']).isRequired
};

export default CatLeg;