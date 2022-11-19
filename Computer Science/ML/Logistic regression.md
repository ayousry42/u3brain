#ML 
### Logistic Regression Model
is classification algo
Want 0 <= h<sub>θ</sub> <= 1 
and h<sub>θ</sub> (x) = g(θ<sup>T</sup> X)
where g(Z) = 1/(1+e<sup>-Z</sup>)
This is Logistic function which also known as Sigmoid function
Which will look like:
![[Pasted image 20221119013612.png]]
Suppose predict "y=1" if h<sub>θ</sub> >= 0.5
and "y=0" if h<sub>θ</sub> < 0.5

### Simplified Cost Function
Cost(θ) = -log(h<sub>θ</sub> (x)) if y=1
		 - log(1 - h<sub>θ</sub> (x)) if y=0

### How to choose parameter θ?
Well by cost function
Cost fuction:
![[Pasted image 20221119014852.png]]

Where log_loss fuction = ![[Pasted image 20221119014948.png]]
and p^ means h<sub>θ</sub> (x)
And can be imported in python by:
```py
from sklearn.meticis import log_loss
```
