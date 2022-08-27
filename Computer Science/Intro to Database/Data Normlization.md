#Database 
## Data Normlization
Tool to validate & improve logical design So that it stisfied certaion conditions to avoid unnecerrey duping of date.

Process of decompany relations with anomalies to produce Smaller WELL STRUCTURE relation.

Well Structure: Relation contains minimal data redundancy & allow user to insert, delete , update rows without causing damage.

## Normal Form
1. 0 NF (Remove multivalued att.)
2. 1 NF (Remive partial dependence)
3. 2 NF (Remove transitive Dependence)
4. 3 NF (Remove multivalued dependence)
5. BCNF  (Boyce codd Normal Form) : 1- Special case of 3NF
                2- Has more strict rules as compared to 3 NF.
                3- A relation is in BCNF if every determinat in thr table is a candidate key.
                4- if a table contain only one candidate key , the 3 NF& BCNF -> Eqivalent.
