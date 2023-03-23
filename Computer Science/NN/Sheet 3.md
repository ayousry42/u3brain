# Name: Ahmed Yousri Ali
# ID: 2103108
# Sheet 3 Neural Networks : Perceptron
---
## Questions
### 1. What is a perceptron?
Perceptron is considered a single-layer neural link with four main parameters. The perceptron model begins with multiplying all input values and their weights, then adds these values to create the weighted sum. Further, this weighted sum is applied to the activation function ‘f’ to obtain the desired output.

---
### 2. List the activation function used in perceptron and the diffrences between them?
1. Binary step:
	Binary step function depends on a threshold value that decides whether a neuron should be activated or not. The input fed to the activation function is compared to a certain threshold; if the input is greater than it, then the neuron is activated, else it is deactivated, meaning that its output is not passed on to the next hidden layer.$$ f(x) = \begin{cases} 0 & \text{ for x<0 } \\ 1 & \text{for x>=0} \end{cases} $$
2.  Linear Activation Function:
The linear activation function is where the activation is proportional to the input. The function doesn't do anything to the weighted sum of the input, it simply spits out the value it was given.	$$ f(x) =  x  $$
3. Sigmoid / Logistic Activation Function:
This function takes any real value as input and outputs values in the range of 0 to 1. $$ f(x) =  \frac{1}{1+e^{-x}}  $$
4. Tanh function:
Tanh function is very similar to the sigmoid/logistic activation function, and even has the same S-shape with the difference in output range of -1 to 1. In Tanh, the larger the input , the closer the output value will be to 1.0, whereas the smaller the input , the closer the output will be to -1.0$$ f(x) =  \frac{e^{x}- e^{-x}}{e^{x}+e^{-x}}$$
5. ReLU Function:

$$ f(x) =  max(0,x)  $$

6. Leaky ReLU:
Leaky ReLU is an improved version of ReLU function to solve the Dying ReLU problem as it has a small positive slope in the negative area.$$ f(x) =  max(0.1x,x)  $$
7. Exponential Linear Units (ELUs) Function:
Exponential Linear Unit, or ELU for short, is also a variant of ReLU that modifies the slope of the negative part of the function.$$ f(x) = \begin{cases} x & \text{ for x>=0 } \\ α(e^x-1) & \text{for x<0} \end{cases} $$
8. Softmax Function:
The Softmax function is described as a combination of multiple sigmoids. It calculates the relative probabilities. and returns the probability of each class. It is most commonly used as an activation function for the last layer of the neural network in the case of multi-class classification.$$ f(x) =  \frac{exp(z_i)}{\sum_j exp(z_j)}$$
9. Swish:
It is a self-gated activation function developed by researchers at Google. Swish consistently matches or outperforms ReLU activation function on deep networks applied to various challenging domains such as image classification, machine translation etc.$$ f(x) =  \frac{x}{1+e^{-x}}$$
OR $$ f(x) =  x \cdot sigmoid(x)$$
10. Gaussian Error Linear Unit (GELU): 
The Gaussian Error Linear Unit (GELU) activation function is compatible with BERT, ROBERTa, ALBERT, and other top NLP models. This activation function is motivated by combining properties from dropout, zoneout, and ReLUs.  GELU nonlinearity is better than ReLU and ELU activations and finds performance improvements across all tasks in domains of computer vision, natural language processing, and speech recognition.$$ f(x) = xP(X =< x) = x Φ (x)$$
OR $$ f(x) =  0.5x (1+tanh[\sqrt{\frac{2}{\pi}}(x + 0.044715x^3)])$$

11. Scaled Exponential Linear Unit (SELU):
SELU was defined in self-normalizing networks and takes care of internal normalization which means each layer preserves the mean and variance from the previous layers. SELU enables this normalization by adjusting the mean and variance.$$ f(x) = \lambda\begin{cases} \alpha(e^x-1) & \text{ for x<0 } \\ x & \text{for x>=0} \end{cases} $$


---
### 3. How is the output of a perceptron computed
The perceptron model begins with multiplying all input values and their weights, then adds these values to create the weighted sum. Further, this weighted sum is applied to the activation function ‘f’ to obtain the desired output.

