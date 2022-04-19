#Discrete 
# Relations
## Definition
> Subset of Cartestian Product of two [[Sets]]
## Representing Relations
### Infix
> x < y
> just maths wtf bro
### Prefix
> (x,y) < 
> in R (x,y)aggregate or sth idk
### Suffix
> < (x,y)
> In programming method(x,y)
### Matrix Form
> 1s and 0s whether the ordered pair exists
> Symmetric if the matrix is symmetric
> Reflexive if diagonal is 1s
> ![[MatrixForm.png]]
> if (An,Bm) exist -> 1 
> else -> 0
### Some Rules
> Assuming A and B are two sets
> 1. if A C B then R(A) C R(B)
> 2. R(AUB) = R(A) U R(B) Same for intersection too
> 3. Two relations R and S
>    if R(A) = S(A) -> for all values of A
>    then R = S
----
## Types Of Relations
### Reflexive
> Nth element in Domain goes to Nth element in Codomain
> Is a function? [[Functions]]
### Symmetric
> if (a,b) exists then (b,a) exists
> Symmetric is just regular undirected graph
### Transitive

^c7d62e

> If (a,b) and (b,c) exist then (a,c) exist
> domain of first and codomain of second must have relation
>![[TransitiveGraph.png]] 
>Boths [[Graphs]] are the same
>Only if transitive

^44ef2e

### AntiSymmetric
> When (a,b) and (b,a) only exist when a = b
> Anti Symmetric [[Graphs]]
> Can have loops
> Directed [[Graphs]]
![[AntiSymmetricGraph.png]]
----
## Relational DataBase Concepts
## Selection
>Select field usually with condition
## Projection
>Get record -> Big Pi symbol
>∏(R1)  
## Join
>Merge tables (R1xR2)
----
## Relation Operations
### Composition
>Basically transitive operation but among relations not two sets [[#^44ef2e]]
### Inversion
### [[Functions]]
