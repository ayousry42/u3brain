#Smort 
## What's SVM
- SVM is for linear or non linear binary set.
- It's main goal is to design a hyper plane that classify all training vectors.
- Hyper plane: is the line that separate two classes.
- Margin: Is the distance between two support vectors and should be perpendicular on the hyper plane.
- We calculate the max margin to get the best hyperplane 
- SVM decides that the best separating line is the line that bisects and perpendicular to the connecting line.
![[Pasted image 20230102131131.png]]
## SVM Rules
- hyper plane has an equation of :
	w$\cdot$x + b = 0 
- And the other two line (to separate the classes) is either : 
	w$\cdot$x + b = 1 or w$\cdot$x + b = -1
- To get Margin distance (Width): 
	 $\frac {w}{||w||}$ ($X_{2}$ - $X_{1}$) = $\frac {2}{||w||}$ -> to get the distance perpendicular to hyperplane
	 ||w|| -> is the magnitude = $\sqrt {Sum (w^2) }$
	 $\frac {2}{||w||}$ -> max margin
	 ||w|| -> min margin
-  y = w $\cdot$ x + b that will produce 1 or -1 
	to summarize the equation it'll be like : y (w $\cdot$ x +b) $\ge$ 1
	to get w and b we'll use gaussian elimination