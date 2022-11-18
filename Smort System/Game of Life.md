#Smort 
# Cellular Automation
1. Dynamic system consist of  <u> Set of cells </u> (in 1D - 2D - 3D):
    Each cell in state has 2 opions : 
        Die -> 0
        Live -> 1
2. State set :
    Set of all possible state in CA system
3. Transition value :
    Function to change state of cell 
    There're two types: 
        1) Uniform (All cells has same rule)
        2) Non-Uniform (Each cell has Diff/Same rule)
4. Neightborhood 
    X has 2 option (IN and OUT)
    ex: [0 | 0 | X | 0 | 0 ]
    So the right of X is X<sub> in</sub> and left of X is X<sub>out</sub>
    and It's size is <u>3</u> 
5. Boundry Condition
    Has two types: 
    1) Fixed (After the last cell it disappear)
    2) Periodic (Like Snake game :D )

# Examples
## 1) Traffic System 
 Is a 1D array
 has 2 choices :
    0 -> No car
    1 -> Car
Has function :
    X(t<sub>+1</sub>) = X<sub> in </sub> (t) (1-X(t)) + X <sub>out</sub> X(t)
X(t) -> Is cell state in time t
## 2) Game of life
1) 2D CA
2) State 0,1
3) Transition
    i) if cell has 3 live , <u>it live</u> 
    ii) Has 2 live and it live them
    iii) Otherwise
![[Pasted image 20221027200429.jpg]]

## Another Example:
![[Pasted image 20221027200925.jpg]]
If we wanna know size of this image then:
1) If it's Traffic System :
 then size = 4 + itself = **5**
 **We calculate x only because it only move horizontal.**
2) If it's Image processing
    then size = 8 + itself = **9**
    **We calculate . and x because image could go diagonal.** 