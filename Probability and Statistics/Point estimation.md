#Probability 
Statistics --> Descriptive and Inferential
Function of random sample that doesn't depend on unknown points --> Statistics
## Inference
- to make some conclusion based on incomplete information (educated guess)
- Conclusion about population from sample data
### Parameter estimation
- Point estimation --> $\hatµ$  = $\bar X$ 
- θ is population parameter 
- $\hatθ$ is function from sample data
# How to get point estimate?
## Method of Moment Estimation
- Method of [[Moment Generating Function|moment]] estimation
- In terms of population parameter
- µ$_k$ = m$_k$ (Population moment = sample moment)
- ##### When population is continuous
  - E(X) = $\int_{-\infty}^{\infty}{f(x).x}$
  - E(Sample) --> $\sum{\frac{X_i}{n}}$ --> Always discrete
- ##### When population is [[Random variables#Discrete Random Variable distribution|discrete]]
  - E(X) = $\sum_{i=1}^{n}{f(x) * x}$
## Maximum likelihood estimation
1. L(θ) = $\prod_{i = 1}^{n}{f(X_i,θ)}$
2. *Take $\ln$* --> $\ln{L(θ)}$ = $\sum_{i = 1}^{n}{\ln{f(X_i,θ)}}$
3. *Derive* --> $\frac{d\ln{L(θ)}}{dθ}$
-  Invariance property
	- New estimators --> replace the required parameter with the original point estimator $\hat{θ}$ 

#### Properties of Estimates

## Which Estimator is better?
Need 3 things
1. [[#Bias]]
2. [[#Efficiency]]
3. [[#Consistency]]

## Bias 
- if $\hat{θ}$ is an estimator --> bias = E($\hat{θ}$) - θ 
- if estimator = the parameter --> unbiased
## Mean square error 
- MS E($\hat{θ}$) = E($\hat{θ}$ - θ)²
- *proof here*
- MS E($\hat{θ}$) = Var($\hat{θ}$) + ( bias($\hat{θ}$) )²
## Minimum Variance Unbiased Error
- Only for unbiased estimator
- Mean Square error = Var($\hat{θ}$)
## Efficiency 
- For all cases
- Efficiency --> compare MS E($\hat{θ}$)
- More efficient when error is less.
- $\hatθ_1$ > $\hatθ_2$ when MSE($\hatθ_1$) < MSE($\hatθ_2$) --> $\hatθ_1$ better my friend :D

## Consistency
- $\lim_{n\to\infty}$ MSE($\hat{θ}$)
- if there's n in denominator --> MSE equals 0 at ∞ --> gg eg consistent




