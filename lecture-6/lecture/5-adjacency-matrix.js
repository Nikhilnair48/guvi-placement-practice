// n: number of verticies
// edges: array of pairs [u, v] indicies; eg: [[0,1], [2,3]]
// directed: by default the graph is undirected
function buildAdjMatrix(n, edges, directed = false) {
    const matrix = Array.from({length: n},
        () => Array(n).fill(0));
    for(const [u, v] of edges) {
        matrix[u][v] = 1;
        if(!directed) {
            matrix[v][u] = 1;
        }
    }
}