---
### 4. What is the role of a loss function in the training of a perceptron?

A loss function is a function that compares the target and predicted output values; measures how well the neural network models the training data. When training, we aim to minimize this loss between the predicted and target outputs

---
### 5. Define mean squared error (MSE) loss function.
The Mean Squared Error measures how close a regression line is to a set of data points. It is a risk function corresponding to the expected value of the squared error loss. Mean square error is calculated by taking the average, specifically the mean, of errors squared from data as it relates to a function. $$ MSE = \frac{1}{n} \sum(acctual - predicted)^2 $$

---
### 6. How can you adjust the weights of a perceptron during training ?

We can update and adjust the weight using the following equation: $$ w_{new} = w_{old} + \alpha \cdot (y-y^`) \cdot x_i$$

---
### 7. Why do we apply sign() function on the pereceptron output

the neural networks are using monotonic functions which are mapping the output of neural network between 0 and 1. This is the right approach since these activation functions give probability-like outputs.
If we would use sin function as the activation, the number of adjustments that the network should make would be less. So, the training times of the networks would decrease significantly. This could reduce the cost of training of neural network models

---
### 8. What is the use of Bias ?
bias can be defined as the constant which is added to the product of features and weights. It is used to offset the result. It helps the models to shift the activation function towards the positive or negative side

---
### 9. How to update Bias ?
The same way that weight is updated $$b_{new} =b_{old} + \alpha(error) $$

---
### 10. Design one layer perceptron to represent the following logic functions:
1. AND: $x_1+x_2–1$
![[Pasted image 20230309043502.png|400]]
2. OR: $2x_1+2x_2–1$
![[Pasted image 20230309043526.png|400]]
3.  NOT: $-x_1+1$
![[Pasted image 20230309044113.png|400]]


---
### 11. Given the table below, Consider a perceptron with weights w1=−0.5,w2= 0.1, and w3= 0.4, bias b= 0.2, and learning rate α= 0.01. Train for 2 iteration with weights updated after each sample and then calculate the accuracy

| Sample      | $X_1$ | $X_2$     | $X_3$ |  Label | $w_1$| $w_2$|$w_3$|b|α|
| --- |---|---|---|---|----|---|---|---|---|
| 1      | 0.2       | 0.5   | 0.7| 1| -0.5|0.1|0.4|0.2|0.01|
| 2   | 0.1        | 0.3      | 0.6| -1|-0.5|0.1|0.4|0.2|0.01|
| 3      | 0.4       | 0.8   |0.2| 1|-0.5|0.1|0.4|0.2|0.01|
| 4      | 0.6       | 0.4   |0.9|-1|-0.5|0.1|0.4|0.2|0.01|

$1^{st}$ Iteration: 
$Z_1$ : $X_1$ $\cdot$ $w_1$ + $X_2$ $\cdot$ $w_2$ + $X_3$ $\cdot$ $w_3$ + b = (0.2 $\cdot$ -0.5) + (0.5 $\cdot$ 0.1) + (0.7 $\cdot$ 0.4) + 0.2=0.43
Sign function: if (Net $\ge$ 0) then Z=1 else Z = -1 
$\hat{y}$ : sign(Net) : sign(0.43) = 1
Error 1 : y - $\hat{y}$ = 1-1 = 0
$W_1^`$ = $W_{1}$ +  α(error $\cdot$ $X_1$) = -0.5
$W_2^`$= $W_2$ +  α(error $\cdot$ $X_2$) = 0.1
$W_3^`$ = $W_3$ +  α(error $\cdot$ $X_3$) = 0.4
$b_{new}$  = $b_{old}$ + α(error) = 0.2 + 0 = 0.2

$Z_2$ : $X_1$ $\cdot$ $W_1^`$ + $X_2$ $\cdot$ $W_2^`$ + $X_3$ $\cdot$ $W_3^`$ + b = (0.1 $\cdot$ -0.5) + (0.3 $\cdot$ 0.1) + (0.6 $\cdot$ 0.4) + 0.2 = 0.42
$\hat{y}$ : sign(Net) : sign(0.42) = 1
Error 2 : y - $\hat{y}$ = -1-1 = -2
$W_1^{``}$ = $W_{1}^`$ +  α(error $\cdot$ $X_1$) = -0.5 + 0.01(-2 $\cdot$ 0.1) = -0.502
$W_2^{``}$= $W_2^{`}$ +  α(error $\cdot$ $X_2$) = 0.1 + 0.01(-2 $\cdot$ 0.3) = 0.094
$W_3^{``}$ = $W_3^{`}$ +  α(error $\cdot$ $X_3$) = 0.4+ 0.01(-2 $\cdot$ 0.6) = 0.388
$b_{new}$  = $b_{old}$ + α(error) = 0.2 + 0.01(-2)= 0.18

$Z_3$ :  $X_1$ $\cdot$ $W_1^{``}$ + $X_2$ $\cdot$ $W_2^{``}$ + $X_3$ $\cdot$ $W_3^{``}$ + b = (0.4 $\cdot$ -0.502) + (0.8 $\cdot$ 0.094) + (0.2 $\cdot$ 0.388) + 0.18 = 0.132
$\hat{y}$ : sign(Net) : sign(0.132) = 1
Error 3 : y - $\hat{y}$ = 1-1 = 0
$W_1^{```}$ = $W_{1}^{``}$ +  α(error $\cdot$ $X_1$) = -0.502 + 0.01(0 $\cdot$ 0.4) = -0.502
$W_2^{```}$= $W_2^{``}$ +  α(error $\cdot$ $X_2$) = 0.094 + 0.01(0 $\cdot$ 0.8) = 0.094
$W_3^{```}$ = $W_3^{``}$ +  α(error $\cdot$ $X_3$) = 0.388+ 0.01(0 $\cdot$ 0.2) = 0.388
$b_{new}$  = $b_{old}$ + α(error) = 0.18

$Z_4$: $X_1$ $\cdot$ $W_1^{```}$  + $X_2$ $\cdot$ $W_2^{```}$+ $X_3$ $\cdot$ $W_3^{```}$ + b= (0.6 $\cdot$ -0.502) + (0.4 $\cdot$ 0.094) + (0.9 $\cdot$ 0.388) + 0.18  = 0.2656
$Z_4$ : sign(Net) : sign(0.2656) = 1
Error 4 : y - $\hat{y}$ = -1-1 = -2

$W_1^{````}$ = $W_{1}^{```}$ +  α(error $\cdot$ $X_1$) = -0.502 + 0.01(-2 $\cdot$ 0.6) = -0.514
$W_2^{````}$= $W_{2}^{```}$ +  α(error $\cdot$ $X_2$) = 0.094 + 0.01(-2 $\cdot$ 0.4) = 0.086
$W_3^{````}$ = $W_{3}^{```}$ +  α(error $\cdot$ $X_3$) = 0.388+ 0.01(-2 $\cdot$ 0.9) = 0.37
$b_{new}$  = $b_{old}$ + α(error) = 0.18 + 0.01(-2) =0.16


$2^{nd}$ Iteration:

|Sample|$X_1$|$X_2$|$X_3$|Label|$w_1$|$w_2$|$w_3$|b|α|
| --- |---|---|---|---|----|---|---|---|---|
|1|0.2|0.5|0.7| 1| -0.514|0.086|0.37|0.16|0.01|
|2|0.1|0.3|0.6|-1| -0.514|0.086|0.37|0.16|0.01|
|3|0.4|0.8|0.2| 1| -0.514|0.086|0.37|0.16|0.01|
|4|0.6|0.4|0.9|-1| -0.514|0.086|0.37|0.16|0.01|


$Z_1$ : $X_1$ $\cdot$ $w_1$ + $X_2$ $\cdot$ $w_2$ + $X_3$ $\cdot$ $w_3$ + b = (0.2 $\cdot$ -0.514) + (0.5 $\cdot$ 0.086) + (0.7 $\cdot$ 0.37) + 0.16=0.3592
Sign function: if (Net $\ge$ 0) then Z=1 else Z = 0 
$\hat{y}$ : sign(Net) : sign(0.3592) = 1
Error 1 : y - $\hat{y}$ = 1-1 = 0
$W_1^`$ = -0.514
$W_2^`$=0.086
$W_3^`$ = 0.37
$b_{new}$  = $b_{old}$ + α(error) = 0.16

$Z_2$ : $X_1$ $\cdot$ $W_1^`$ + $X_2$ $\cdot$ $W_2^`$ + $X_3$ $\cdot$ $W_3^`$ + b = (0.1 $\cdot$ -0.514) + (0.3 $\cdot$ 0.086) + (0.6 $\cdot$ 0.37) + 0.16 = 0.3564
$\hat{y}$ : sign(Net) : sign(0.3564) = 1
Error 2 : y - $\hat{y}$ = -1-1 = -2
$W_1^{``}$ = $W_{1}^`$ +  α(error $\cdot$ $X_1$) = -0.514 + 0.01(-2 $\cdot$ 0.1) = -0.516
$W_2^{``}$= $W_2^{`}$ +  α(error $\cdot$ $X_2$) = 0.086 + 0.01(-2 $\cdot$ 0.3) = 0.08
$W_3^{``}$ = $W_3^{`}$ +  α(error $\cdot$ $X_3$) = 0.37+ 0.01(-2 $\cdot$ 0.6) = 0.358
$b_{new}$  = $b_{old}$ + α(error) = 0.16 + 0.01(-2)= 0.14

$Z_3$ :  $X_1$ $\cdot$ $W_1^{``}$ + $X_2$ $\cdot$ $W_2^{``}$ + $X_3$ $\cdot$ $W_3^{``}$ + b = (0.4 $\cdot$ -0.516) + (0.8 $\cdot$ 0.08) + (0.2 $\cdot$ 0.358) + 0.14 = 0.0692
$\hat{y}$ : sign(Net) : sign(0.0692) = 1
Error 3 : y - $\hat{y}$ = 1-1 = 0
$W_1^{```}$ = -0.516
$W_2^{```}$= 0.08
$W_3^{```}$ =  0.358
$b_{new}$  = 0.14


$Z_4$: $X_1$ $\cdot$ $W_1^{```}$  + $X_2$ $\cdot$ $W_2^{```}$+ $X_3$ $\cdot$ $W_3^{```}$ + b= (0.6 $\cdot$ -0.516) + (0.4 $\cdot$ 0.08) + (0.9 $\cdot$ 0.358) + 0.14 = 0.1846
$Z_4$ : sign(Net) : sign(0.1846) = 1
Error 4 : y - $\hat{y}$ = -1-1 = -2

$W_1^{````}$ = $W_{1}^{```}$ +  α(error $\cdot$ $X_1$) = -0.516 + 0.01(-2 $\cdot$ 0.6) = -0.528
$W_2^{````}$= $W_{2}^{```}$ +  α(error $\cdot$ $X_2$) = 0.08 + 0.01(-2 $\cdot$ 0.4) = 0.072
$W_3^{````}$ = $W_{3}^{```}$ +  α(error $\cdot$ $X_3$) = 0.358+ 0.01(-2 $\cdot$ 0.9) = 0.34
$b_{new}$  = $b_{old}$ + α(error) = 0.14 + 0.01(-2) =0.12

$$Accuracy = \frac{TP + TN}{TP+TN+FP+FN} $$
$$Accuracy = \frac{2 + 0}{4} = 0.5 $$


---
### Refrences
- https://www.simplilearn.com/tutorials/deep-learning-tutorial/perceptron
- https://www.v7labs.com/blog/neural-networks-activation-functions
- https://towardsdatascience.com/loss-functions-and-their-use-in-neural-networks-a470e703f1e9
- https://towardsdatascience.com/creating-alternative-truths-with-sine-activation-function-in-neural-networks-d45aac83ee52
- https://medium.com/@stanleydukor/neural-representation-of-and-or-not-xor-and-xnor-logic-gates-perceptron-algorithm-b0275375fea1