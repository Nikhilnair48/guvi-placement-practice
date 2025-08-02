# Linked List Essentials

```js
    // Data type: boolean
    const isValid = false;
    
    const person = {
        name: "Bhavanitha",
        dob: new Date(),
        ...
    }

    const arr = [1,2,3]

```

What is a Data Strucutre (DS)?
A way to organize and store data

Definition:
A DS that allows a more efficient way to store data compared to arrays. 

```js

    class ListNode {
        constructor(value, next = null) {
            this.value = value;
            this.next = next;
        }
    }

    // [1,2,3]
    function buildList(arr) {
        let head = null;
        for(let i = arr.length - 1; i >= 0; i--) {
            head = new ListNode(arr[i], head);
        }
        return head;
    }

    buildList([1,2,5,4]);
```

