#Prob2 
# Case of two populaton

X<sub>1</sub> -> X <sub>n</sub> ~ N ( μ , 𝜎<sup>2</sup>)
E(X<sub>1</sub> -> X <sub>n</sub>) = nμ
V(X<sub>1</sub> -> X <sub>n</sub>) = n 𝜎<sup>2</sup> 

E(x̄<sub>1</sub>-x̄<sub>2</sub>) = μ<sub>1</sub>-μ<sub>2</sub>
V(x̄<sub>1</sub>-x̄<sub>2</sub>) = (𝜎<sup>2</sup><sub>1</sub> / n <sub>1</sub> )  + (𝜎<sup>2</sup><sub>2</sub> / n <sub>2</sub> )

So
if x̄<sub>1</sub> ~ Normal , x̄<sub>2</sub> ~ Normal
therefore
(x̄<sub>1</sub>-x̄<sub>2</sub>) ~ Normal (μ<sub>1</sub>-μ<sub>2</sub> , (𝜎<sup>2</sup><sub>1</sub> / n <sub>1</sub> )  + (𝜎<sup>2</sup><sub>2</sub> / n <sub>2</sub> ))

Z = (x̄<sub>1</sub>-x̄<sub>2</sub>) - (μ<sub>1</sub>-μ<sub>2</sub>) / Sqrt((𝜎<sup>2</sup><sub>1</sub> / n <sub>1</sub> )  + (𝜎<sup>2</sup><sub>2</sub> / n <sub>2</sub> ))

if 𝜎<sup>2</sup><sub>1</sub> , 𝜎<sup>2</sup><sub>2</sub> are unkown , n1 >=30 , n2 >=30 so we replace 𝜎<sup>2</sup><sub>1</sub> , 𝜎<sup>2</sup><sub>2</sub> by -> S<sup>2</sup><sub>1 </sub> ,S<sup>2</sup><sub>2</sub> 

# Chi Squared population
If Z<sub>1</sub> -> Z<sub>k</sub> are i.i.d N(0,1) {Indep. Standard normal random variable} 
Let U = Z<sup>2</sup><sub>1</sub> + Z<sup>2</sup><sub>2</sub>+...+Z<sup>2</sup><sub>k</sub>
X -> (Chi)
Therefore U ~ X<sup>2</sup> <Sub>k</sub> with k degrees of freedom 
E(U) = k   
V(U) = 2K
#### Important rule: 
![[Pasted image 20221028170856.png]]

In other word : Summation of Standard Normal all squared follows Chi squared of n
 n
 Σ   U<sub>i</sub> ~ X<sup>2</sup> <sub> k1 +k2 ....+kn</sub> 
 i+1

#### Other rules
The distr of S<sup>2</sup>:
S<sup>2</sup> = 1/n-1 * Σ (x<sub>i</sub> - x̄)<sup>2</sup> 
Therefore :
![[Pasted image 20221028173311.png]]

# T distribution 
Z~ N(0,1) , U ~ X<sup>2</sup><sub>r</sub>
then T = Z/(Sqrt(u/r)) ~ t<sub>r</sub>  
T = (x̄ - μ) / (s/sqrt(n))

F(t<sub>α</sub>) = 1 - α
t<sub>α</sub> = F(1 - α)<sup>-1</sup>
F(-t<sub>α</sub>) = 1 - F(t<sub>α</sub>) = α
P(T>t<sub>α</sub>) = α
P(T<t<sub>α</sub>) = 1 - α

Special case:
F(t<sub>α2</sub>) -F(t<sub>α1</sub>)= α<sub>2</sub> - α<sub>1</sub>
# F distribution 
U<sub>1</sub> ~ X<sup>2</sup><sub>r1</sub>
U<sub>2</sub> ~ X<sup>2</sup><sub>r2</sub>
then F = (U<sub>1</sub>/r1) /  (U<sub>2</sub>/r2) ~ F<sub>r1,r2</sub> 
# Random Variable Cases
In conclution we have 3 cases of R.V
1. Sample taken from normal population 𝜎<sup>2</sup> is known 
    x̄ ~ Normal(μ,σ<sup>2</sup>/n)
    Z -> (x̄ - μ) / (σ/√n) 
    (Lecture 2)
2. n>=30
    - Like first case sample taken from any distr.
     x̄ ~ Normal(μ,σ<sup>2</sup>/n) 
    and if  𝜎<sup>2</sup> is unknown -> S<sup>2</sup>
3. when n<30 and 𝜎<sup>2</sup> is unknown: 
    1) Chi squared distribution
    2) T distribution
    3) F distribution