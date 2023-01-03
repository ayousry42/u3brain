#Smort 

## Types of (f())
1. Hard limit:
	f(n) = 1 when n>=0
			or -1 when n<0 
		 it's like only two steps
2. Sigmoid:
	f(n) = 1/ 1+e <sup>-n * alpha</sup> 
3.  Linear:
	Ex: f(n)=n<sup>2</sup> = 1/n = n<sup>3</sup>

## Error
Error = t-y
MSE(Mean Square Error) = 1/2 (t-y) <sup>2</sup> 

## Adapt in weight 
Adapt = Learning

w<sub>new</sub> = w <sub>old</sub> + alpha * error * input 

$\Delta$w = alpha * error * input

## first ex in lec ans

if y +ve=1 and -ve = 0
y should = t  (if not making new w)

b= 0.1

input: X<sub>1</sub> = 5  and X<sub>2</sub> = -3 

y = f(E) = f(W<sub>1</sub> X<sub>1</sub> +W<sub>2</sub>  X<sub>2</sub> + b)
= f(0.3) = 1

error = t-y = 0-1 = -1

new iteration

W<sub>new 1</sub> = 0.1 + (1) . (-1) . (5) = -4.9

W<sub>new 2</sub> = 0.1 + (1) . (-1) . (-3) = 3.1 

y<sub>new</sub> = f( (5) (-4.9) + (-3) (3.1) + 0.1) = 0
Error = 0

## Multi Layer NN
Multilayer have 2 types: 
	1. Feed forward
	2. Feed Back : Loop

Feed-Back : Means take the output and insert it in input 

## Back propagation

W<sub>new </sub> = W<sub> old </sub>  + alpha . MSE . derivative(f(input))

we use Back prop when we have more than one perceptron



## VIP note
if f(n) = 1/1+e<sup>-n</sup>  
f'(n) = f(n)* (1-f(n))