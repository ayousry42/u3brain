# Ahmed Daeood Moahmed 
# 20221454408
# Sheet 4 Solution 

### Weights and bias formula

![1_a_LOmWEm2KHW4cpDho3A_w.png](attachment:1_a_LOmWEm2KHW4cpDho3A_w.png)

# Q2

**Mean and Standard deviation of high scool GPA :**
$\mu = 3.125 $  ,
$\sigma = 0.4657 $

**Mean and Standard deviation of First year-collage GPA :**
$\mu = 3.375 $  ,
$\sigma = 0.396 $



##### n=4  , $\sum x $ =12.5    , $\sum y $ =13.5    , $\sum xy $ =42.88    , $\sum x^2 $  =39.93    , $(\sum x)^2 $ =156.25  



**m= 0.7983**

**b=0.8804**

**$\hat{Y} = mx+b $**

#### First year collage GPA given that  high school GPA of 3.5 : 

**$\hat{Y} = 0.7983*3.5+0.8804 = 3.67445 $**

# Q3

**Mean and Standard deviation price :**
$\mu = 135 $  ,
$\sigma = 11.18 $

**Mean and Standard deviation of Size :**
$\mu = 2.35 $  ,
$\sigma = 0.269 $



##### n=4  , $\sum x $ =540   , $\sum y $ =9.4   , $\sum xy $ =1281    , $\sum x^2 $  =73400    , $(\sum x)^2 $ =291600



**m= 0.024**

**b=-0.89**

**$\hat{Y} = mx+b $**

#### House's price given that size =3  : 

**$\hat{Y} = 0.024*3+(-0.89) = -0.818 $**

# Q5

MSE = $ 1/n \sum (y-(b1X+b0) )^2 $

**Partial derivative with respect to :**

$b0 = 1/n \sum -2(y-(b1x+b0))$

$b1 = 1/n  \sum -2(y-(b1x+b0)) *x $

**the meaning of partial derivative is that we try to find the rate of the change that happens in loss function with respect to weights to modify weights until reach minimum error as possible**

**update rule :**

$b1$ new =b1 old -$\alpha *\Delta b1$

$b0$ new =b0 old -$\alpha *\Delta b0$

where : $\alpha$ : leraning rate ,   $\Delta b1: d Erorr / b1$   $\Delta b0 : d Erorr / b0$

# Q6

- L(θ) = $\sum yi log(\sigma(b1*x+b0)) + (1 − yi) log(1 − \sigma(b1*x+b0))$

   - where : $\hat{Y}$ = (b1*x+b0)   ,   $\sigma(b1*x+b0)$ : is a sigmoid activation function and could be other activation functions
   
- partial derivatives 
    - $\Delta b1$ = ((b1*x+b0)-y)*x
    - $\Delta b0$ = ((b1*x+b0)-y)

   
