#DataBase 
- For diagram look into -> [[ER&DataModels#Shapes in ER Diagram|Shapes in ER]]
# Business rules
- Enforce constrains
- Company policies for how things are handled
- Policies can be external (Higher ups)
- Describes how the data will be stored
- Has multiple sources
# Entities
## Entity set
- Collection of similar entities
## Weak Entity
- Depends on the existence of another entity set
- Redundant when dependant tables are removed
## Associative Entity
- Table associated with multiple relations
## Subclasses
- Is-a relationship
- Special cases in existing entity sets
- More properties
- Can have their own unique relationships
- Example: Undergrad and Postgrad students

# Attributes
- Property of an [[#Entity set|entity set]]
- Usually all entities have the same properties in a set
- Simple values: characters/integers
- Can be optional or required
- Has a domain (set of possible values)
- Attributes can share a domain
## Types
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
# [[Relationships]]
# Constraints 
1. keys 
	- unique identifier 
	- can be one or multiple attributes (Ex: Department code + course number together)
	- More than one candidate key --> more than one attribute can be used as a key
	- Only one is the primary key
2. single-value  
	- one and only *Juan* value (unique)
	- one-many relationships imply single value constraints
5. referential integrity
	- ensure value exists
	- used for foreign keys
6. domain constraints --> specify what set of values can be assigned to attribute
# Why?
- Graphics -> good communication tool

# Design Techniques
- Document assumptions you've made
- Avoid redundancy
	- Repetition SUCKS
- Keep relations simple
- Remain faithful to specifications
	- NO useless data/attributes
	- define multiplicity
- When to use entities
	- It is the "many" segment of the one-many relationship
- Don't overuse weak entity sets
	- many joins --> slower system
	- When possible everything should have its own key
	- Use only when there is no global authority for unique IDs --> car chassis number