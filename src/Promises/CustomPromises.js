import React from 'react';

class CustomPromises extends React.Component {
    state ={
        message: null
    }

    componentDidMount() {
        // #3 Now let's talk a little bit about why Promises are necessary. In what order do you think the two strings below will print to the console? Does anyone know what explains this behavior? Asynchronocity!
        Promise.resolve().then(() =>  console.log('Which one is first?'))
        // BONUS: Talk about console groups and info
        console.group('Grouped!!!!')
        console.log('Am I the second console log?')
        console.info('Info')
        console.groupEnd()
        // => README ### Asynchronocity

        this.makeAPromise()
    }

    makeAPromise = () => {
        // #1 Here is the syntax for making your own custom promises. Notice the 'new' keyword. Can anyone tell me where they have seen this before? It's actually a Promise CONSTRUCTOR. You pass it two parameters, the first of which is the 'resolve' state and the second is the 'reject' state.
        const threeSecondPromise = new Promise((resolve, reject) => {
            console.warn('I only keep my first promise')
            setTimeout(() => {
                if(this.state.message) {
                    reject('REJECTED!! I told you what would happen...')
                } else {
                    resolve('I ALWAYS keep my first promise')
                }
            }, 3000)
        })

        // #2 Our promise is declared and ready to go. Now let's call it below just like we would any other promise!

        threeSecondPromise.then(response => {
            this.setState({
                message: response
            })
        }).catch(error => {
            this.setState({
                message: error
            })
            console.error('threeSecondPromise error:', error)
        })
    }

    render() {
        return (
            <div>
                {this.state.message ? this.state.message : 'Promise pending...'}
                {/* What do you think will happen if you spam the button before the first promise resolves? It will put multiple promises in the call stack and then execute them in order. */}
                <button onClick={this.makeAPromise}>Another Promise</button>
            </div>
        );
    }
};

export default CustomPromises;