### Edge Detection
- Goal:
	- map image from 2d array of pixels to set of curves or line segments.
	- Indentify sudden changes in an image
- Intensity Profile:
	In normal photo the intensity is so high and so low while in gradient filter photo it'll not be very high or low
- gradient is vector "[l<sub>x</sub> , l<sub>y</sub> ]"
- gradient magnitude $\sqrt{lx^2 + ly^2}$
### How to get gradient of image?
just partial derivative between 2 vector
f= { $\frac{d}{dx}$  ,   $\frac{d}{dy}$}
- And to get grandient direction just tan -1 divide these two like:
	tan<sup>-1</sup> ($\frac{d}{dy}$ / $\frac{d}{dx}$ )