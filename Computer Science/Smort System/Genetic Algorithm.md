#Smort 
## Types of Evolutionary Algorithm Computation
1. Genetic Algorithm: Should be Binary Presentaition
2. Genetic Programming: Should be Tree Presentation
3. Evolution Algorithm: Should be Real Values
4. Evolution Programming: Should be Finite Automation

## Genetic Algorithm (GA)
### What is GA?
1. Evolutionary algorithms that make use of operations like mutatuion.
2. Provide an AI method by an analogy of biological evolution
3. It constructs a population of evolving solutions to solve the problem
### Uses?
1. Difficult search problem
2. Optimization problem
3. ML
4. Adaptive rule-bases
### Steps of GA
 - Represent the parameters in the solution as a "bit" string (Solutions of a problem represent in binary)
 - Strings are sometimes called chromosome
 1.  Start with initial Population:
	 - We start with random parameters
1. Fitness of individual:
    1) Represent population should act/adapt to
    2) Assign single value fittness to each gene
2. Selection
    - Select Parent(According to fitness):
    - Types of selection:
	    1) Ranked sort (Linear - NonLinear)
	    2) Tournment (Select k from n population)
	    3) Rowltte wheel (Like a wheel bruh)
1. Replacement Survivor:
    - Types of Replacement:
	    1) Age based (offspring replace parent)
	    2) Fitness base
1. New population
  - Build new population from old one to evolve the population solutions
  - Genetic operators:
		1. Crossover  (Take a pecie of each parent to make two new offspring )
		2. Mutation (Produces offspring from single parent by random change in bit string)
		3. Production
6. Termination (STOP)
    Types of termination:
	    1) Reach known fitness
	    2) Reach max no. of generation
	    3) No Improvement
### Applications
1) Function set {if,for,while,.....}
2) Terminal set{Numbers, Boolian , + , - , x,......}
## Genetic Programming (GP)
- Solutions can be interpreted as programs
- Write the code by itself 
EX: 
1. ![[WhatsApp Image 2022-10-27 at 7.02.53 PM.jpeg]]
2. ![[WhatsApp Image 2022-10-27 at 7.02.54 PM.jpeg]]

