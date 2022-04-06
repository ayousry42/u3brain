#Probability 

# Special discrete probability distributions
## 1. Bernoulli Trial
- Random experiment with 2 outcomes (Success or failure)\
- 1 time only
- p = probability of success
- q = probability of failure
- x = {0,1} -> number of successes
- E(x) = p
- V(x) = pq
- f(x) = p^x(1-p)^1-x
## 2. Binomials
- n Bernoulli trials
- trials **independent**
- Probability of success is **constant**
- x = {0,1,2,3....n} 
- f(x) = nCx . p^x . q^n-x <- Literally binomial theorem from Senior 3
- E(x) = np
- V(x) = npq = variation^2
- E(X) and E(X') where X and X' are opposite events -> E(x) = n - E(x')
## 3. Geometric Distributions
- Bernoulli trials repeated till **1 success occurs**
- X ~ G(p)
- E(x) = 1/p
- V(x) = p/q
# 4. Poisson Distribution
- F(x) = e^-Y . Y^x. Y = lambda
-  X ~ poisson(Y)
- Proof is literally Mclaurin of e^x
- E(X) = Y
- V(X) = Y
- Lambda -> average success rate