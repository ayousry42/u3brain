#Prob2 
### Some important rules
- Summetion:
	Σ C f(x) = C Σ f(x)
	C: constant
	Σ f(x) + g(x) = Σ f(x) + Σ f(x)
- Product:
	π f(x) = f(x<sub>1</sub>) . f(x<sub>2</sub>) .... f(x<sub>n</sub>)
	π C = C . C . C ..... C <sup>n</sup>
	π c f(x) = c<sup>n</sup> π f(x)
	<sup> n</sup>π<sub>i = 1</sub>  f(x<sub>i</sub>) g(x<sub>i</sub>) =  <sup> n</sup>π<sub>i = 1</sub>  f(x<sub>i</sub>)  . <sup> n</sup>π<sub>i = 1</sub>  g(x<sub>i</sub>) 
- ln: 
	Ln = Log<sub>e</sub> 
	ln(e) = 1
	ln(1) = 0
	ln(0) = - inf
	ln(ab) = ln(a) + ln(b)
	ln(a/b) = ln(a) - ln(b)
	ln(a)<sup>m</sup> = m ln(a)
	ln(a+b) **not equal** ln(a)+ ln (b)

- Diffrentiation:
	const -> 0 
	x -> 1
	x<sup>n</sup> -> n x<sup>n-1</sup> 
	(f(x)) <sup>n</sup> -> n(f(x))<sup>n-1</sup> . f'(x)
	e<sup>f(x)</sup> -> e<sup>f(x)</sup> . f'(x)
	ln(f(x)) -> (1/f(x)) . f'(x) 

### Method of moments
- In terms of population parameter
- µ$_k$ = m$_k$ (Population moment = sample moment)
- ##### When population is continuous
  - E(X) = $\int_{-\infty}^{\infty}{f(x).x}$
  - E(Sample) --> $\sum{\frac{X_i}{n}}$ --> Always discrete
- ##### When population is discrete
  - E(X) = $\sum_{i=1}^{n}{f(x) * x}$

### Maximum Liklihood Estm (MLE)
Steps:
	1. Write L(θ) = <sup> n</sup>π<sub>i = 1</sub>  f(x<sub>i</sub> ; θ)  (in terms of theta) (and use PI properties)
	2. f(x<sub>i</sub> ; θ) = PDF/PMF
	3. L*(θ) = ln L(θ)
	4. diff w.r.t θ = 0 to get Theta-hat 