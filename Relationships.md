# Relationships
#Database
## Properties
- Not [[Relations |relations]]
- Connects two or more entity sets
- Most relationships are binary but some are Multi-way
- Multi-way example: Evaluation of courses (Students evaluate a professor in a certain course)
- Can have attributes of their own
## Types 
- Binary relationship --> between 2 entities
- Parralel relationship --> multiple relationships between the same 2 entities
- Self joined relationship 
	- relation between entities within the same set
	- Example: Courses and their prerequisites
	- Unary  --> inaccurate tho
	- Self-join
	- Recursive relationship
- Non-supporting --> just normal relationships 
- Supporting relationships --> supports a weak entity
## Multiplicity
- [[Data Modelling#Types of Relations|Types of relations]]
- Can also be defined as cardinality --> but specific amounts 
- When defining relationships see from both sides 
- To generalise whether an entity is many or one, make the rest of its surrounding entities in relationship constant (1 student in 1 course evaluates X professors etc.)
  - Can be symmetric or Asymmetric 
	- 2 friends
	- Employee and Boss
- Ex: Cafe sells many drinks; a drink is sold by many cafes