#DataBase 
# Data Modelling
Organisation of Data/Concepts to describe data Structures/relationships.

## Types of Data Models
1. Relational Data Model. (Base, What we use)
2. Hierarchical Data Model.
3. Network Data Model.
4. Object Oriented Model.
5. Object Relational Model.

## Relational Data Model
- Depends on relations between tables.
- Relations are the actions.
- Each table is known as "Entity", each entity has an "Attribute", each attribute represents a ***column*** in the table.
- "Record" represents the ***row*** in the table.

## Shapes in ER Diagram
- **Entity**: Rectangle with table name inside.
- **Weak Entity**: Double rectangle
- **Attribute**: Ellipse stemming from the entity rectangle.
- **Multi value attribute**: Double Ellipse
- **Relationship**: Rhombus/Diamond linking between each Entity.

### Types of Entities
1. **Entity**: 1 line rectangle. (Any normal entity)
2. **Weak Entity**: 2 lined rectangle. (Table depends on the existence of another table (May feel redundant at removal of another table))
3. **Associative Entity**: 1 line rectangle with diamond inside. (Table associated with multiple relations)

### Types of Relations
1. **One-to-One**: One item from a set (Table) relates with one and only one from another set.
2. **One-to-Many**: One item from a set (Table) relates with >1 items from another set.
3. **Many-to-Many**: Multiple items from a set (Table) relate with multiple items from another set.

#### Identifying Relationship
Relationship between an Entity and a Weak one.

### Link Symbols:
- ---o|-   : One-to-One but none prior
- ---||-    : One-to-One but one prior.
- ---|<-  : Many but must have at least one.
- ---o<- : Many but doesn't need prior.

### Types of Attributes
1. Simple Attribute: Normal Ellipse.
2. Multi valued Attribute: Double Ellipse. (Attribute can have different values (i.e. Phone Number))
3. Derived Attribute: Dotted Ellipse (sprouting from a relation/Deduced (Order date))
4. Composite Attribute: Normal Ellipse with other attributes sprouting.


## Constrains
1. Single value: Primary key


## Weak Entity set
Ex:
Entity: Building Primary key:B.id
Weak entity: room partial key: room.id

## one-many(NOT ONE TO MANY)
means that one entity has one relation and the second one has more than one relation