#smort
### Swarm Intelligent
- Is type of spy
- Set agents search for sol. of problem
- It goes like ant :D -> Search for food individually.  then when they found food they tell each other to help

Types of goal: 
	Goal individual: Local search goal (Shortest path) + Global goal (Traffic of goal)

### 1-Swarm 
Is a group of agents can Organize , communicate & Internet with each other
- Each agent has local behavior
- No Center Control
- All agents are homogenous
- Self organization

### 2-Swarm Types
1. Ant colony (ACO)
2. Partial swarm optimization (PSO) 

### 3-How to apply?
1. Initial Solution
2. Search direction
3. Update criterion

### 4-PSO
- Particle = Bird
- Sol =  Food

- Fitness has 2 types:
	P best -> Best sol achieved by **Individual so far**
	G best -> Best sol achieved by **All agents so far**  

- update: $x(t+1) = x(t) + v(t+1)$
	$v$: Velocity
	$x$: Position

- How to calculate velocity?
	$v(t+1) = w \cdot v(t) + C_1 \cdot \text{random()} \cdot (x_{pbest} - x(z)) + C_2 \cdot \text{random()} . (x_{gbest} - X(t))$
	 
	$w$: weight
	$x_{pbest}$: Goal position for individual (Shortest) 
	$x(z)$: Current Position
	$C_{1,2}$: Cost
	$x_{gbest}$: Goal position for all system (Best for traffic)
	$x(t)$: Current position for all system

![[Pasted image 20221110203247.png]]
//art by dawood