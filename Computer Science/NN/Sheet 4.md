# Name: Ahmed Yousri Ali
# ID: 2103108
# Sheet 4 Neural Networks : Regression

---
## Q1) Consider a perceptron model consisting of two input neurons, each with two weights and a bias term, that feed into a single output neuron with one weight and a bias term. Provide a mathematical proof that illustrates the linear collapse and the benefits of using a non-linear activation function:

Let's first define the perceptron model mathematically. Suppose we have input features x1 and x2, with weights w1 and w2 respectively, and bias b1 for the first layer of neurons. Then the output of the first layer can be represented as:

z1 = $w_1x_1 + w_2x_2 + b_1$

We can then apply an activation function f to this output to obtain the output of the first layer, denoted as a1:

$a_1 = f(z_1)$

The output of the entire perceptron model is then obtained by taking a weighted sum of the output of the first layer, with weight w3 and bias b2:

$z_2 = w_3*a_1 + b_2$

And the final output of the perceptron model is given by:

$y = f(z_2)$

Now let's consider the case where we use a linear activation function f(z) = z for both layers. Then the output of the first layer becomes:

$a_1 = z_1 = w_1x_1 + w_2x_2 + b_1$

And the output of the second layer becomes:

$z_2 = w_3a_1 + b_2 = w_3(w_1x_1 + w_2x_2 + b_1) + b_2$

We can simplify this expression further by expanding it:

$z_2 = w_1w_3x_1 + w_2w_3x_2 + w_3b_1 + b_2$

This expression is clearly a linear function of the input features x1 and x2. In other words, the entire perceptron model collapses into a simple linear function, regardless of the number of layers in the model.

Now let's consider the benefits of using a non-linear activation function. Suppose we use the sigmoid activation function $f(z) = \frac {1}  {(1 + e^{-z})}$ for both layers. Then the output of the first layer becomes:
$a_1 = f(z_1) = \frac {1}  {(1 + e^{-z_1})}$ 

And the output of the second layer becomes:

$z_2 = w_3a_1 + b_2$

We can then write the final output of the perceptron model as:
$y = f(z_2) = \frac {1}  {(1 + e^{-z_2})}$ 

This function is non-linear and cannot be collapsed into a simple linear function of the input features x1 and x2. This non-linear property of the sigmoid activation function allows the perceptron model to learn more complex patterns in the data, beyond simple linear relationships.

The use of a linear activation function in a perceptron model leads to a collapse of the model into a simple linear function, while the use of a non-linear activation function such as the sigmoid function allows the model to learn more complex patterns in the data.

---

## Q2) Suppose you are studying the relationship between a student’s high school GPA and their first-year college GPA. You collect data from four students and obtain the following information: 
|Student| High School GPA | First-Year College GPA|
| --- |---|---|
| 1      | 2.5       | 2.8  |
| 2   | 3.0        | 3.5  |
| 3      | 3.2       | 3.3   |
| 4      | 3.8       | 3.9   |

You want to use linear regression to predict a student’s first-year college GPA based on their high school GPA. You can assume that the relationship between high school GPA and first-year college GPA is approximately linear.:
1) Compute the sample mean and sample standard deviation of the high school GPAs and first-year college GPAs.:
| | $\mu$ | $\sigma$|
| --- |---|---|
| High School GPA|3.125|0.465698|
| First Year college GPA| 3.375 | 3.5  |

2) Compute the slope and intercept of the least-squares regression line of first-year college GPA on high school GPA:   
>   interception = $\beta _0$ = $\bar{y}$ - $\beta _1$ $\bar{x}$ 
>   slope = $\beta _1$ = $\frac{\sum{xy} - \frac{1}{n} \sum{x}\sum{y} }{\sum{x^2} - \frac{1}{n} (\sum{x})^2}$ 
>   $\sum{x^2}$ = 39.93  
>   $\sum{x}$ = 12.5 
>   $(\sum{x})^2$  = 156.25 
>    $\sum{y}$  = 13.5
>    $\sum{xy}$ = 42.88
>    n = 4
>    $\beta _1$ = $\frac{42.88 - 42.1875}{39.93 - 39.0625}$ $\approx$  0.79827
>    $\beta _0$ = $\frac{13.5}{4}$ - 0.79827 $\cdot$ $\frac{12.5}{4}$  $\approx$ 0.8804
>    
3) Use the regression equation to predict the first-year college GPA of a student who had a high school GPA of 3.5:
> $\hat{y}$ = $\beta _1$ $\cdot$ x + $\beta _0$  = (0.79827 $\cdot$ 3.5) + 0.8804 = 3.674345

