import React, { Component } from 'react';

export default class AsyncAwait extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getUser()
        this.getAnotherUser()
    }
    
    getUser = () => {
    
    }
    
    getAnotherUser() {
        
    }

    render() {
        const mappedUsers = this.state.users.length >= 1 ? this.state.users.map((person, index) => (
            <div key={index}>
                <img src={person.picture} alt=""/>
                <br/>
                {person.firstName}
                <br/>
                {person.lastName}
            </div>
        )) : 'Promise pending...'

        return (
            <div>
                {mappedUsers}
            </div>
        );
    }
}