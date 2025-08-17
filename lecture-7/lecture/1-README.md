# Lecture 7 - MERN Stack

## Objectives

- Review expectations in interviews
- Warm up questions
- Practice problems
    - React + Express/Node.js

## What interviewers look for:
    - Clarity: you state assumptions and a plan before writing code
    - Correctness: you handle the core logic and edge cases
    - Safety: do you valiate the inputs? Handle the errors? Security?
    - UX/A11y - you consider accessibility and users with disability
        - [Semantic elements](https://www.w3schools.com/html/html5_semantic_elements.asp)
    - Trade-offs: you can compare a "naive" approach and a "robust" approach

## Couple ground rules
    - Think out loud
    - The simplest approach first; then you improve it
    - If you're stuck on a part of the interview, "time-box"

## Warn up questions

### HTML/CSS

- Box model
    - If you've an element where,
        - width: 200px
        - padding: 20px
        - border: 2px solid black
        - box-sizing: border-box
    - what is the rendered width of this box?
        - 200px + 20px (left) + 20 (right) + 2px (left) + 2px (right)
         - 200 + 40 + 4 => 244px
    - box-sizing: 
        - content-box (default): the width you set applies only the content box. Padding and border are added outside of that.
        - border-box: the width includes content + padding + border
    - [Reference](https://www.w3schools.com/css/css_boxmodel.asp)

- CSS rules - specificity
    -   .card .title {
            color: red;
        }
        .title {
            color: blue !important;
        }
    - Which rule is applied? Which color is set?
    - !important - is a CSS flag on a property that bumps it above all non-important rules.
    - Blue is actually the color that's set because of !important being used

- Stacking elements
    - Two positioned elements overlap; one has z-index: 2, the other has z-index: 10. Which one will be on top and why?
    - z-index: allows us stack elements in vertical order
        - a lower z-index means the element can be beneath other elements with a higher z-index

- Flexbox and Grid
    - HTML card using flexbox OR Grid

- Optional: semantic elements, video/audio


### Javascript/Browser - Typescript

- asynchronous vs synchronous

- What is callback?
    - a function you pass into another function to be called later
        - often done after an async operation
```js
    function hello(x) {
        console.log(x);
        x();
    }

    const success = () => {
        console.log("hello world");
    }
    
    const failure = () => {
        console.log("hello world");
    }
    hello(success);

```
- What is a callback hell?
    - When you chain many async steps by nesting the callbacks inside callbacks
    - can make your code hard to read

```js
    doA((e, a) => {
        if(e) return cb(e);
        doB(a, (e, b) => {
            if(e) return cb(e);
        })
    })
```

- compared to callbacks, what's a better way to write async operations in Javascript?
    - Promises
        - pending, resolved, rejected
        - promise chaining
    - async/await
        - syntactic sugar: built on to of promises

- Scopes: Purpose of var vs let/const in the context of hoisting?
    - var is function scoped
        - any variable declared with var is "hoisted" with an initial value of `undefined`

```js
    // var is hoisted + initialiazed to undefined
    console.log(a);         // undefined
    var a = 1;
    console.log(a);         // 1
```
    - let/const are block-scoped and hoisted without initialization
        - From the start of the block until the declaration executes, they're in the "Temporal Dead Zone" - any access throws a ReferenceError
            - const also requires an initializer

```js
    // let: hoisted but uninitialized (TDZ)
    console.log(b);     // ReferenceError
    let b = 1;


    // TDZ impact
    console.log(typeof c);      //  "undefined" (c is not declared anywhere)
    console.log(typeof d);      // Uncaught ReferenceError: d is not defined
    let d = 5;

    // Shadowing + TDZ inside a block
    let x = 10;
    {
        // New "x" is created for this block, only
        let x = 20;
        console.log(x);     // 20
    }
    console.log(x);         // 10
```


- Promise.all vs Promise.allSettled?
    - Promise.all([...]): resolves all promises at once; if any project is rejected, it rejects the entire promise.all immediately with that reason
    - Promise.allSettled([...]) always fulfills after every promise is finished, returning an array of `{ status: "fulfilled | rejected, value/reason }`

- Arrow function vs regular function? Specically, think about "this"
    - **this binding**: arrow fn capture "this" keyword lexically (from the enclosing scope). Regular function get "this" keyword from how they're called.
    -  **constructors**: regular function can be called with "new" keyword; arrow function cannot
    - **arguments**: regular function has their own "arguments" - arrow functions don't

    - call/apply/bind - in JS

### React

- Keys: why do list items use "key={index}" cause state changes when the list reorders?
```js
    const people = [ {}, {}, {}];
    people.map((person, index) => {
        return (
            <div key={person.id}>
                <h1>{person.name}</h1>
            </div>
        )
    })
```


- Hooks: useEffect
- You fetch some data in useEffect, but you forgot to add a depenendency. Which bug does this result in and how to you fix it?

```js
    // Bug: missing `id` as a depenency
    useEffect(() => {
        fetch(`/api/users/${id}`).then(result => result.json()).then(setUser);
    }, [])

    /*
        Typical bug: a stale closure - your effect captures an old prop/state (eg: id) and never refetches when it changes, so the UI shows the wrong data
    */

   // Fix: include `id` in the dependency array
```