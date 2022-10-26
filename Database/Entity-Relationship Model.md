#DataBase 
- For diagram look into -> [[ER&DataModels#Shapes in ER Diagram|Shapes in ER]]
## Business rules
- Enforce constrains
- Company policies for how things are handled
- Policies can be external (Higher ups)
- Describes how the data will be stored
- Has multiple sources
## Entity set
- Collection of similar entities
### Subclasses
- Is-a relationship
- Special cases in existing entity sets
- More properties
- Can have their own unique relationships
- Example: Undergrad and Postgrad students

## Attributes
- Property of an [[#Entity set|entity set]]
- Usually all entities have the same properties in a set
- Simple values: characters/integers
- Can be optional or required
- Has a domain (set of possible values)
- Attributes can share a domain
### Types
1. Composite
	- Can be subdivided into multiple parts
1. Simple (Atomic)
	- Cannot be subdivided
	- Ex: First name
2. Single-value 
	- have only 1 value
	- Ex: GPA
3. Multi-valued attributes
	- can have many values
	- Not preferred
	- Forces usage of extra processing on queried data
	- Ex: Multiple phone numbers/emails
4.  Derived
	- May be calculated from other attributes
	- Reduces error especially when entering manually
	- Not recommended to be used excessively
	- Sometimes its better to not store them (Excessive calculations bad)
	- Only used for things that change very frequently and are crucial to be accurate
	- Used for historical reasons (get data in a certain period of time)
	- Ex: Total sales (sum up sales)
## Relationships
- Not [[Relations |relations]]
- Connects two or more entity sets
- Most relationships are binary but some are Multi-way
- Multi-way example: Evaluation of courses (Students evaluate a professor in a certain course)
- Binary relationship --> between 2 entities
- Parralel relationship --> multiple relationships between the same 2 entities
- Self joined relationship 
	- relation between entities within the same set
	- Example: Courses and their prerequisites
	- Unary  --> inaccurate tho
	- Self-join
	- Recursive relationship
### Multiplicity
- Many-Many relationships
- Can also be defined as cardinality --> but specific amounts 
- When defining relationships see from both sides 
- To generalise whether an entity is many or one, make the rest of its surrounding entities in relationship constant (1 student in 1 course evaluates X professors etc.)
  - Can be symmetric or Asymmetric 
	- 2 friends
	- Employee and Boss
- Ex: Cafe sells many drinks; a drink is sold by many cafes
## Constraints 
1. keys 
	- unique identifier 
	- can be one or multiple attributes (Ex: Department code + course number together)
	- More than one candidate key --> more than one attribute can be used as a key
	- Only one is the primary key
2. single-value --> one and only *Juan* value (unique)
3. referential integrity
	- ensure value exists
	- used for foreign keys
4. domain constraints --> specify what set of values can be assigned to attribute
## Why?
- Graphics -> good communication tool

## ER Diagram notes
- Document assumptions you've made