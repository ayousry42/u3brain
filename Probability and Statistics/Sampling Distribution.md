# Sampling Distribution
#Probability 
**They are all random variables**
## Population
### Values to know 
- Parameters: 
	- Population Mean → µ
	- Population variance → σ
### Definition
- Set of all elements under investigation
- Hard to define
- Can't contact and observe everyone realistically
### Examples
>- People voting in elections


## Sample

### Things to know
- Statistics (not parameters)
	- Point estimate -> $\bar{X}$ (Sample mean)
	- Sample standard deviation -> S
	- Sample variance -> S²
Each element within the sample itself is a random variable with its own E(x) and Variance
- Readings/Observations (x$_1$,x$_2$....etc)
- Sample size affects Variance but not the Mean (µ)

-  Properties
	- Subset of population
	- Much easier to observe 
	- Cheaper and Faster
	- Serves as a testing ground before doing the real thing

### Examples
>- Asking 10 random people from each category

### Random Sample
- Must be random 
- All statistics are independent 
- Unbiased
- Representative
  must reflect whole population (All categories)
- Conditions
  1. X$_1$,X$_2$....X$_n$ are all independent 
     See [[Joint probability|Independent random variables]]
  2. X$_1$,X$_2$,X$_3$....X$_n$ have the same distribution
     E(X$_1$) = E(X$_2$) = E(X$_3$) = µ etc
     V(X$_1$) = V(X$_2$) = V(X$_3$) = σ² etc
 independent and identically distributed
 ### Rules
 1. E($\bar{X}$) = µ
 2. V($\bar{X}$) = σ²/n
 
### $\bar{X}$ Distribution
1. Any Random Sample from [[Normal (Gaussian) Distribution|normal distribution]] Normal(µ, σ²) have sample mean $\bar{X}$ where $\bar{X}$ ~ Normal(µ, σ²/n) 
   Standard form:![[Pasted image 20221009234429.png]]
2. Central limit theorem
   Any random sample  with a mean µ and variance σ² is normal when the sample size is large enough (n ≥ 30)
3. Standard error --> Standard deviation of $\bar{X}$ distribution
## Estimation
### Definition
- Literally in the name lol
- Chapter 2
### Examples
- How you know when Trams are coming 

## Confidence
- Interval that we get for population from samples
- Chapter 3