# Interval Estimation

```ad-important 
title: Rule
P(L $\le$ $\mu$ $\le$ u ) = 1 - $\alpha$ 
```
L: Low confidence limit
u: Upper confidence limit
(l,u) is called Confidence interval or Confidence limit where 100(1-$\alpha$ )% 

# Case1: Confidence interval of $\mu$ when $\sigma^2$ is known and n>30

```ad-info
title: It's rewind time
- $\phi$(Z<sub>$\alpha$/2</sub>)  = 1 - ($\alpha$ / 2)
- P(-Z<sub>$\alpha$/2</sub>< Z < Z<sub>$\alpha$/2</sub>) = 1- $\alpha$ 
``` 

We'll remove Z and put our dist
```ad-info
- P($-Z_\frac{\sigma}{2}$ < $\frac{\bar{x} - \mu }{\frac{\sigma}{\sqrt{n}}} < Z_\frac{\sigma}{2}$) = 1- $\alpha$ 
- so in the end it'll be like :
- P($\bar{x} - Z_\frac{\sigma}{2} \cdot \frac{\alpha}{\sqrt{n}} \le \mu \le \bar{x} + Z_\frac{\sigma}{2} \cdot  \frac{\alpha}{\sqrt{n}}) = 1- \alpha$
- Range = U-L = 2 $Z_\frac{\alpha}{2}$ = 2E   
```

```ad-note
title: Maximum Error & Sample size
n = $(\frac{Z_\frac{\alpha}{2} \cdot \alpha}{E})^2$ 
```

# Case2: When when $\sigma^2$ is unknown but n>30
```ad-important
title: rule
- replace $\sigma$ -> S
- P($\bar{x} - Z_\frac{\sigma}{2} \cdot \frac{S}{\sqrt{n}} \le \mu \le \bar{x} + Z_\frac{\sigma}{2} \cdot  \frac{S}{\sqrt{n}}) = 1- \alpha$
- $\bar{x}$ = $\frac{\sum X}{n}$
- S = $\sqrt{\frac{\sum (X_i - \bar{x})^2}{n-1}}$
```
# Case3: Confidence interval of $\mu$ when $\sigma^2$ is unknown , n<30  
```ad-info
- replace $Z_\frac{\alpha}{2}$ -> $t_\alpha,n-1$ 
- replace $\sigma$ -> S
- then compute same as case 1
```
```ad-important
title: rule
- $\bar{x}$ - $\frac{t_\alpha}{2}$ $\cdot$ $\frac{S}{\sqrt{n}}$ $\le$ $\mu$ $\le$ $\bar{x}$ + $\frac{t_\alpha}{2}$ $\cdot$ $\frac{S}{\sqrt{n}}$
- $\bar{x}$: sample mean  $\frac{1}{n}$ $\sum_{i = 1}^{n}$ $X_i$
- S: sample st.dev
- n: sample size
```

# CI for difference of means of two population $\mu_1$ - $\mu_2$ 
## Case 1:
If $\sigma_1$ , $\sigma_2$ is known or $n_1$>30 , $n_2$>30 
```ad-important
title: normal distr rule
- Sample of pop 1 : $\bar{x}_1$ ~ N($\mu_1$ , $\frac{\sigma^2_1}{n_1}$) 
- Sample of pop 2 : $\bar{x}_2$ ~ N($\mu_2$ , $\frac{\sigma^2_2}{n_2}$)
- $\bar{x}_1$ - $\bar{x}_1$ ~ N($\mu_1$ - $\mu_2$ ,$\frac{\sigma^2_1}{n_1}$ + $\frac{\sigma^2_2}{n_2}$)
- Z = $\frac{(\bar{x}_1 - \bar{x}_2) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma^2_1}{n_1} + \frac{\sigma^2_2}{n_2}}}$ ~ N(0,1)
``` 

```ad-important
title: rule
($\bar{x}_1$ - $\bar{x}_2$) - $Z_\frac{\alpha}{2}$ $\cdot$ $\sqrt{\frac{\sigma^2_1}{n_1}+\frac{\sigma^2_2}{n_2}}$ < $\mu_1 - \mu_2$ < ($\bar{x}_1$ - $\bar{x}_2$) + $Z_\frac{\alpha}{2}$ $\cdot$ $\sqrt{\frac{\sigma^2_1}{n_1}+\frac{\sigma^2_2}{n_2}}$
```

## Case 2
If $\sigma_1^2$ , $\sigma_2^2$ is unknown or $n_1$>30 , $n_2$>30 
Replace $\sigma_1^2$ -> $S^2_1$ 