import buildAdjList from "./4-adjacency-list.js";

class Queue {
    constructor() {
        this.array = [];
        // head of our queue
        this.h = 0;
    }
    push(x) {
        this.array.push(x);
    }
    empty() {
        return this.h >= this.array.length;
    }
    pop() {
        return this.array[this.h++];
    }
    size() {
        return this.array.length - this.h;
    }
}


/**
 * Breadth first search
 */

// options: { returnDist= false, returnParent= false }
function bfs(adj, start, { returnDist= false, returnParent= false }) {
    // ensure each node is processed at most once
    const visited = new Set();
    
    // first in-first out queue
    const queue = new Queue();

    // traversal order - the sequence in which we visit the nodes
    const order = [];

    // shortest hop distance from start
    const dist = new Map();

    // the predecessor used to recontstruct the shorted paths
    const parent = new Map();

    // Seed the BFS
    visited.add(start);
    queue.push(start);
    dist.set(start, 0);
    parent.set(start, null);

    while(!queue.empty()) {
        const u = queue.pop();
        order.push(u);
        for(const v of (adj.get(u) || [])) {
            if(!visited.has(v)) {
                visited.add(v);
                dist.set(v, dist.get(u) + 1);
                parent.set(v, u);
                queue.push(v);
            }
        }
    }
    const out = { order };
    if(returnDist) out.dist = dist;
    if(returnParent) out.parent = parent;
    return out;
}

const adj = buildAdjList(4, [[0,1], [0,2], [1,3], [2,3]], false);
console.log("Bfs from 0", bfs(adj, 0, { returnDist: true}).order);