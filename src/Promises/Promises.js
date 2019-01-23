import React, { Component } from 'react';

export default class Promises extends Component {
    state = {
        joke: null,
        finally: null
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                {this.state.joke ? this.state.joke.value : 'Promise pending...'}
                <br/>
                {this.state.finally && this.state.finally}
            </div>
        );
    }
}