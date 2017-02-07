import React, {Component, PropTypes} from 'react';
import classes from './CatTail.css';

function CatTail(props) {
    return (
        <div className={classes.CatTail}>
            <div className={classes['CatTail__draw']}>Z</div>
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