import React, { Component } from 'react';

export default class AsyncAwait extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getUser()
        this.getAnotherUser()
    }

    // #1 Let's make a call to a random user generator API, again using fetch.
    getUser = () => {
        fetch('https://randomuser.me/api/').then(response => {
            response.json().then(person => {
                // Especially when dealing with a new API, putting a console log here is always a really smart thing to do!
                console.log('------------ person', person)
                // Our state value is an array, but we can't push to it directly (no mutating state), so let's make a copy using the spread operator and push our value to that array.
                const newUsers = [...this.state.users]
                newUsers.push({firstName: person.results[0].name.first, lastName: person.results[0].name.last, picture: person.results[0].picture.large})
                this.setState({
                    users: newUsers
                })
            }).catch(error => {
                console.error('Error in .json():', error)
            })
        }).catch(error => {
            console.error('Error in getUser:', error)
        })
        // #2 This was the most common way that you've probably been handling promises (except for that it's fetch and not axios). Next, let's look at this same call made with async/await
    }

    // The first step is to declare a method as async. This tells JavaScript that it will be handling promises within, and in fact makes the function always return a promise.

    async getAnotherUser() {
        // The next step is to use await. Remember this: await can only be used in functions designated as async, otherwise you will get an error. Futhermore, await can not be used in the top level of your code (for the same reason).

        // To handle errors, we will set up a try/catch block here

        try {
            // Save your awaits to a variable so that you can modify them
            let response = await fetch('https://randomuser.me/api/')
            let user = await response.json()

            const newUsers = [...this.state.users]
            newUsers.push({firstName: user.results[0].name.first, lastName: user.results[0].name.last, picture: user.results[0].picture.large})
            this.setState({
                users: newUsers
            })
        } catch(error) {
            console.error('Error in getAnotherUser:', error)
        }
        // And that's it! It's a bit shorter and gets rid of a lot of those confusing parentheses and callback functions! Sweet.
        // => README ### IFFE
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