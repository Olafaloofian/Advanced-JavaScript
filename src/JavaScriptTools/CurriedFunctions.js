// Let's think about curried functions in the most basic way we can, Here's a simple addition function:
const add = (a,  b) => a + b

// Now, here is the curried version, using the function declared above in the return:
const curriedAdd = a => b => add(a, b)

// The basic concept is that we are splitting the parameters into different lexical scopes so that we can use them in different ways within the function.

// It may help you think about it a little more clearly if we wrote it like this:
const anotherCurriedAdd = a => (b => a + b)
// The first function with parameter 'a' RETURNS another function with parameter 'b' that itself returns 'a + b'. It has access to 'a' through the closure.

// Calling a curried function can look kind of wonky:
console.log(anotherCurriedAdd(4)(5)) // = 9

// Let's break it down:
let added = anotherCurriedAdd(4)
console.log(added(5))
// These two lines result in the same thing as line 14.

// You can pass functions into to curried functions, just like any other function:
const multiply = (x, y) => x * y
const curriedDivide = i => o => i / o

console.log(curriedDivide(multiply(2,4))(2)) // = 4

// That's pretty much all we need to cover for curried functions. It's likely the only serious use you'd see of this is on the job, and hopefully you remember the concept enough to pick it apart yourself!

// => ### README CONCLUSION