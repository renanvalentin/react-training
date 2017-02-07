import React, {Component, PropTypes} from 'react';

import './CatPoop.css';

class CatPoop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showingPoop: this.props.show
        };

        this.clearSetTimeout = null;
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.showingPoop
            != nextProps.show) {
            this.setState({
                showingPoop: nextProps.show
            });
        }

        if (nextProps.show) {
            this.clearSetTimeout = setTimeout(() => {
                this.props.onPoop();
            }, 2000);
        }
    }

    componentWillUnmount() {
        if (this.clearSetTimeout) {
            this.clearSetTimeout();
        }
    }

    render() {
        const animation = this.state.showingPoop
            ? 'CatPoop__icon--animate'
            : '';

        return (
            <div className="CatPoop">
                <div className={`CatPoop__icon ${animation}`}>&#128169;</div>
                <div className="CatPoop__body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

CatPoop.propTypes = {
    children: PropTypes.node,
    show: PropTypes.bool,
    onPoop: PropTypes.func
};

export default CatPoop;