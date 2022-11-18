#ComputerVision 
### Filter
Filter : Is a function to compute pixel value depends on it's neightbors
1. Image Capture (,familiar, ... )
Camera is best choice for Image but it has noise cause:
    1) Camera is Electronic
    2) Light validation
    3) Lenses
    4) Surface reflection
    5) 3D obj to 2D Image (No refraction in pixels) x̄ = x/z =20.4 ->20

### Color Image types:
1. Binary Image
	0: Black (Min Pixel)
	1: White (Max pixel)
	Has middle point (Given or make equation like average)
2. Gray Scale Image
	Has one color maybe Black/Green/Red 
	has Pixels from 0 up to 250

### How to fix noise reduction?
By <u>filters</u> of noises
Common types of noises:
	1. Salt and pepper: random occurrences of black and white pixels
	2. Impulse: random occurrences of white pixels
	3. Gaussian: Variations in intensity drawn from Gaussian normal distribution

### Types of noise
1. Gaussian: 
	I*(i,j) = I(i,j) + N(i,j)
	Where I is image and N is noise
	Equation of Gause: 
	![[Pasted image 20221031130605.png]]

2. Salt and pepper:
	N(i,j) = 
	 ![[Pasted image 20221031130735.png]]

### Types of filters 
1) Average Filter:
	Delete First row and last row or just give it 0
	Delete first col and last col or just give it 0
	Moving avg: ex)
	I x 1/9 (mask 3x3) (Take 3x3 from image then move)
	Makes Photo looks Blury
2) Gaussian Filter:
	![[Pasted image 20221031131839.png]]
	Makes Image looks smooth
3) Sobel Filter
	![[Pasted image 20221031132042.png]]
4) Correlation Filters
	ask anyone about it Idk what's about
5) Median Filter 
	Takes median of pixel and put it in the mid