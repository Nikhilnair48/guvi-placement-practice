# Graph - Representations

1) Adjacency List

Structure: Map where the key is the node and the value is list of edges

Space: O(V+E)

When: sparse graphs

2) Adjacency Matrix

Structure: n x n (0/1, weight)
    - Access the matrix: matrix[x][y]
    - Note: provide reference for 2D matrix

Space: O(V^2)

When: dense graphs


```js
// Adjacency List Builder
// nOrEdges - number or array of <[n, v]>
    - if it's an array, we'll treat it as an the edges in the list
    - if it's a number, we've to create n nodes with e edges and it may be directed or not
// edgesOrDirected - Array<[e,v]> or boolean
    - if nOrEdges is an array, then edgesOrDirected param is the 
    directed flag
    - if nOrEdges is an number, then this param is the edges list
// directed -> if nOrEdges is a number and edgesOrDirected is an array, then we need this to determine whether it's a directed graph or not
function buildAdjList(nOrEdges, edgesOrDirected=false, directed=false) {
    const adj = new Map();
    // allow us to create a new node in the adjacency list
    const ensure = (x) => {
        if(!adj.has(x)) {
            adj.set(x, []);
        }
    }

    let edges;
    if(Arrays.isArray(nOrEdges)) {
        edges = edgesOrDirected;
        directed = !!edgesOrDirected;       // coerce edgesOrDirected to boolean
    } else {
        // overloaded function form: (n, edges, directed?)
        edges = edgesOrDirected;
    }

    for(const [u, v] of edges) {
        ensure(u);
        ensure(v);
        // we adding u -> v
        adj.get(u).push(v);
        // add v -> u for undirected graph
        if(!directed) adj.get(v).push(u);
    }
    return adj;

}

```