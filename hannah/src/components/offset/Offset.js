import React, {PropTypes} from 'react';

function Offset(props) {
    return (
        <div style={{
            position: 'absolute',
            [props.direction]: props.x,
            top: props.y
        }}>
            {props.children}
        </div>
    )
}

Offset.defaultProps = {
    direction: 'left'
};

Offset.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    direction: PropTypes.oneOf(['left', 'right'])
};

export default Offset;