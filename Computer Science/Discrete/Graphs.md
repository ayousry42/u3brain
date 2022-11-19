## Types of graphs
### Complete Graph -> [[Graph Edges and Nodes]]
>Kn
>Degree n-1
>edges n(n-1)/2 

### Cycle Graph
>Cn
>nodes n
>degree 2
>edges n


### Wheel Graph
>Wn
>nodes n+1
>Cycle graph with a center node
>edges 2n
>degree 3 except center n
 
### Directed Graph
>nodes n
>node degree in 
>node degree out
>a ->b != b ->a
### Undirected Graph
### Connected Graph
>all nodes have paths to each other
>no isolated nodes

### Tree Graph
>Graph with root node and leaf nodes
>Simple connected graph
>Parent nodes / Child Nodes
>Siblings ->have same parent
>Pseudo code as graph
#### Expression tree
#### Path tree 
#### Huffman Tree
>All nodes as 0s and 1s
>Ex: Tree for letter frequency in sentence
#### Binary Tree
>Only 2 leafs per node

### Spanning Tree
> Graph in form of tree
> Repeating nodes -> Full spanning tree
> No repetition -> minimum spanning tree
### Hasse Diagram
> For partially ordered [[Sets]]
> Remove loops 
> Remove Transitive
> ![[Hasse Diagram.png]]
> { (1,2) , (1,3) , (1,4) , (2,3) , (2,4) }

----
# Representing Graphs
## Degree
>Not unique
## Adjacency Matrix
>Most commonly used
>A = adj = count of edges at each node in a matrix form
>B = boolean = connected to edges or no
>W = sets of edges (names of edges)
>A^n is number of paths of length n
>Undirected graphs ->Symmetric Matrices
>Paths as ordered pair ->W^n (Cartestian Product method)
## Linked List + Hash Table 
>Inefficient
## Euler Path
>Simple path containing every **EDGE** (no loops)
>All nodes must be either even or only two are odd

## Euler Circuit
>Start and end in same node
>All node degree must be **even**

## Hamilton Path
>Contains all nodes
>no condition

#Discrete