# Name: Ahmed Yousri Ali
# ID 2103108
# Sheet 1 Neural Networks : Pyhton libries - Numpy
---
## Questions
### 1. How can you create a Numpy array? What is the shape of a Numpy array and how can you get it?
- By numpy funciton (numpy.array(object , data type ))
-  Shape is a numpy function that returns tuple with each index have number of corresponding elements (ex: If 2d : (Row,Coulmn)) and it get by array.shape
### 2. How can you perform element-wise operations on Numpy arrays (list the possible element-wise operations) ?
- np.add() (Addition), np.subtract() (subtraction), np.multiply()(multiplication), np.divide()(division),np.power()(First array elements raised to powers from second array) , np.remainder() (remainder of division) , np.reciprocal() (reciprocal of the argument) , np.abs() (absolute value) , np.floor() (Floor) , np.ceil() (Ceiling) , np.round()(Round the givien number)
### 3. How to sum all elements of one array ?
- numpy.sum(array)
### 4. How to transpose a Numpy array?
- array = numpy.transpose(array)
- OR array = arr.T
### 5. What transpose do to the Numpy array?
- Permute or reserve the dimension of the input array meaning it converts the row elements into column elements and the column elements into row elements.
### 6. Having matrixA and matrixB both with shape (3,2) how to create a numpy array withshape (2,3,2) using np.concatenate?
- c = np.concatenate(([a],[b]))
### 7. What is the difference between reshape and resize in Numpy?
- reshape() does not change the data inside of it, but resize() does change it.
### 8. How can you extract the diagonal elements of a Numpy array?
- dig = np.diag(arr)
### 9. What is the difference between np.dot and np.matmul in Numpy?
- np.matmul() is like we took in linear algebra (2x3martix multiply by 3x2 matrix then  we get 2x2 matrix) 
- np.dot () is a dot product should be the same size and the output is the same size
### 10. How can you perform element-wise comparison of two Numpy arrays (list the possibleelement-wise comparisons)?
- np.fmin(arr1, arr2) (Compare minimum)
- numpy.logical_and(arr1, arr2) (Compute the truth value of arr1 AND arr2)
- numpy.logical_or(arr1, arr2) (Compute the truth value of arr1 OR arr2)
- numpy.logical_not(arr1, arr2) (Compute the truth value of arr1 NOT arr2)
- numpy.logical_xor(arr1, arr2) (Compute the truth value of arr1 XOR arr2)
- numpy.greater(arr1,arr2) (Return the truth value of (x1 > x2))
- numpy.greater_equal(arr1,arr2) (Return the truth value of (x1 >= x2))
- numpy.less(arr1,arr2) (Return the truth value of (x1 < x2))
- numpy.less_equal(arr1,arr2) (Return the truth value of (x1 =< x2))
- numpy.equal(arr1,arr2) (Return the truth value of (x1 = x2))
- numpy.not_equal(arr1,arr2) (Return the truth value of (x1 != x2))