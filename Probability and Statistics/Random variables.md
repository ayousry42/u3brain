#Probability

# What are random variables?
> a function that associates a real number with each element in sample space (element X occurs N amount of time function)
> If range is countable(finite) it is a discrete random variable

## Discrete Random Variable distribution
>###  1. Probability Mass Function
>- f(x) >= 0
>-  summation of f(x) = 1
>
>### 2. Cumulative Distribution Function (CDF)
>- Non-decreasing function taking values in interval [0,1]
>- CDF(x) = Summation of PDF(x) from 0 to x
>
> 
>### [[Special Discrete probablity distributions]]

## Mean and Variance
### The Mean (Expectation)
>- its the average value 
>-  **M** = E(x) = Summation x.f(x)  
>-  Its probability usually close to the highest probable value
>
### The Variance
>- How far values are from the mean **M**
>- V(x) = E(x^2) - **M**^2
>- Standard deviation  = root of V(x)
>
### Summation Properties
>- E(ax+b) = aE(x^2) + b
>- V(ax+b) = a^2 . V(x)
## [[Continuous Random variables]] distribution
>### 1. PDF
>- Referred to as f(x)
>- P(a<x<b) = Integral of f(x) from a to b
>- Integral from start to end of f(x) = 1  
>### 2. CDF
>-Referred to as F(x) <- CAPITAL
>- F(x) = P(X<=x) = Integral from starting point till x of f(t) dt
> ![[Screenshot_20220509_225556.png]] 
>### Mean and Variance
>![[Screenshot_20220509_225748.png]]
>
