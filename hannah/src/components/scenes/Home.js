import React, {PropTypes} from 'react';

import './Home.css';

function Home(props) {
    return (
        <div className="Home">
            {props.children}
        </div>
    );
}

Home.propTypes = {
    children: PropTypes.node.isRequired
};

export default Home;












      /*
import React, {Component, PropTypes} from 'react';
import './Home.css';

function Home(props) {
    return (
        <div className="Home">
            {props.children}
        </div>
    );
}

Home.propTypes = {
    children: PropTypes.node.isRequired
};

export default Home;

          */