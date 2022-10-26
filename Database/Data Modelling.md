# Data Modelling
Organization of Data/Concepts to describe data Structures/relationships.

## Types of Data Models
1. Relational Data Model. (Base, What we use)
2. Hierarchical Data Model.
3. Network Data Model.
4. Object Oriented Model.

## Relational Data Model
- Depends on relations between tables.
- Relations are the actions.
- Each table is known as "Entity", each entity has an "Attribute", each attribute represents a ***column*** in the table.
- "Record" represents the ***row*** in the table.

## Shapes in ER Diagram
- **Entity**: Rectangle with table name inside.
- **Attribute**: Ellipse stemming from the entity rectangle.
- **Relationship**: Rhombus/Diamond linking between each Entity.

### Types of Entities
1. **[[Entity-Relationship Model#Entity set|Entity]]**: 1 line rectangle.
2. **[[Entity-Relationship Model#Weak Entity|Weak Entity]]**: 2 lined rectangle. 
3. **[[Entity-Relationship Model#Associative Entity|Associative Entity]]**: 1 line rectangle with diamond inside. 

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
- ---o<- : Many but optional.
- Open arrow --> Exactly 1
- Closed arrow --> at most 1

### Types of Attributes
1. Simple Attribute: Normal Ellipse.
2. Multi valued Attribute: Double Ellipse. (Attribute can have different values (i.e. Phone Number))
3. Derived Attribute: Dotted Ellipse (sprouting from a relation/Deduced (Order date))
4. Composite Attribute: Normal Ellipse with other attributes sprouting.
#DataBase