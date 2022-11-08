# Operations
- [[Sets]] operations
	1. Union
	2. Intersection
	3. Difference
- Remove parts of a relation –> Selection, Projection
- Combining operations
  1. Cartesian product
  2. Join operations –> Selectively pair tuples from 2 relations
- Renaming –> Change schema name only

## Projection
- Used to form a new Relation from an existing relation’s columns
- Create a “subset” of a relation
- Π$_{A_1,A_2,A_3,A_4...A_n}$(R) –> Relation that only has the columns 1-n of R
  Example R –> Movies(title,year,length,genre,studio,producer)
  Π$_{genre}$(Movies) –> just the genre column
