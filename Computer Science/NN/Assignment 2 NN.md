# Ahmed Yousri Ali
# ID: 2103108
## 1. load the dataset from the CSV file:
Firstly I imported numpy , pandas , random ,and sklearn.metrics library as np then I load the data and declared it as a variable.
```python
# importing libraries
import pandas as pd 

import numpy as np

import random

from sklearn.metrics import accuracy_score # To calculate accuracy
df = pd.read_csv("/content/iris.csv", header=None)
#Load csv data and the data has no header so head = None
```

---

## 2. From each data class extract 10 samples and add them into one new Dataframe containing all 20 samples , those are your validation set
We took a copy of original data and declare it as train data then I generate random index with no repetition for each class and take it then declare variable as validation set which it takes the random 2 classes indexs 
```python
Data80 = df.copy() # Take a copy of data for original set and make it as train

randindex1 = np.random.choice(50, 10 , replace = False) #random index from 0-50 of size 10 with no rep  

randindex2 = np.random.choice(range(50,101), 10 , replace = False) #random index from 50-100 of size 10 with no rep

Data20 = Data80.iloc[randindex1] #put random index of first class in validation set

Data20 = Data20.append(Data80.iloc[randindex2]).reset_index(drop=True) #put random index of second class in validation and reset the indexes 

Data80 = Data80.drop(randindex1) # Drop the indexes of validation data in training data 

Data80 = Data80.drop(randindex2).reset_index(drop=True) # Drop the indexes of validation data in training data and reset the indexes

print(randindex1) #print the indexes it took of first class

print(randindex2)#print the indexes it took of second class

display(Data80) #print train data

display(Data20)#print validation data
```

---

## 3. Train for 10 full iterations using the remaining 80 samples and 4. Update the weights after each full iteration using MSE. Do not update after each sample.
We will make learn method to get weight and prediction from specific iterations: So firstly  we take the bias random then we initialize weight array with random numbers ,then convert the output to (-1,1) with method I created . calculate the Z by multiply the input with weight then add bias after that we put it in sign function , Calculate MSE then Updating the weight and bias , repeat this method for n iteration then convert y hat to String again as an output.  
Mean square error: $$ \frac{(y-\hat y)^2} {length}$$
Sign function:$$ f(x)=\begin{cases} 1 & \text{for z $\ge$ 0} \\-1 & \text{otherwise}  \end{cases}$$

```python
# MSE function
def mean_sqr_error(act,pred):

  return ((act-pred).sum()**2)/len(act)
```
```python
# Sign rule function

def signfunction (z):

  return np.where(z>=0 , 1 ,-1)
```
```python
# Convert string to 1 or -1 to calculate z and MSE

def converttoint(output):

  return np.where(output=='Iris-setosa' , 1 ,-1)
```
```python
# Convert 1 or -1 to class string for the output

def converttostring(output):

  return np.where(output==1 , 'Iris-setosa' , 'Iris-versicolor')
```
```python
def learn(inp,outp,iteration):

  bias = random.randint(0,2) # Randomize the bias between 0 and 2

  weight = np.random.rand(inp.shape[1]) # rand no. of weight with size of coulmn number

  #print('Weight:',weight)

  outp = converttoint(outp) # Convert string to -1 or 1

  for epoch in range(iteration-1): # Epoch(iteration) for loop

    yhat = np.zeros_like(outp) # Generate array of zeros with size of output

    z = np.dot(inp,weight) + bias # Get Z with rule

    yhat = signfunction(z) # Get sign function with z

    MSE = mean_sqr_error(outp,yhat) # Calculate MSE

    for i in range(len(weight)): #Updating weight and bias

      weight[i] = weight[i] + (((MSE * inp[:,i]).sum()))

      bias = bias + (MSE)

  yhat = converttostring(yhat) # convert -1 or 1 to string for output

  return (yhat,weight)
```
```python
traininput =  Data80.to_numpy()[:,:-1] # Convert pd to np array without label as input 

trainoutput = Data80.to_numpy()[:,-1] # Convert pd to np array label as output

trainyhat,weight = learn(traininput,trainoutput,10) #learn model with train data inp and out with iteration 10 and return weight and y prediction

print("Train prediction:",trainyhat)

print("Train weight:",weight)
```

---
## 5. After finishing the training infer with the validation set on the trained weights and calculate the accuracy.
I make predict method that take input , bias ,and weight to predict the label 
we Convert pd to np array without label as input and with label as output ,then we predict the label of validation set:
```python
def predict(inp,bias,weight): #To predict the label with sign function

  yhat = np.zeros_like(inp.shape[0])

  z = np.dot(inp,weight) + bias

  yhat = signfunction(z)

  yhat = converttostring(yhat)

  return yhat
```
```python
validationinput = Data20.to_numpy()[:,:-1]

validationoutput = Data20.to_numpy()[:,-1]

prediction = predict(validationinput,0.5,weight)

print("Prediction in validation", prediction)

print("Accuracy score:",accuracy_score(prediction,validationoutput))
```