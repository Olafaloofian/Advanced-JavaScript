import React, { Component } from 'react';

export default class Promises extends Component {
    state = {
        joke: null,
        finally: null
    }

    componentDidMount() {
        // #2 Alright now let's handle a promise and try to display the data onscreen. The main difference between Axios get's and fetch is that you need to format the data using '.json(). Notice the .then() chained off of it, what does this signal to you?
        fetch('https://api.chucknorris.io/jokes/random').then(response => {
            // What do you think will happen if we run the code below? (Console log will make failure, comment it out)

            // console.log(response.json())
            response.json().then(formattedData => {
                this.setState({
                    joke: formattedData 
                })
                // Let's not forget to handle the rejection cases with a .catch()!
            }).catch(error => {
                console.log('.json() error', error)
            })
        }).catch(error => {
            console.log('Get Chuck Norris Joke error', error)
            // The finally() callback will run regardless of success or failure
        }).finally(() => {
            this.setState({
                finally: 'FINALLY'
            })
        })
        // #3 Cool, now that we are a little more familiar with what a promise is and what we can do with it, let's try making our own.
        // => CustomPromises component #1
    }

    render() {
        // #1 Let's make a promise API call and console log it so that we can see exactly what is happening behind the scenes. To expose you all to something new, we will use the 'Fetch API' to make a promise instead of Axios. Fetch is JavaScript's native tool for making HTTP requests.
        
        console.log('------------ this.state', this.state)

        console.log('--------- API call', fetch('https://api.chucknorris.io/jokes/random'))

        return (
            <div>
                {this.state.joke ? this.state.joke.value : 'Promise pending...'}
                <br/>
                {this.state.finally && this.state.finally}
            </div>
        );
    }
}