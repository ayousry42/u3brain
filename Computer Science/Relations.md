#Discrete 
# Relations
## Definition
  Subset of Cartesian Product of two [[Sets]]
## Representing Relations
### Infix
  - x < y
  - just maths wtf bro
### Prefix
  - (x,y) < 
  - in R (x,y)aggregate or sth idk
### Post-fix
  - < (x,y)
  - In programming method(x,y)
### Matrix Form
  - 1s and 0s whether the ordered pair exists
  - Symmetric if the matrix is symmetric
  - Reflexive if diagonal is 1s
  ![[MatrixForm.png]]
  if (A$_n$,B$_m$) exist -> 1 
  else -> 0
### Some Rules
  Assuming A and B are two sets
  1. if A C B then R(A) C R(B)
  2. R(A U B) = R(A) U R(B) Same for intersection too
  3. Two relations R and S
     if R(A) = S(A) -> for all values of A
     then R = S
----
## Types Of Relations
### Reflexive
  Nth element in Domain goes to Nth element in Co-domain
  Is a function? [[Functions]]
### Symmetric
  if (a,b) exists then (b,a) exists
  Symmetric is just regular undirected graph
### Transitive

^c7d62e

  If (a,b) and (b,c) exist then (a,c) exist
  domain of first and co-domain of second must have relation
 ![[TransitiveGraph.png]] 
 Both [[Graphs]] are the same
 Only if transitive

^44ef2e

### Anti-symmetric
  When (a,b) and (b,a) only exist when a = b
  Anti Symmetric [[Graphs]]
  Can have loops
  Directed [[Graphs]]
![[AntiSymmetricGraph.png]]
----
## Relational DataBase Concepts
1. Join
	- Merge tables (R1xR2)
	- Expensive in database 
2. Schema
   - The name of the relation followed by parenthesised list of attributes
3. [[Relational Algebra]]
---
## Relation Operations
### Composition
 Basically transitive operation but among relations not two sets [[#^44ef2e|Graph example]]
### Inversion
### [[Functions]]


