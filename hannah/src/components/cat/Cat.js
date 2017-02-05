import React, {Component, PropTypes} from 'react';

import CatTail from './CatTail';
import CatHead from './CatHead';
import CatEyes from './CatEyes';
import CatMouth from './CatMouth';
import CatLegs from './CatLegs';
import CatLeg from './CatLeg';
import CatPoop from './CatPoop';

import './Cat.css';

function Cat(props) {
    const anatomy = props.anatomy;
    return (
        <div className='Cat'
             onClick={props.onCatClick}>
            <CatPoop show={props.showPoop}
                     onPoop={props.onPoop}>
                <CatTail>
                    <CatHead texture={anatomy.headTexture}>
                        <CatEyes color={anatomy.eyesColor}/>
                        <CatMouth color={anatomy.mouthColor}/>
                    </CatHead>
                    <CatLegs size={anatomy.legSize}>
                        <CatLeg align='left'/>
                        <CatLeg align='right'/>
                    </CatLegs>
                </CatTail>
            </CatPoop>
        </div>
    );
}

Cat.defaultProps = {
    anatomy: {}
};

Cat.propTypes = {
    anatomy: PropTypes.shape({
        headTexture: PropTypes.string,
        mouthColor: PropTypes.string,
        legSize: PropTypes.number,
        eyesColor: PropTypes.string
    }),
    onCatClick: PropTypes.func,
    showPoop: PropTypes.bool,
    onPoop: PropTypes.func
};

export default Cat;