---
## Q3) A researcher wants to investigate the relationship between the price of a house (in thou-sands of dollars) and its size (in thousands of square feet). She collects data from 4 houses and obtains the following information :
|Houses| Price | Size|
| --- |---|---|
| 1      | 120       | 2.0  |
| 2   | 140        | 2.5  |
| 3      | 130       | 2.2   |
| 4      | 150       | 2.7   |
1)  Compute the sample mean and sample standard deviation of the house prices and sizes.: 
> House prices $\mu$ = 135 , $\sigma$ $\approx$  0.26925

| | $\mu$ | $\sigma$ |
| --- |---|---|
| House Price|135| 11.18  |
| House Size| 2.35| 0.26925 |
2) Compute the slope and intercept of the least-squares regression line of house price on size.: 
>  X: Size
>  Y: Price
>  interception = $\beta _0$ = $\bar{y}$ - $\beta _1$ $\bar{x}$ 
>   slope = $\beta _1$ = $\frac{\sum{xy} - \frac{1}{n} \sum{x}\sum{y} }{\sum{x^2} - \frac{1}{n} (\sum{x})^2}$ 
>   $\sum{x^2}$ = 22.38
>   $\sum{x}$ = 9.4
>   $(\sum{x})^2$  = 88.36 
>    $\sum{y}$  = 540
>    $\sum{xy}$ = 1281
>    n = 4
>    $\beta _1$ = $\frac{1281 - 1269}{22.38 - 22.09}$ $\approx$ 41.379
>    $\beta _0$ = $\frac{540}{4}$ - 41.379 $\cdot$ $\frac{9.4}{4}$  = 37.75935

3) Use the regression equation to predict the price of a house that has a size of 3.0 thousand square feet.:
> $\hat{y}$ =  $\beta _1$ $\cdot$ x + $\beta _0$ = (41.379 $\cdot$ 3) + 37.75935 = 161.89635

---
## Q4) Suppose you are analyzing a dataset of patients who have undergone a medical procedure ,and you want to predict whether each patient experienced a positive outcome (1) or a negative outcome (0) based on their age (in years) and a binary indicator variable for whether they smoke (1 = smoker, 0 = non-smoker). You have data for five patients, as shown in the table below:
|Patient|Age| Smoking|Outcome|
| --- |---|---|---|
|1|45|0|1|
|2|52|1|0|
|3|27|1|1|
|4|31|0|0|
|5|48|1|1|

- Compute the logistic regression coefficients for the model y = $b_0 + b_1x_1 + b_2x_2.$
$w_0 = 0.5  , w_1 = 0.5 ,  w_2 = 0.5$ 
$Z_1$ = $w_0$ + $w_1$ $x_1$ + $w_2$ $x_2$
$Z_1$ = 0.5 + (0.5) $\cdot$ 45 + (0.5) $\cdot$ 0 = 23 
$\hat{y}$ = step(23) =1 
error = y - $\hat{y}$ = 0
$Z_2$ = $w_0$ + $w_1$ $x_1$ + $w_2$ $x_2$
$Z_2$ = 0.5 + (0.5) $\cdot$ 52 + (0.5) $\cdot$ 1 = 27 
$\hat{y}$ = step(27) =1 
error = y - $\hat{y}$ = -1
$w_{new}$ = $w_{old}$ + (error $\cdot$ $x_i$)
$w_1$ = 0.5 + (-1 $\cdot$ 52) = -51.5
$w_2$ = 0.5 + (-1 $\cdot$ 1) = -0.5
$w_0$ = 0.5 + -1 = -0.5
$Z_3$ = $w_0$ + $w_1$ $x_1$ + $w_2$ $x_2$
$Z_3$ = -0.5 + (-51.5) $\cdot$ 27 + (-0.5) $\cdot$ 1 =-1391.5
$\hat{y}$ = step(-1391.5) =0
error = y - $\hat{y}$ = 1
$w_{new}$ = $w_{old}$ + (error $\cdot$ $x_i$)
$w_1$ = -51.5 + (1 $\cdot$ 27) = -24.5
$w_2$ = -0.5 + (1 $\cdot$ 1) = 0.5
$w_0$ = -0.5 + 1 = 0.5

