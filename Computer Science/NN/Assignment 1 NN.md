# Ahmed Yousri Ali
# ID: 2103108
---
## Question1: Load the data from the .npy file and print the array dimensions.
Firstly I imported numpy library as np then I load the data and declared it as a variable.
```python
import numpy as np #Import numpy

Data = np.load("/content/sales_data.npy") # Load the data and declare a variable for it

print(Data) #Printing the data
```
---
## Question 2: Slice the array to extract the sales data for the year 2022.
We declare a variable named datayearcol that is array of year taken from data array then we loop through the data by for loop and apply if statement to get row index of data of year 2022 and add this index data to the data2022 list then convert it to numpy array.
```python
datayearcol = Data[:,0] #Array of years

data2022 = [] #Empty list for 2022 to append

for i in range(len(datayearcol)): #Looping through the data

 if '2022' in datayearcol[i]: # If statement for get row index of year 2022

  data2022.append(Data[i,:]) #Add this data with index i in data2022 list

data2022 = np.array(data2022) #Convert it to numpy array

print(data2022) #Printing the data with year 2022
```
---
## Question 3: Calculate the total sales amount for each country for the year 2022.
I declared a variable named total so I will need it to calculate the total sales for all countries, then I used for loop to go through all data then and IF  statement to get row index of year 2022 inside both for and if statement I calculate the total sales of all country and print sales data for each country by slice data at i (row index) and 1 (Country column) and -1 (Sales column ) PS: I used -1 that mean last column index.
```python
total = 0 #Variable for calculate total sales for all countries

for i in range(len(Data)): #Looping through the data

  if '2022' in Data[i,0]: # If statement for get row index of year 2022

    total+=int(Data[i,-1])  #Calculating the total sales for all countries

    print("Country:",Data[i,1],"Sales:",Data[i,-1],end="\n") #Printng the sales data of each country in 2022

print("Total Sales in 2022:",total)
```
---
## Question 4: Calculate the mean sales amount for each product over the entire period.
I declare 3 list for each product (A,B,C) then goes in a for loop to go through all data ,then if statement to check each product (A,B,C) in Product column ,then add each product and its sales data in list to its product list then I convert each list to numpy array to calculate mean easliy with .mean() function finally I also calculate all products mean.
```python
TotalProductA=[] # List for product A

TotalProductB=[] # List for product B

TotalProductC=[] # List for product C

for i in range(len(Data)): #Looping through the data

  if 'Product A' in Data[i,2]: # If statement to check it's product A

    TotalProductA.append(int(Data[i,-1])) #Adding sales of product A to the list

  if 'Product B' in Data[i,2]: # If statement to check it's product B

    TotalProductB.append(int(Data[i,-1]))#Adding sales of product B to the list

  if 'Product C' in Data[i,2]:# If statement to check it's product C

    TotalProductC.append(int(Data[i,-1])) #Adding sales of product C to the list

TotalProductA = np.array(TotalProductA) #Convert list to numpy array(to calculate mean  easily)

TotalProductB = np.array(TotalProductB) #Convert list to numpy array(to calculate mean  easily)

TotalProductC = np.array(TotalProductC) #Convert list to numpy array(to calculate mean  easily)

#Print the mean of each and all product

print("Product mean for Product A:",TotalProductA.mean()) 

print("Product mean for Product B:",TotalProductB.mean())

print("Product mean for Product C:",TotalProductC.mean())

print("Total product mean:", total/len(Data))
```

---
## Question 5: Extract the total sales amount for each country for the year 2023 and Append it to a separate array.
I declare a list named Data2023 for the total sales data in each country in 2023 ,then used loop to go through all data ,then add sales and country data of 2023 in Data2023list then convert it to 2D numpy array.
```python
Data2023 = [] #List for total sales data in each country

for i in range(len(Data)):

  if '2023' in Data[i,0]: # If statement for get row index of year 2023

    Data2023.append(Data[i,[1,-1]]) #Adding sales and country data of 2023 in list

Data2023 = np.array(Data2023) #Convert list to array

print('2023 Sales:\n',Data2023) #Print 2023 sales data
```

---
## Question 6: Delete the sales data for Ireland for the year 2021.
Firstly I declare variable that copies Data array then goes in a loop and if statement to get row index that have both year 2021 and Ireland country then delete this row by using np.delete(array,row , axis).

```python
Delete2021 = Data #Declare variable coping data  

for i in range(len(Data)): 

  if '2021' in Data[i,0] and 'Ireland' in Data[i,1]: # If statement for get index of year 2021 and being Ireland country

    Delete2021 = np.delete(Delete2021 , i ,0) #Delete the row index of delete array

print(' Deleted Ireland sales in 2021:\n',Delete2021) #Print the array with Ireland  being deleted
```

---
## Question 7: Find the unique product names and print them sorted alphabetically.
Firstly I declare a variable that takes data of product names coulmn only , then apply np.unique() to get unique elements in the array,then sort them by using sorted() function that sort the data alphabetically.

```python
UniqueData=Data[:,2] #Get data of product names

UniqueData = np.unique(UniqueData) #Get unique name of the product

SortedUniqueData = sorted(UniqueData) #Sort the unique name of the product

print('Unique sorted product names:\n',SortedUniqueData)
```
---
## Question 8: Create a 2D array with random values of shape (20, 3) and concatenate it with the salesdata array along the second axis.
I used np.random.rand() function that generate random number between (0-1) in 2d array with shape (20 rows ,3 columns) , then I concatenate the data with the generated no. 2d array using np.concatenate() function along the 2nd axis (axis=1) so it'll produce new 2D array that have 20 rows and 8 columns so it's like we add new 3 coulmns to the old data.

```python
random2d = np.random.rand(20,3) #Generate random 2d array with shape (20,3)

random2d = np.concatenate((Data,random2d), axis=1) # Concatenate Data with the random  array in the second axix

print(random2d) #Printing the concatenated data
```

---
## Question 9: Save the output in modifiedsalesdata.npy and Explain what happened to the matrix by doing the concatenation above.

I used np.save() function that takes 2 parameters ('filename',array) to save the array in a external file. I explained the concatenation in the answer above

```python
np.save('modifiedsalesdata.npy',random2d) #Saving the concated data in external file named modifiedsalesdata.npy
```

###### ![[Pasted image 20230303173931.png]]

---
## References that helped me
- https://numpy.org/doc/stable/index.html
- https://www.geeksforgeeks.org/numpy-ndarray/?ref=lbp
- https://iq.opengenus.org/2d-array-in-numpy/
- https://learnpython.com/blog/sort-alphabetically-in-python/
- https://www.askpython.com/python-modules/numpy/save-in-npy-format
- https://youtu.be/QUT1VHiLmmI