import React, { Component } from 'react';

export default class PromiseMethods extends Component {
    state = {
        allResponses: null,
        raceWinner: null
    }

    componentDidMount() {
        this.multiplePromises()
    }
    // #1 First, lets make a class method that creates and then calls multiple promises all at the same time.
    multiplePromises = () => {
        const promise1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(<div key='1'><img width='400' src='https://www.whatsappprofiledpimages.com/wp-content/uploads/2018/07/funny-profile-pic7-300x256.jpg' alt='Woking Kony' /></div>)
            }, 2000)
        })

        const promise2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(<div key='2'><img width='400' src='http://www.intellidm.com/media/com_easysocial/photos/105/289/funny-dirtgrub-profile-ugly-pic_large.jpg' alt='Freeps' /></div>)
            }, 2000)
        })

        const promise3 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(<div key='3'><img width='400' src='https://appamatix.com/wp-content/uploads/2016/05/04-450x427.jpg' alt='Woking Kony' /></div>)
            }, 2000)
        })

        // #2 Now, let's call all of the promises at once, using a neat little method called Promise.all(). This takes in an array of promises, executes all of them, and then responds with all of the fulfilled values in another array. Keep in mind though - if one of the promises is rejected the whole Promise.all() will error out, so make sure you have your .catch()!
        Promise.all([promise1, promise2, promise3]).then(response => {
            console.log('------------ response', response)
            // Since the response is an array of react elements, let's just go ahead and save them to state so that they can be displayed.
            this.setState({
                allResponses: response
            })
        }).catch(error => {
            console.error('Error in Promise.all():', error)
        })
        // Can you see where this would be useful? What about when you are making multiple Axios calls in your front end or db calls on your server? Chaining requests together with .then()'s can take a long time, because only one promise can be made at a time. If you find yourself doing this, just remember to save each promise to a different variable and put them in the Promise.all() array!
    }

    // #3 If you come across a situation where you have multiple promises to request and you just want one back as fast as possible, there is a fun little method called Promise.race(). This one is similar to Promise.all() in the sense that it takes an array of promises, but this time it will only return the ONE promise that fulfills the fastest.
    promiseRace = () => {
        // Get volunteers for the race?
        const racer1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('person1')
            }, Math.random() * 5 * 1000 )
        })

        const racer2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('person2')
            }, Math.random() * 5 * 1000 )
        })

        const racer3 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('person3')
            }, Math.random() * 5 * 1000 )
        })

        // Check out the response for this one. It's just a single value, and we know it's the promise that fulfilled the fastest. Pretty handy!
        Promise.race([racer1, racer2, racer3]).then(response => {
            console.log('------------ response', response)
            this.setState({
                raceWinner: response
            })
        }).catch(error => {
            console.error('Error in Promise.race():', error)
        })
        // Cool. If everyone is good we are going to either take a break or move on to Async/Await.
        // => README ### Async/Await
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