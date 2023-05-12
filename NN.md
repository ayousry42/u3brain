# Ahmed Dawood Moahmed

# 20221454408

# Sheet 4 Solution

---
# Q1

$$f(x) =w1x1+w2x2+b$$



- Benefits of non-linear activation function

  - some times the data is nonlinear seperable so we need more than layer to sepreat the data in case of multi layer without non-linear activation function the final outbut would still linear so we need to non-linear activation function to male MLE efficient

  

  - Non-linearity: Neural networks without activation functions would be limited to linear transformations of the input data, which are not expressive enough to model complex non-linear relationships so Activation functions introduce non-linearity into the network

  

  - Output range: Activation functions can constrain the output range of the neurons in the network to a specific range, such as between 0 and 1 or between -1 and 1. This can be important in some applications where the output needs to be within a specific range, such as probability values.

  

  - Sparsity: Some activation functions, such as the ReLU function, can introduce sparsity in the network by setting some of the neurons to zero. This can improve the efficiency of the network and reduce overfitting.
- ### Weights and bias formula
![[Pasted image 20230331195433.png]]

---
# Q2
**Mean and Standard deviation of high scool GPA :**

$\mu$ = 3.125  ,

$\sigma$ = 0.4657 

  

**Mean and Standard deviation of First year-collage GPA :**

$\mu$ = 3.375   ,

$\sigma$ = 0.396

  
  
  

##### n=4  , $\sum$ x  =12.5    , $\sum y$ =13.5    , $\sum xy$ =42.88    , $\sum x^2$  =39.93    , $(\sum x)^2$ =156.25  

  
  
  

**m= 0.7983**

  

**b=0.8804**

  

**$\hat{Y} = mx+b $**

  

#### First year collage GPA given that  high school GPA of 3.5 :

  

$\hat{Y}$ = 0.7983*3.5+0.8804 = 3.67445 

---
# Q3

**Mean and Standard deviation price :**

$\mu = 135$  ,

$\sigma = 11.18$

  

**Mean and Standard deviation of Size :**

$\mu = 2.35$  ,

$\sigma = 0.269$

  
  
  

##### n=4  , $\sum x$ =9.4  , $\sum y$ =540    , $\sum xy$ =1281    , $\sum x^2$  = 22.38   , $(\sum x)^2$ =88.36

  
  
  

**m= 41.379**

  

**b=37.7586**

  

**$\hat{Y} = mx+b$**

  

#### House's price given that size =3  :

  

**$\hat{Y} = 41.379*3+(37.7586) = 161.8956$**

---
#### Initially :  $w0 =w1 =w2 =0.5$  

  

#### We will use zero one error  : if Y=$\hat{Y}$  error = 0 ,  otherwise error = 1

  

#### We will use step function as an activation function if $Z>=$ then outcome =1  ,  otherwise outcome = 0

  
  

Z1 =w1x1+w2x2+w0

  

$Z1 = 0.5 + (0.5) 45 + (0.5) 0 = 23$

  

$\hat{Y} = 1$  ,   error = 0

  

**-------------------------------------------------------------------------------------------------**

  

$Z2= 0.5 + (0.5) 52 + (0.5) 1 = 27$

  

$\hat{Y} = 1$  ,   error = 1

  
  

 - updating the weights :

  - $w1 = 0.5 + 52 = 52.5$

  - w2 =  0.5 + 1 = 1.5

  - $w0 = 0.5 + 0 = 0.5$

  

**---------------------------------------------------------------------------------------------------**

  

$Z3 = = 0.5 + (52.5) 27 + (1.5) 1 =1419.5$

  

$\hat{Y} = 1$  ,   error = 0

  

**---------------------------------------------------------------------------------------------------**

  

$ Z4 = = 0.5 + (52.5) 31 + (1.5) 0  =1628 $

  

$\hat{Y} = 1$  ,   error = 1

  

- updating the weights :

  - $w1 = 52.5 + (1)31 = 83.5$

  - $w2 = 1.5 + (1)0 = 1.5$

  - $w0 = 0.5 + (1)0 = 0.5$

  

**---------------------------------------------------------------------------------------------------**

  

Z5 = = 0.5 + (83.5) 48 + (1.5) 1  =4010

  

$\hat{Y} = 1$  ,   error = 0

  

**---------------------------------------------------------------------------------------------------**

  

## prediction :

$Z= 0.5 + (83.5) ⋅ x1 + 1.5 ⋅ x2$

  

$Z= 0.5 + (83.5) ⋅ 35 + (1.5) ⋅ 0 = 2923$

  

$\hat{Y} = 1$

---

# Q5

MSE = $\frac{1}{n} \sum (y-(b1X+b0) )^2$

  

- **Partial derivative with respect to :**

  

   - b0 = $\frac{1}{n} \sum -2(y-(b1x+b0))$

  

   - b1 =$\frac{1}{n}  \sum -2(y-(b1x+b0))x$

  

**the meaning of partial derivative is that we try to find the rate of the change that happens in loss function with respect to weights to modify weights until reach minimum error as possible**

  

- **update rule :**

  

  - $b1$ new =b1 old -$\alpha *\Delta b1$

  

  - $b0$ new =b0 old -$\alpha *\Delta b0$

  

  - where : $\alpha$ : leraning rate ,   $\Delta b1: \frac {d Erorr}{b1}$   ,  $\Delta b0 : \frac{d Erorr}{b0}$
  
  ---
 
 # Q6
 - L(θ) = $\sum yi log(\sigma(b1*x+b0)) + (1 − yi) log(1 − \sigma(b1*x+b0))$

  

   - where : $\hat{Y}$ = (b1*x+b0)   ,   $\sigma(b1*x+b0)$ : is a sigmoid activation function and could be any other activation function

- partial derivatives

    - $\Delta b1 = ((b1*x+b0)-y)*x $

    - $\Delta b0 = ((b1*x+b0)-y) $