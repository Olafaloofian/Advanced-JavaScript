// Why would an IFFE be useful? Well, for one it creates its own scope that you can play around with variables in and not worry about polluting higher levels. So how do you make them? It all comes down to function expressions.

// Here is a simple function expression:
let expression = function() {
    console.log('I\'m a function expression!')
}

// Here is a simple function declaration:
function logMe() {
    console.log('I\'m a function declaration!')
}

// Any function that is made without the 'function' keyword being the first thing JavaScript sees is considered a function expression. We can use this to our advantage when making IFFE's

// Here is a similar function in IFFE form:
(function() {
    console.log('I\'m an immediately invoked function expression!')
})()
// Notice a couple of things different here? Well, for one the function declaration begins with an opening parentheses sign so we know it must be a function expression. Also, there's a pair of parentheses right after the function invoking it! Pretty cool.

// This IFFE can also be written as:
(function() {
    console.log('I\'m an immediately invoked function expression!')
}())
// There's a slight difference in the order of wrapping parentheses, but this is in fact the same function.

// The interesting thing about the two IFFEs we just wrote is that they are not saved anywhere within JavaScript. This means that after the run the console log and terminate, they self-destruct and leave no traces behind. Obviously we can still see them here in the code editor, but in the runtime they are completely absent after invocation.

// You can use a lot of different symbols to denote an IFFE. Two other common ones are ! and +. Let's write a couple more simple examples.
!function() {
    if(Window.confirm('Do you like pizza?')) {
        alert('Me too!')
    } else {
        alert('Are you even human?')
    }
}()

+function() {
    let name
    let hobby

    initialize()

    function initialize() {
        name = 'Michael',
        hobby = 'VR'
    }
}()

// If you really want to throw some style into your IFFE's, you can declare them as 'void':
void function() {
    if('Michael is super cool') {
        console.log('rm -rf ~')
    }
}()
// Again, as long as the function is an expression (so doesn't start with the function keyword), you can immediately invoke it.

// What about if your IFFE returns something? Just make sure to express it in a variable and that variable will evaluate to the return value.
let five = function() {
    return 2 + 3
}()
console.log(five === 5)
// true

// You can also pass in very parameters into an IFFE if you need to use them in the function.
(function(first, last) {
    console.log(`First name ${first}, last name ${last}.`)
})('James', 'Bond')

// Ok ok, you may be thinking to yourself - what's the big deal? I don't get why you would ever write an IFFE rather than a regular function. Think about it this way. Right now, the largest project you've done is your personal project. Don't get me wrong, those can get pretty big, but I'm sure you can imagine how gigantic the codebases for companies are. When you are declaring and using variables inside of a normal function, there is a chance you are going to affect other programmers down the road if they try to use the same variable names. This is called 'polluting the namespace'. You can avoid adding to the pollution by wrapping all functions and variables into their own scopes with an IFFE!

// One more fun example to help show the scoping of IFFE's:
let counter = (function counterIIFE() {
    
    // Privately scoped variable to store current counter value.
    var current = 0;
    
    // This function returns an object with a couple of methods in it that we can use to access the scope of 'counter'
    return {
        getCurrentValue: function() {
            return current;
        },
        
        getNextValue: function() {
            current = current + 1;
            return current;
        }
    };
    
}());

console.log(counter.getNextValue()); // 1
console.log(counter.getNextValue()); // 2
console.log(counter.getCurrentValue()); // 2

// Ok, one last thing to go over today with you guys: Curried functions
// => README ### CURRIED FUNCTIONS