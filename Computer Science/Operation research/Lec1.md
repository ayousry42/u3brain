1. Defining the problem
2. Formulation a mathematical model
	1) Decision variables : $x_1$ , $x_2$ , ... ,$x_n$ :
		Are the factors or variables associated with the problem whose values are to be determined by solving the problem.
	2) objective function : 
		It represent the criterion of evaluating alternative courses of action in terms of value of decision variables to optimize the performance.
	3) Constrains (the rules) : 
		In terms of place ex: company need specific space , specific budget, or specific time 
3. Solve the problem	
---
Example on mathematical model:
	Optimize Z = f(x)
	x -> the column of decision variables.
	f(x) -> objective function to be optimized.
	- g(x)(<,=,>) $b_i$
	- g(x) -> Constrains
	$b_i$ -> variable from i=1,...n
	decision variable should be greater than or equal 0
If Decision variables is linear then Constrains should be linear it also called linear programming problem (and vise versa)
- Ex:
	(min or max) Z = $2x_1$ + $3x_1 x_2$ - $x_2^2$ 
	subject to $3x^2_1$ - $2x_2^2$ < 5
	x1,x2>0
- Ex2:
	$3x_1$ - $2x_2$ 
	subject to $x_1$ + $x_2$ <3
	$x_1$,$x_2$ >0
	- and that's linear programming problem
---
## Linear programming problem (LP problem)
1) Graphically (graphical method)
2) Simplex method
3) Two phase method
- the general LP problem with n decision variables and m constraints can be started in the following formula
 Z = $C_1 x_1$ +$C_2 x_2$ + $C_3 x_3$  + $C_n x_n$
 subject to : 
	 $a_{11} x_1$+ $a_{12} x_2$ + $a_{1n} x_n$
	 $a_{21} x_1$ + $a_{22} x_2$ +$a_{2n} x_n$
	 $x_1$ , $x_2$ , $x_3$ >= 0 -> non negative constrains
	 where, $b_i$ > = 0 for all i = 1,2,3,...m  
## Sensitivity analysis
## Integer linear programming
## Transportation Problem
## Dynamic programming

---
## Problem
2 types of tables $T_1$ , $T_2$ 
- It takes 2 hours to produce parts of one Table 1
	1 hour to assemble 
	2 hour to polish
	Profits: 90$ 
- It takes 4 hours to produce Table 2
	2.5 hour to assemble
	1.5 to polish
	Profits: 110$
Producing needs 7000 hours per month
assembling needs 4000 hours per month
Polising needs 5500 hours per month

How many of each type of tables should be produce to max the profit every month?
## Ans
- 2 Decision variables: 
	let x be the number of tables of type T_1
	let y be number of tables of type T_2
- Objective function
	max z= 90 x + 110 y
- Constrains
	1. 2x+4y <= 7000
	2. 1x + 2.5y <= 4000
	3. 2x + 1.5y <= 5500