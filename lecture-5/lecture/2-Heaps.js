// Implement a min-heap

class PriorityQueue {
    // a = 5, b = 3;  5 - 3 = 2
    // a = 3, b = 5;  3 - 5 = -2
    // a = 3, b = 3;  3 - 3 = 0
    constructor(cmp = (a,b) => a-b) {
        this.a = [];
        this.cmp = cmp;
    }

    size() {
        return this.a.length;
    }

    peek() {
        // What if size is zero?
        return this.a[0];
    }

    push(x) {
        this.a.push(x);
        this.#siftUp(this.size() - 1);
    }

    pop() {
        if(this.size() === 0) return undefined;
        this.#swap(0, this.size() - 1);
        const out = this.a.pop();
        this.#siftDown(0);
        return out;
    }

    // parent(i) => (i - 1) / 2. Note: we use integer division
    // >> => arithmetic right shift (bitwise operation)
    // shifts bits to the right
    #parent(i) {
        return (i - 1) >> 1;
    }
    
    // left(i) => 2i + 1
    // >> => arithmetic left shift (bitwise operation)
    #left(i) {
        return (i << 1) + 1;
    }
    
    // right(i) => 2i + 2
    #right(i) {
        // return 2 * i + 1;    // this works too
        return (i << 1) + 2;
    }

    // swap two positions in the array
    #swap(i, j) {
        [this.a[i], this.a[j]] = [this.a[j], this.a[i]];
    }

    /**
     * Move a node at index i down while some child outranks it.
     * Always swap with the "better" child (for min-heap: the smaller child)
     */
    #siftDown(i) {
        const n = this.size();
        while(true) {
            const l = this.#left(i);
            const r = this.#right(i);

            // Firstly, assume the best child is index i
            let best = i;

            if(l < n && this.cmp(this.a[l], this.a[best]) < 0) {
                best = l;
            }
            
            if(r < n && this.cmp(this.a[r], this.a[best]) < 0) {
                best = r;
            }

            if(best !== i) {
                this.#swap(i, best);
                i = best;       // continue sifting down
            } else {
                break;          // node is in current place, stop sifting
            }
        }
    }

    /**
     * Move a node at index i up while it should outrank parent
     */
    /*
        i = 0
            0 > 0 {
                p = 0
                compare(1, 3) < 0
                    swap
                    update i to new position of new element
            }
    */
    #siftUp(i) {
        while(i > 0) {
            const p = this.#parent(i);
            // if a[i] should be above a[p] per cmp, swap up
            if(this.cmp(this.a[i], this.a[p]) < 0) {
                this.#swap(i, p);
                i = p;
            } else {
                break;  // heap-order is satisfied along this path
            }
        }
    }
}

const pq = new PriorityQueue();
[7,3,5,12,9].forEach(x => pq.push(x));
console.log(pq.peek());
console.log(pq.pop());
console.log(pq.peek());

/*
    Time complexity
    - push: O(log n)
    - pop: O(log n)
    - peek: O(1)
    - size: O(1)
*/

export {
    PriorityQueue
};