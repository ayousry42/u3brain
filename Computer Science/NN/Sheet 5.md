# Name: Ahmed Yousri Ali
# ID: 2103108
# Sheet 5 Neural Networks: Chain Rule

---
## Q1) In a neural network, the goal is to compute the cost on the forward pass and the derivative(gradient) on the backward pass. If the cost function is J= cos(sin(x2) + 3x2), and the forward pass is as follows: J= cos(u),u=u1+u2,u1= sin(t),u2= 3t,t=x2.Calculate the partial derivatives of J with respect to x using the chain rule for backward propagation:

### $\frac{\partial J}{\partial x}$ = $\frac{\partial J}{\partial u}$ $\cdot$  $\frac{\partial u}{\partial t}$ $\cdot$ $\frac{\partial t}{\partial x}$
### $\frac{\partial J}{\partial u}$ = -sin(u)
### $\frac{\partial u}{\partial t}$ = cos(t) + 3
### $\frac{\partial t}{\partial x}$ = 2x
### $\frac{\partial J}{\partial x}$ = -sin(u) $\cdot$ (cos(t)+3) $\cdot$ 2x

---
## Q2) Consider the cost function J= $x^2+y^2+z^2$, where x,y, and z are variables. Suppose that x=u+v, y=u−v, and z=$u^2+v^2$, where u and v are also variables. Perform a forward propagation and then calculate the partial derivatives of J with respect to u and v using the chain rule for backward propagation:

Forward: 
J = $(u+v)^2$ + $(u-v)^2$ + $(u^2+v^2)^2$ 
J = $(u^2 + 2uv + v^2) + (u^2-2uv+v^2) + (u^4+2u^2v^2+v^4)$
J = $2u^2 + 2v^2+u^4+2u^2v^2+v^4$ 
Backward: 
### $\frac{\partial J}{\partial u}$ = $\frac{\partial J}{\partial x}$ $\cdot$  $\frac{\partial x}{\partial u}$ +$\frac{\partial J }{\partial y}$ $\frac{\partial y}{\partial u}$ + $\frac{\partial J }{\partial z}$ $\frac{\partial z}{\partial u}$
$\frac{\partial J}{\partial x}$ $\cdot$  $\frac{\partial x}{\partial u}$ = 2x $\cdot$ 1
$\frac{\partial J}{\partial y}$ $\cdot$  $\frac{\partial y}{\partial u}$ = 2y $\cdot$ 1
$\frac{\partial J}{\partial z}$ $\cdot$  $\frac{\partial z}{\partial u}$ = 2z $\cdot$ 2u
### $\frac{\partial J}{\partial u}$ = 2x + 2y + 2z $\cdot$ 2u
### $\frac{\partial J}{\partial v}$ = $\frac{\partial J}{\partial x}$ $\cdot$  $\frac{\partial x}{\partial v}$ +$\frac{\partial J }{\partial y}$ $\frac{\partial y}{\partial v}$ + $\frac{\partial J }{\partial z}$ $\frac{\partial z}{\partial v}$
$\frac{\partial J}{\partial x}$ $\cdot$  $\frac{\partial x}{\partial v}$ = 2x $\cdot$ 1
$\frac{\partial J}{\partial y}$ $\cdot$  $\frac{\partial y}{\partial v}$ = 2y $\cdot$ -1
$\frac{\partial J}{\partial z}$ $\cdot$  $\frac{\partial z}{\partial v}$ = 2z $\cdot$ 2v
### $\frac{\partial J}{\partial v}$ = 2x - 2y + 2z $\cdot$ 2v

---

## Q3) Consider the function f(x,y) =$x^3+ 3xy^2−y^3$. Let u= $x^2−y^2$ and v= 2xy. Express f(x,y) in terms of u and v, and then calculate the partial derivatives off with respect to u and v using the chain rule:

f(x,y) =$x^3+ 3xy^2−y^3$
u = $x^2+y^2$
x = $\sqrt{u+y^2}$ 
y = $\sqrt{x^2-u}$
### $\frac{\partial x}{\partial u}$ = $\frac{1}{2\sqrt{u+y^2}}$ 
### $\frac{\partial y}{\partial u}$ = $\frac{-1}{2\sqrt{x^2-u}}$ 
v = 2xy
x = $\frac{v}{2y}$
y = $\frac{v}{3x}$
### $\frac{\partial x}{\partial v}$ =  $\frac{1}{2y}$
### $\frac{\partial y}{\partial v}$ =  $\frac{1}{2x}$
f(x,y) =$x^3+ 3xy^2−y^3$
### $\frac{\partial f}{\partial x}$ =  $3x^2+3y^2$
### $\frac{\partial f}{\partial y}$ =  $6xy-3y^2$
### $\frac{\partial f}{\partial u}$ =  $\frac{\partial f}{\partial x}$ $\frac{\partial x}{\partial u}$ + $\frac{\partial f}{\partial y}$ $\frac{\partial y}{\partial u}$
### $\frac{\partial f}{\partial u}$ = $\frac{3x^2+3y^2}{2\sqrt{u+y^2}}$ - $\frac{6xy-3y^2}{2\sqrt{x^2-u}}$
### $\frac{\partial f}{\partial v}$ =  $\frac{\partial f}{\partial x}$ $\frac{\partial x}{\partial v}$ + $\frac{\partial f}{\partial y}$ $\frac{\partial y}{\partial v}$
### $\frac{\partial f}{\partial u}$ = $\frac{3x^2+3y^2}{2y}$ + $\frac{6xy-3y^2}{2x}$

---
## Q4) Get backpropagation for the logistic regression, so our forward pass will be as follows:
$$J = \hat{y}log(y+(1-\hat{y})-log(1-y)) $$

$$y = \frac{1}{1+e^{-\alpha}} $$
$$\alpha = \sum_{j=0}^n \theta_j x_j$$
Express the derivative of J with respect to the model parameters $\theta_j$  using the chain rule:
### $\frac{\partial J}{ \partial \theta}$ = $\frac{\partial J}{ \partial y}$ $\frac{\partial y}{ \partial \alpha}$ $\frac{\partial \alpha}{ \partial \theta}$ 
### $\frac{\partial J}{ \partial y}$ = $\frac{\hat{y}}{y+(1-\hat{y})}$ + $\frac{1}{1-y}$
### $\frac{\partial y}{ \partial \alpha}$ = $\frac{1}{1+e^{-\alpha}}$  $\cdot$ (1-$\frac{1}{1+e^{-\alpha}}$)
### $\frac{\partial \alpha}{\partial \theta}$ = $\sum_{j=0}^n x_j$ 
### $\frac{\partial J}{ \partial \theta}$ = $\frac{\hat{y}}{y+(1-\hat{y})}$ + $\frac{1}{1-y}$ $\cdot$ $\frac{1}{1+e^{-\alpha}}$  $\cdot$ (1-$\frac{1}{1+e^{-\alpha}}$) $\cdot$ $\sum_{j=0}^n x_j$  

