#Database
# Writing SQL Codes:
#### **To insert**
`insert into **table name** (col1,col2) values (col1value,col2value);`

#### **To show table but with exceptions**
`Select * from **table name** where **colname=value**; `

#### **To delete all data in table **(NOT THE TABLE)**
`Delete from table name;`

#### **To delete specific data**
`Delete from **table name** where colname=value;`

#### **To edit table (add)**
`Alter Table tablename add colname datatype(constrain);`

#### To edit table **(Delete)**
`Alter Table drop colname;`

#### To rename table:
`ALTER table tablename rename name to another name;`

#### To delete
`Drop table tablename;`

#### To update one specific value
`Update tablename set name='name' where id = 'number';`

#### To update all specific value: 
`Update traning set name=(select name from student where id=2);`

#### Order by:
`Select colmname from tablename where age<22 Order by age Asc(or DESC);`

#### Create Index
`Create index indexname on tablename(col1,col2,col3);`
`Create unique index indexname on tablename (col1,col2,col);`

## Search for word that partially same as another word
- % -> for sequence character
- _ -> for single character
`Select * from product where PName LIKE ``%gimzo`` `
## To eliminating duplicates
`Select DISTINCT attribute from tablename`

 
## Comon Domain in SQL
1. Char
2. varchar
3. int
4. small int
5. numeric
6. real , double
7. float
8. date
9. time
10. datetime (Like mixing between them)

## Constrains after attribute
1. Primary Key
2. Not Null
3. Unique
4. Check (Like if statment)

## Join types
##### JOIN USING
return only rows with matching values in the column (must be common column)
`SELECT att from table1 Join table2 USING (common-column)`
##### JOIN ON 
when column are not the same name but have same type
`SELECT column FROM table1 JOIN table2 ON (Join condition)`

##### INNER JOIN
is used to match primary and foreign key and only return rows from each table that have matching rows
`SELECT table1.col1,table2.col2 From table1 INNER JOIN table2 ON table1.col1=table2.col2`

SAME AS

`SELECT table1.col1,table2.col2 From table1, table2 where table1.col1=table2.col2`

##### OUTER JOIN
###### LEFT OUTER JOIN
Include the left tuple even if there's no match
`SELECT table1.col1,table2.col2 From table1 LEFT OUTER JOIN table2 ON table1.col1=table2.col2`

###### RIGHT OUTER JOIN
Include the right tuple even if there's no match

`SELECT table1.col1,table2.col2 From table1 RIGHT OUTER JOIN table2 ON table1.col1=table2.col2`
###### FULL OUTER JOIN
Include both right and left outer join

`SELECT table1.col1,table2.col2 From table1 OUTER JOIN table2 ON table1.col1=table2.col2`

## Queiris
 Nested Query (Select insde select BRUH)
