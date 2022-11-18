#smort
### Swarm Intellignet
- Is type of spy
- Set agents search for sol. of problem
- It goes like ant :D -> Search for food indvid.  then when they found food they tell each other to help

Types of goal: 
	Goal individual: Local search goal (Shortest path) + Global goal (Traffic of goal)

### 1-Swarm 
Is a group of agents can Organize , Comminucate & Internet with each other
- Each agent has local behavior
- No Center Control
- All agents are homogenous
- Self organization

### 2-Swarm Types
1. Ant colony (ACO)
2. Partial swarm orgnization (PSO) 

### 3-How to apply?
1. Intial Solution
2. Search direction
3. Update criterien

### 4-PSO
- Particle = Bird
- Sol =  Food

- Faitnes has 2 types:
	P best -> Best sol has achive by **Individual so far**
	G best -> Best sol has achive by **All agents so far**  

- update: X(t+1) = X(t) +V(t+1)
	V: Velocity
	X: Position

- How to calculate velocity?
	V(t+1) = w . v(t) + C<sub>1</sub> . random() . (X<sub>pbest</sub> - X(Z)) + C<sub>2</sub> . random() . (X<sub>gbest</sub> - X(t))
	 
	w: weight
	X<sub>pbest</sub>: Goal position for individual (Shortest) 
	X(Z): Current Position
	C<sub>1,2</sub>: Cost
	X<sub>gbest</sub>: Goal position for all system (Best for traffic)
	X(t): Current position for all system

![[Pasted image 20221110203247.png]]
//art by dawood