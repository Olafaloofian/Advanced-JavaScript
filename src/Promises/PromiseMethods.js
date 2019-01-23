import React, { Component } from 'react';

export default class PromiseMethods extends Component {
    state = {
        allResponses: null,
        raceWinner: null
    }

    componentDidMount() {
        this.multiplePromises()
    }

    multiplePromises = () => {

    }

    promiseRace = () => {

    }

    render() {
        return (
            <div>
                {this.state.allResponses ? this.state.allResponses : 'Promise pending...'}
                <br/>
                <button onClick={this.promiseRace}>RACE!</button>
                <br/>
                AND THE WINNER IS: {this.state.raceWinner ? this.state.raceWinner : '...'}
            </div>
        );
    }
}