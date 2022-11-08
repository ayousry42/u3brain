# Writing SQL Codes:
#### Switch to schema
- `USE` schema
#### **To insert**
insert into **table name** (col1,col2) values (col1value,col2value);

 #### To show table but with exceptions
  Select * from **table name** where **colname=value**; 

#### **To delete all data in table **(NOT THE TABLE)**
Delete from table name;

#### **To delete specific data**
Delete from **table name** where colname=value;

#### **To edit table (add)**
Alter Table tablename add colname datatype(constrain);

#### To edit table **(Delete)**
Alter Table drop colname;

#### To rename table:
ALTER table table name rename name to another name;

#### To delete
Drop table table name;

#### To update one specific value
Update table name set name='name' where id = 'number';

#### To update all specific value: 
Update traning set name=(select name from student where id=2);

#### Order by:
Select colmname from table name where age<22 Order by age Asc(or DESC);