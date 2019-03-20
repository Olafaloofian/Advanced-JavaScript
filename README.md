## ADVANCED JAVASCRIPT

- Before we really get going here, I want to clarify: all the concepts we are covering today are purely JavaScript. We will be working within the React framework since it's what everyone is most used to at this point, but everything we are about to learn can and should be used outside of React whenever you need to (like on your Node/Express server).

### PROMISES!!

- promise : noun : Assurance that one will do something or that a particular thing will happen.

- Computers can make promises, just like humans can. Unfortunately, also like people, sometimes promises aren't kept. How do we handle this unpredictability?

- WITH JAVASCRIPT PROMISES!

- You have been dealing with promises in your code for a while now, but today we are going to go over what exactly a JavaScript Promise is, why it's necessary, and how to make our own.

- Does anyone know the three states of a Promise?
1 Pending
2 Fulfilled
3 Rejected

- During each of these three states, the result of the Promise is (respectively)
1 Undefined
2 Value Object
3 Error Object

- When a promise reaches either the Fulfilled or Rejected state, that promise is said to be 'settled'

- Some important things to remember:
* A promise can only be resolved or rejected once
* Callbacks will never be called before the completion of the current run of the JavaScript event loop (more on this later).
* Callbacks added with .then() even after the success or failure of the asynchronous operation, will be called, as above.
* Multiple callbacks may be added by calling then() several times. Each callback is executed one after another, in the order in which they were inserted
* Use promises whenever you are using async or blocking code.
* Resolve maps to then and reject maps to catch for all practical purposes.
* Make sure to write both .catch and .then methods for all promises.
* If something needs to be done in both the cases use .finally
* We only get one shot at mutating each promise.
* We can add multiple handlers to a single promise.
* The return type of all the methods in Promise object whether they are static methods or prototype methods is again a Promise

- All right, all right. Enough talk. Let's go check out some code!
=> Promises component #1

### Asynchronocity

- JavaScript itself is a single-threaded synchronous language, but we can manipulate it to behave asynchronously. What does asynchronous mean? It means that some code can be offloaded and executed while other code is running. JavaScript does this by sending certain requests to the browser (which runs on a multi-thread process). The browser runs the code and pushes it onto the call stack queue once it is done. This is a super nice feature to have, if you think about it. Every time you make an API call or other promise, there's not a guarantee it will resolve quickly, or even at all! Asynchronocity allows other code to be run in the meantime and makes out apps feel soooo much faster.

- I know this is a little confusing, so there's a video I want everyone to watch. I could sit up here and try to explain the JavaScript event loop all day, but the guy in this video does an amazing job of explaining what's going on underneath the hood in JavaScript. Watch it until about the 17 and a half minute mark when his presentation explodes.

- VIDEO: https://www.youtube.com/watch?v=8aGhZQkoFbQ

- Cool, I hope everything makes a little more sense here. Take a break or keep going?

- I just wanted to mention, we are going to use a lot of setTimeout()'s for our custom promises, because it is the easiest way to force asynchronosity. That being said, by no means is this the only option for making your own promises. There's lots of opportunity to get creative with custom promises, especially if you are ever setting up a public api or just wanting to improve your internal server requests.

=> PromiseMethods component #1

### Async/Await

- The keywords async and await are syntactic sugar added in ES6. Syntax sugar means syntax for something that is already able to be written another way, but much cleaner, more concise, or easy to read. In the case of async and await, we can use them to replace the common practice of chaining .then()'s off of promises.

- Let's go check out how to do it.

=> AsyncAwait component #1

### IIFE

- IIFE stands for Immediately Invoked Function Expression. They can also be called self-executing anonymous functions. In essence, an IIFE is a function wrapped in the grouping operator (parentheses) and then immediately invoked after grouping. It's a lot of parentheses. If you remember back to the first few weeks of class, we already talked about function expressions, which is when an anonymous function is saved to a variable. We will be using this concept when we make IIFE's - let's go check it out. We aren't going to be using a React component to demo these next couple of concepts because they are pretty core-level JavaScript stuff.

=> IIFE JavaScriptTools

### CURRIED FUNCTIONS

- Currying is the process of breaking down a function into a series of functions that each take a single argument. Currying takes advantage of JavaScript closures, which is the combination of a function and the lexical environment within which that function was declared. Basically, a closure just refers to the whole function and the specific scope it creates.

- Making a function a curried function allows us to more easily reuse abstract functions. You probably won't have to deal with this much unless you get really involved in functional programming, but it's worth exposing yourself to it now.

=> CurriedFunctions JavaScriptTools #1

### CONCLUSION

- Alright guys, that was it for advanced JavaScript today. I hope you all learned something helpful and if you have any questions about any of this content or want to take a deeper look, come ask me! The rest of the class day should be used to pass off your assessments and competencies.