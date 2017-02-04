import React, {Component} from 'react';

import CatTail from './CatTail';
import CatHead from './CatHead';
import CatEyes from './CatEyes';
import CatMouth from './CatMouth';
import CatLegs from './CatLegs';
import CatLeg from './CatLeg';

import './Cat.css';

function Cat() {
    return (
        <div className='Cat'>
            <CatTail>
                <CatHead>
                    <CatEyes/>
                    <CatMouth/>
                </CatHead>
                <CatLegs>
                    <CatLeg align='left'/>
                    <CatLeg align='right'/>
                </CatLegs>
            </CatTail>
        </div>
    );
}

export default Cat;