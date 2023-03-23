# Name: Ahmed Yousri Ali
# ID: 2103108
# Sheet 2 Neural Networks : Pandas
---
## Questions
### 1. How can you create a DataFrame in Pandas from a Numpy array or a Python list?
By using pd.DataFrame(numpyarray or list) we can also transfer a lot of list to dictionary and put it in pd,DataFrame(dictionary) 

---
### 2. How can you perform operations on DataFrame columns and rows in Pandas?
- To get Max: DataFrame["Column name"].max()
- To get Min: DataFrame["Column name"].min()
- To get Mean: DataFrame["Column name"].mean()
- To get Sum: DataFrame["Column name"].sum()
- Get specific Column: DataFrame["Column name"]
- Get specific Row: DataFrame[index]
- Get unique values:   DataFrame["Column name"].value_counts()
- Drop NA value row(Empty cells): DataFrame.dropna()
- Fill Empty Cells:  DataFrame.fillna("Unkown")
- Return true value if any row has null values: DataFrame.isnull()
- Return true value if any row is not null values: DataFrame.notnull()
- Returns True if all the characters in the string of the Series/Index are numeric: DataFrame.isnumeric()
- It returns True if all the characters in the string of the Series/Index are in uppercase: DataFrame.isupper()
- It returns True if all the characters in the string of the Series/Index are in lowercase: DataFrame.islower()

---
### 3. How can you sort a DataFrame in Pandas?
#### To sort values:
- To sort by one column: df.sort_values(by=['colname'])
- To sort by multiple column: df.sort_values(by=['colname1','colname2'])
- To sort column descending:  df.sort_values(by='colname', ascending=False)
### To sort index:
- To sort index ascending: df.sort_index()
- To sort index descending: df.sort_index(ascending=False)

---
### 4. How can you drop missing values from a DataFrame in Pandas?
- DataFrame.dropna()

---
### 5. How can you perform groupby operations on a DataFrame in Pandas?
 - For non-hierarchaial indexes:  df.groupby(['colname']).operation()
 - For hierarchaial indexes:
   df.groupby(level=index).operation()

---
### 6. How can you merge two DataFrames in Pandas based on a common column or index?
#### Outer Join
- pd.concat([df1,df2],axis)
#### Inner join
- pd.concat([df1, df2], axis, join="inner")

---
### 7. How can you calculate the mean, median, and mode of a Pandas DataFrame column?
- To get Mean: DataFrame["Column name"].mean()
- To get Median: DataFrame["Column name"].median()
- To get Mode: DataFrame["Column name"].mode()

---
### 8. What is the difference between iloc and loc in Pandas?
The loc() function is label based data selecting method which means that we have to pass the name of the row or column which we want to select,while iloc() function is an indexed-based selecting method which means that we have to pass an integer index in the method to select a specific row/column.