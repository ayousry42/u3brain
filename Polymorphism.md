#Programming 

# Dynamic Binding
- Everything is an Object
- No really Object is the super class of ALL
# Constructor Chaining
- Constructing instance of child class invokes all superclass constructors along the inhertiance chain
- Literally child() -> parent() -> parentOfParent -> Etc
# Overloading Vs Overriding
## Overloading
- Same name different parameters
## Overriding
- Same name in super and same parameters
- different use in sub class
# Casting References
- You can cast an object using a sub class' constructor
- Can only use methods in super class
- Methods can be overridden 
- Cast the object to be able to use the sub class methods
- Can only cast down the tree not sideways
- Arrays of superclasses can store subtypes as elements
Ex:
Employee E = new Lawyer();
((Lawyer) E).sue();