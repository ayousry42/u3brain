#Prob2
## Rules
1. P(A U B) = P(A) + P(B) - P(A ∩ B) (A,B should be Mutuall Exclusive P(A ∩ B)=0).
2. P(A ∩ B) = P(A/B) * P(B) OR P(B/A) * P(A) (If they're dep).
3.  P(A ∩ B) = P(A) * P(B) (If they're indep)
4. P(A/B)= P(A ∩ B)/P(B)
5. if A,B are indep: P(A/B)= P(A)

## Random Variable
#### Discrete vs Continues
1. Discrete: PMF p(x)
EX: ![[Pasted image 20221021213057.png]]
CDF(Sum of prob and the prob before it):
P(0) = 1/4
P(1)=P(1) + P(0) = 3/4
P(2)=1
2. Cont:
 PDF : p(a<sub>1</sub> < x < b<sub>1</sub> ) = F(b1)- F(a1)

  
## Expectation vs variance
### Expectaion
1. Discrete: E(x) = Σ x<sub>i</sub> f(x<sub>i</sub>) = μ
2. Cont: E(x) intgerat of x<sub>i</sub> f(x<sub>i</sub>)
###### some other rules
C: costant
E(C) = C
E(C g(x)) = C E(g(x))
E(ax+b) = aE(x)+b
### Variance
σ = St deviation
V(x) = σ<sup>2</sup> 
V(x) = E(x-μ)<sup>2</sup> = E(x<sup>2</sup> )- μ<sup>2</sup> 
###### some other rules
V(x)=0
V(c g(x)) = C<sup>2</sup> v(g(x))
V(ax+b) = a<sup>2</sup> v(x)

## Moment generating function
M<sub>x</sub> (t) = E(e<sup>xt</sup>)
M'<sub>x</sub> (0) = M<sub>1</sub> = E(x)
M''<sub>x</sub> (0) = M<sub>2</sub> = E(x<sup>2</sup>)

## Discrete distr
1. Bernoulli Trial (S or F): 
    P(Success) = p
    P(Fail) = 1-p = q
    E(x) = p
    V(x) = pq
2. Bimomial exp:
    E(x)=np
    V(x)=npq

## Continuous dist
1. Uniform:
    f(x) = 1/b-a
    E(x) = (a+b)/2
    V(x) = (a-b)<sup>2</sup>/12

## Normal distr
X ~ Normal(μ,σ)

To convert normal to standard normal :
P(x<a)  x~ normal(μ,σ)
Standar norm -> P((x-μ/σ)<(a-μ/σ))  
(x-μ/σ) will convert to -> Z
and (a-μ/σ) will be an numb let's say -> a<sub>1</sub> 
So it'll become P(Z<a<sub>1</sub>)= Φ(a<sub>1</sub>)