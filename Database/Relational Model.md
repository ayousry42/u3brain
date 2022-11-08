#DataBase 

- Simple 
- Built around single concept --> The [[Relations#Relational DataBase Concepts|relation]]
- Supports high level language --> [[SQL]]
- Mathematical design theory --> [[Relational Algebra]]
   Leaves a lot room for [[Optimisation|optimisation]]
- Most popular model despite newer models existing
   So popular that --> Object relational models exist

- Degree --> number of attributes in schema
- Cardinality --> is the number of tuples in relation

# Design
- Write all attributes as [[Sets]] --> Student(PID: *string*, Name: *string*, Address: *string*) etc $\cdots$
- All relationships as [[Relations]] --> Teach(ProfessorID: *string*, Number: *integer*, DeptName: *string*)
- Entity set --> Relation
- [[Entity-Relationship Model#Relationships|Non-Supporting Relationship]] --> Attributes are [[Entity-Relationship Model#Constraints|Keys]]  of the connected entity sets (such as Student and prof IDs not the whole table)
### Special cases
  1. Weak entity sets --> Include attributes of  entity and  [[Entity-Relationship Model#Constraints|keys]] of supporting entity sets
  2. Combining relations (especially for [[Data Modelling#^d2f293|one-many relationships]]) --> Foreign keys
      - Take the key of the one put in the many table
      - Example: Teach relationship (Have prof as `FK` in course table )
  3. *Is-a* relationships and [[Entity-Relationship Model#Subclasses|subclasses]]
     1. [[Entity-Relationship Model|ER]] approach --> using foreign key of parent entity
        Creates redundancy in keys
     2. Null approach --> Have all columns in one table and null when needed
        Redundancy if too many NULLS
     4. [[OOP]] approach --> Each parent and child entity has its own table
        Bad if you need to be joining the tables too much

# Problem solving
- nouns --> Indicate tables or attributes
- Verbs --> Indicate relations

# Normalisation
- Find redundant info and remove it
