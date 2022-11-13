#Prob2 
### Unbiased Estimator
>ô an estimator of θ
>ô-θ = Error
>bias(ô) = E(ô) - θ
>Un biased esstimator is when bias(ô) =0 or E(ô) = θ

For Example:
> In normal N(µ,σ<sup>2</sup>)
>mu hat = x̄ (by MME,MLE)
>If E(mu hat) = E(x̄) = µ
>then mu hat is unbiased estimator of µ

### MSE
>MSE(ô) = var(ô) + (bias(ô)) <sup>2</sup> 
>When MSE is smaller it'll be better
>if var(ô<sub>1</sub>) < var(ô<sub>2</sub>) then ô<sub>1</sub> is better but when it's unbias

### Efficencey
>if ô<sub>1</sub> , ô<sub>2</sub> are two estimators
>eff(ô<sub>2</sub>/ô<sub>1</sub>) = MSE(ô<sub>1</sub>) / MSE(ô<sub>2</sub>) (5od balak enoh bel ma2lob)
>if eff < 1 that's mean  MSE(ô<sub>1</sub>) < MSE(ô<sub>2</sub>) meaning that ô<sub>1</sub> is more efficent



### Consistency
> MSE(ô) = E(ô-θ) <sup>2</sup> -> 0
> as n -> inf
> E(ô) -> θ

### In conclution
1. Unbiased means **E(θ) = θ**
2. Min var unbiased means when **MSE(ô) = var(ô)**
3. Efficency means  **ô<sub>1</sub> is more eff ô<sub>2</sub> iff MSE(ô<sub>1</sub>) < MSE(ô<sub>2</sub>) unbaiased**
4. Consistency means  MSE(ô) is = 0 as n in terms of infinity 
### VIP NOTES
E(x̄) = E((1/n) Σx<sub>i</sub> ) = 1/n . n µ = µ