# Graphs - Definitions & Core Concepts

## Basic terminology

Graph: verticies (nodes) V, edges E that's a subset of VxV

Directed Edge: an edge tht goes from node a -> b

Undirected Edge: an edge tht goes from node a <-> b

Weighted edges carry the cost/length of the edge

Unweighted edges assign each edge with a cost = 1

## Graph level properties

- Degree: the number of edges
- Indegree/Outdegree (directed): incoming/outgoing edges count

- Connected graph (undirected graph): every pair of nodes is connect by some path

- Strongly connected graphs (directed): a & b can reach each other

Directed acyclic graph: graph with no cycles

## Adjacency List (undirected graphs)

A: [B,C]
B: [A,D]
C: [A,D]
D: [B,C]

