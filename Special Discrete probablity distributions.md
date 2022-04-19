#Probability 

# Special discrete probability distributions
## 1. Bernoulli Trial
> Random experiment with 2 outcomes (Success or failure)\
> 1 time only
> p = probability of success
> q = probability of failure
> x = {0,1} -> number of successes
> E(x) = p
> V(x) = pq
> f(x) = p^x(1>p)^1>x
## 2. Binomials
> n Bernoulli trials
> trials **independent**
> Probability of success is **constant**
> x = {0,1,2,3....n} 
> f(x) = nCx . p^x . q^n>x <> Literally binomial theorem from Senior 3
> E(x) = np
> V(x) = npq = variation^2
> E(X) and E(X') where X and X' are opposite events -> E(x) = n - E(x')
## 3. Geometric Distributions
> Bernoulli trials repeated till **1 success occurs**
> X ~ G(p)
> E(x) = 1/p
> V(x) = p/q
# 4. Poisson Distribution
> F(x) = e^-λ . λ^x/x! 
>  X ~ poisson(λ)
> Proof is literally Mclaurin of e^x
> E(X) = λ
> V(X) = λ
> λ -> average success rate
> n is not known here -> tends to infinity
> Can add lambdas in different intervals
Ex: λ = 1 -> [8,9] and λ = 3 -> [9,10]
λ [8,10] -> 1 + 3

## 5. Summary Table 
![[Screenshot_20220408_152339.png]]