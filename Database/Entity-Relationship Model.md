#DataBase 
# Entity-Relationship Model
- For diagram look into -> [[ER&DataModels#Shapes in ER Diagram|Shapes in ER]]
## Business rules
- Enforce constrains
- Company policies for how things are handled
- Policies can be external (Higher ups)
- Describes how the data will be stored
- Has multiple sources
## Entity set
- Collection of similar entities

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
2. Simple (Atomic)
   - Cannot be subdivided
   - Ex: First name
3. Single-value 
   - have only 1 value
   - Ex: GPA
4. Multi-valued attributes
   - can have many values
   - Not preferred
   - Forces usage of extra processing on queried data
   - Ex: Multiple phone numbers/emails
5.  Derived
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
### Multiplicity
- Many-Many relationships
- When defining relationships see from both sides 
- To generalise whether an entity is many or one, make the rest of its surrounding entities in relationship constant (1 student in 1 course evaluates X professors etc.)
- Relationships can be between elements between same entity sets (Prerequisites) (Self-Join or Recursive relationship) -> Unary relation
  - Can be symmetric or Asymmetric 
    - 2 friends
    - Employee and Boss
- Ex: Cafe sells many drinks; a drink is sold by many cafes
 
## Why?
- Graphics -> good communication tool

## ER Diagram notes
- Document assumptions you've made