$Z_4$ = $w_0$ + $w_1$ $x_1$ + $w_2$ $x_2$
$Z_4$ = 0.5 + (-24.5) $\cdot$ 31 + (0.5) $\cdot$ 0 =-759
$\hat{y}$ = step(-759) =0
error = 0

$Z_5$ = $w_0$ + $w_1$ $x_1$ + $w_2$ $x_2$
$Z_5$ = 0.5 + (-24.5) $\cdot$ 48 + (0.5) $\cdot$ 1 =-1175
$\hat{y}$ = step(-1175) =0
error = 1

$w_{new}$ = $w_{old}$ + (error $\cdot$ $x_i$)
$w_1$ = -24.5 + (1 $\cdot$ 48) = 23.5
$w_2$ = 0.5 + (1 $\cdot$ 1) = 1.5
$w_0$ = 0.5 + 1 = 1.5

- Use the logistic regression equation to predict the probability that a 35-year-old non-smoker will have a positive outcome.
y = $1.5 + 23.5 \cdot x_1 + 1.5 \cdot x_2$
y= $1.5 + 23.5 \cdot 35 + 1.5 \cdot 0$ = 824
y = step(824) = 1

---
## Q5) Suppose you have a logistic regression model with two coefficients, B0 and B1, and you are using mean squared error (MSE) as the loss function.
1) Write down the expression for the overall loss in terms of B0 and B1:
$\hat{y}$ =  $\beta _1$ $\cdot$ x + $\beta _0$

$$ MSE =  \frac{1}{n} \sum (y - ( \beta _1 \cdot x + \beta _0
))^2 $$
2) Derive the partial derivatives of the loss with respect to each coefficient:
> $\frac{\partial MSE}{\partial \beta_0}$ = $\frac{1}{n} \sum (-2 \cdot (y - ( \beta _1 \cdot x + \beta _0)))$ 
>  $\frac{\partial MSE}{\partial \beta_1}$ = $\frac{1}{n} \sum (-2 \cdot (y - ( \beta _1 \cdot x + \beta _0)) \cdot x)$ 

3) Explain the meaning of these partial derivatives in the context of training the logistic regression model and how they can be used to update the values of the coefficients during training:
Partial derivatives is used to get the rate of change of loss function with respect of weight and the update the rule as follow:
$$ b_{1new} = b_{1old} - \alpha \cdot \frac{d}{d b_1} Error$$
$$ b_{0new} = b_{0old} - \alpha \cdot \frac{d}{d b_0} Error$$
---
## Q6) Consider the same logistic regression model in question 4 but assume that the model is trained using cross entropy loss as the loss function.
$$L(\theta) = y_i log(\hat{y_i}) + (1-y_i)log(1-\hat{y}) $$
1) Write down the expression for the overall loss in terms of B0 and B1: 
 $$ L(\theta) =\sum y log(\beta_1\cdot x + \beta_0) + (1-y)log(1-\beta_1\cdot x + \beta_0) $$
 2) Derive the partial derivatives of the loss with respect to each coefficient:
$$\frac{dL(\theta)}{d \beta_1} = \sum y \frac{x}{ln(10)\cdot \beta_1\cdot x + \beta_0} + (1-y) \frac{-x}{ln(10)\cdot(1-\beta_1\cdot x + \beta_0)}$$

$$\frac{dL(\theta)}{d \beta_0} = \sum y \frac{1}{ln(10)\cdot \beta_1\cdot x + \beta_0} + (1-y) \frac{1}{ln(10)\cdot(1-\beta_1\cdot x + \beta_0)}$$
