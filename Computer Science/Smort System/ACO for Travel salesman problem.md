By: Ahmed Yousri Ali 
ID: 2103108
# Introduction
## What's ACO
  - The main idea of ant algorithms is the indirect communication of a colony of agents, artificial ants, based on pheromone trails.
  - To apply ACO, the optimization problem is transformed into the problem of finding the best path on a weighted graph. 
  - The artificial ants incrementally build solutions by moving on the graph. 
  - The solution construction process is stochastic and is biased by a pheromone model.
## Advantage of ACO
1. Simple implementation.
2. Derivative Free.
3. Efficient for TSP and similar problems.
4. Guaranteed Convergence.
## Disadvantage of ACO
1. Probability Distribution change by iteration.
2. Time of convergence uncertain.

## ACO Applications
1.  Capacitated vehicle routing problem
2. Vehicle routing problem with pick-up and delivery (VRPPD)
3. Group-shop scheduling problem (GSP)
4. Nursing time distribution scheduling problem
5. Permutation flow shop problem (PFSP)
6. Frequency assignment problem
7. Redundancy allocation problem
8. Traveling salesman problem(TSP) -> (We'll work on that)

## What's Travelling salesman problem
- TSP is abide by a salesman and a set of cities. 
- The salesman has to visit every one of the cities starting from a certain one and to return to the same city but needs to minimize the total length of the trip.
- The salesman’s path forms a hamilton cycle (HC).
# Solving Travelling salesman problem by ACO
- When applying ACO algorithm to the TSP, a pheromone strength  $τ_{ij}$ (t) is associated to each arc (i, j), where $τ_{ij}$ (t) is a numerical information which is modified during the run of the algorithm and t is the iteration counter.


## Steps:
1. Initially each of the m ants is placed on a randomly chosen city and then iteratively applies at each city a state transition rule.
2. At a city i, the ant chooses a still unvisited city j probabilistically, biased by the pheromone trail strength $τ_{ij}$ (t) on the arc between city i and city j and a locally available heuristic information.
3. After all ants have constructed a tour, the pheromones are updated. This is done by first lowering the pheromone trail strengths by a constant factor and then the ants are allowed to deposit pheromone on the arcs they have visited.
5. The trail update is done in such a form that arcs contained in shorter tours and/or visited by many ants receive a higher amount of pheromone and are therefore chosen with a higher probability in the following iterations of the algorithm.
6. After the initialization of the pheromone trails and some parameters a main loop is repeated until a termination condition.
```ad-info
title: pesudo code
```{r, tidy=FALSE, eval=FALSE, highlight=FALSE }
procedure ACO algorithm for TSPs
	Set parameters, initialize phermone trails
	while(termination condition not met)do
		ConstructSolutions
		ApplyLocalSearch
		UpdateTrails
	end
end ACO algorithm for TSPs
```
## Tour construction
In ACS ants choose the next city using the pseudo-random proportional action choice rule: when located at city i, ant k moves, with probability $q_0$, to city l for
which $τ_{il}$(t) is maximal, that is, with probability $q_0$ the best possible move as indicted by the pheromone trails.
```ad-info
title: each ant is put on some randomly chosen city rule

## $p_{ij}^{k} (t) = \frac{\left[\tau_{ij}(t)^{\alpha}\right] \cdot \left[\eta_{ij}\right]^{\beta}}{\sum_{l \in \mathcal{N}^{k}_{i}} \left[\tau_{il}(t)\right]^{\alpha} \cdot \left[\eta_{il}\right]^{\beta}}$
```
Where $\eta_{ij}$ = 1/ $d_{ij}$ is an priori available heuristic value and $\mathcal{N}^k_i$ is the feasible neighborhood of ant k which ant k hasn't yet visited. 

```ad-info
title: Pheromone trail update
### $τ_{ij}$ (t+1) = (1-p) $\cdot$ $τ_{ij}$(t) + p $\cdot$ $\Delta$ $τ_{ij}^{gb}$ (t)
### $$ \Delta \tau^k_{ij}(t) = \begin{cases} \dfrac{1}{L^k (t)} & \text{ if arc } (i,j) \text{ is used by ant } k \\ 0 & \text{otherwise} \end{cases} $$

```
Where 0 < p ≤ 1 is the pheromone trail evaporation. The parameter p is used to avoid unlimited accumulation of the pheromone trails and it enables the algorithm to ”forget” previously done bad decisions.
and Where $L^k(t)$ is the length of the kth ant's tour is , the better the ant’s tour is, the more pheromone is received by arcs belonging to the tour. In general, arcs which are used by many ants and which are contained in shorter tours will receive more pheromone and therefore are also more likely to be chosen in future iteration of the algorithm.