#Programming 
# Interfaces
>### Goal
>- Get only relevant info
>- Helps with encapsulation
>- multiple levels (unlike inheritance)
>
>### Defintions
>- Templates for classes
>- Implementing interface -> follow its rules
>
>### Usage
>- Multiple classes with same method name but different execution
>- Care about *what* happens not *how* it happens
>- Split code cleanly
>- Enforce common behaviours (STANDARDS)
>
> ### Misc Notes
>- Related to [[Abstraction]]
>- Is-a relationship without sharing code
>- Methods  -> Public  abstract by default   
>- Variables -> Static final by default
>- Abstract Methods: Methods without a body (need to implemented elsewhere)
>- UML for interface is dotted lines
>  << Interface >>
>- Triangle for is-a relation ship
>- ALL fields are FINAL
>
>### Relating to [[Polymorphism]]
>- Can pass interfaces into methods (ok? tf does that mean?)
>  It will take any object from classes that implements the interface BUT you can only use methods implemented by said interface
>  - Can make an array of interface objects (same applied as above)
# Abstract Classes
> ### Defintion
>- Class that has both normal methods and abstract ones 
>- Hybrid of Super classes and interfaces
>  
>  ### Properties
>- Defined methods
>- Abstract methods
>- used for subclasses
>- some code shared, some isn't
>- must be extended (limited to 1 only)