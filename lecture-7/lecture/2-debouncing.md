# Problem: debouncing

## What's debouncing?

"full st"
> asking the backen: give me all results that starts with "full st..."
> "full stack developer",....

> Image you're typing in a search box that has auto-complete w/ results from the server
> If the app makes a request on every keystore ("f", "fu", "ful", "full") -> you spam the server with 4 requests before user even compes a word
> Wasteful and can cause permformance issues for your backend

Debounce: instead of firing a request on every ketstroke, wait until the user stops typign for N milliseconds before sending a request

## Naive approach

1. Just use setTimeout for every call

```js
    input.onkeyup = (e) => {
        setTimeout(() => search(e.target.value), 300);
    }
```

Problem: this creates multiple timers -> 4 backend calls are still made

## Improved approach

```js
    let timer;
    input.onkeyup = (e) => {
        clearTimeout(timer);
        timer = setTimeout(() => search(e.target.value), 300);
    }

```

## Concepts

- Closure: 
    - what is closure?
        - function that's bundled within its "lexical environment" -- it  remembers the variables from where it was defined, even when called later from another context
```js
    // the inner function keeps a hidden reference to n's variable slot
    function makeCounter(start = 0) {
        let n = start;
        return function next() {
            n++;
            return n;
        }
    }

    const c1 = makeCounter(5);
    console.log(c1()); // 6
    console.log(c1()); // 7

```

```js
    function createBankAccount(balance = 0) {
        return {
            deposit(amount) { 
                balance += amount;

            },
            widthdraw(amount) { 
                if(amount <= balance)
                    balance -= amount;
            },
            getBalance() { return balance; }
        }
    }

    const acc = createBankAccount(100);
    acc.widthdraw(50);
    console.log(acc.getBalance());
```

- Cancel & flush