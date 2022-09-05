#Database 
# Functional Dependency
Dependency is said to identifiy an attribute through another attribute, i.e. primary key -> attribute.

### Y is funcitional dependence on X --- identifies Y
1. Reflexive Rule: if y c x , then X $\rightarrow$ Y.
2. Augmentation Rule : if x $\rightarrow$ y then xz $\rightarrow$ yz.
3. Transitive Rule: if x-> y and y -> z then x ->z.

## Key
Set of attributes for any other attribute: $A_1, A_2, ..., A_n\rightarrow B$
1. Minmal key: set of attributes which is a key and for which no. of subset is a key.

Ex: 1- Product ( name, Price, Category, Color)
      Ans: name, category $\rightarrow$ Price
            Category $\rightarrow$ color 
            X $\rightarrow$ Category
            Keys are: {name, category}

## finding the key Realtions
1. if Relation comes from an entity set

![[WhatsApp Image 2022-08-27 at 1.09.56 PM 2.jpeg]]

Key: SSN
Person(_SSN_ , name , address).
2. Relation comes from M-M RelationShip

![[WhatsApp Image 2022-08-27 at 1.12.42 PM.jpeg]]

Buys(_Pname_ , _SSN_ , date).
3. Except: 

![[WhatsApp Image 2022-08-27 at 1.13.51 PM 1.jpeg]]

Purchase( _pname_ , _sname_ , _ssn_ , cardno.).
(If there's an arrow we don't take key PK as FK).


## Relational Schema Design
1. Start with some relational schema.
2. Find out its FD's(Functioanl Database) (important to look at inderral FD's).
3. use them to design a better relational schema.

--> Anomalies $\rightarrow$ Problem caused due to redundant data which is dupluication multiple records.
_Solution_ -> Break the relation into 2 tables. 

![[WhatsApp Image 2022-08-27 at 1.15.08 PM.jpeg]]


## Index 
Used to rerive data from db more quickely than otherwise.
User cannot see indexes: updating with index takes more time than without index.

## Clustered index
index created on non-primary key columns which may not be unique.
(Group 2 or more columns)