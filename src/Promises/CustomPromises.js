import React from 'react';

class CustomPromises extends React.Component {
    state ={
        message: null
    }

    componentDidMount() {
        this.makeAPromise()
    }

    makeAPromise = () => {

    }

    render() {
        return (
            <div>
                {this.state.message ? this.state.message : 'Promise pending...'}
                <button onClick={this.makeAPromise}>Another Promise</button>
            </div>
        );
    }
};

export default CustomPromises;