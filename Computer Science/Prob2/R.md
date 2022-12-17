#Prob2
## RPD
- rnorm,rexp,rbnorm -> for Sample
- pnorm,pexp,pbnorm -> CDF
- dnorm,dexp,dbnorm -> PDF
- qt -> for t-distq

## Bern. pop
```R
n=10000
# n is sample size
x=rbnorm(n,1,0.5)
# 1 is for range between 0 to 1
# 0.5 is for probability  
p=sum(x)/n
p
```

## Nor pop
```R
n=100000
#The more the sample size is bigger the result will be better but not too much (Cause memory RAM)
x=rnorm(n,mean=10,sd=3)
#Sd and mean is given
mean_est = sum(x)/n
var_est = (sum(x^2/n) - (mean_est))^2
mean_est
var_est
```

```R
# Max liklehood
sample = rnorm(100000,mean=4,sd=2)
mle = optim(par = c(mu= .2 , sigma = 1.5),fn=NLL,data=sample,control= list(parscale=c(mu= .2 , sigma = 1.5)))
NLL = function(pars,data)
{
    # Extract parameters from the vector
	mu = pars[1]
	sigma = pars[2]
	NLL = -sum(dnorm(x = data , mean = mu, sd = sigma , log = TRUE))
	# Log of pdf
	# negative to get max
}
mle$par
```
## Exp. pop
```R
sample = rexp(100000,rate=10)
mle = optim(par = c(rate= .5),fn=NLL,data=sample,control= list(parscale=c(rate = .5)))
NLL = function(pars,data)
{
	rate = pars[1]
	NLL = -sum(dexp(x = data , rate = rate , log = TRUE))
	# Log of pdf
	# negative to get max
}
mle$par
```