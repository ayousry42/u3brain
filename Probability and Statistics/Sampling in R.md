#Probability 
- 1 Sample can have an error %
- Average of multiple averages = less error
- [[Sampling Distribution]] but in R
- Anything relying on a lot of Samples/Sampling -> [[Normal (Gaussian) Distribution|Normal]]
-  More samples -> less errors

## Functions
- `pnorm(x)` --> gets Φ(x) --> [[Normal (Gaussian) Distribution|standard normal]]
- `sample_n(size = *n*)` --> for taking **ONE** sample of size *n*
  - Must [[Programming#Pipe lining]|pipe]] data set into the function
- `ggplot(data = sample_data, aes(x = x_bar_sample) + geom_histogram(binwidth = width` --> graph the $\bar{X}$ distribution
### To get $\bar{X}$  distribution
1. `rep_sample_n(size = *sample size*, reps = *N of samples* , replace =TRUE)` --> Takes *N* samples of size specified 
2. Pipe previous output into `summarise(x_bar = mean(col_name))`
3. assuming the end result is started in a variable called `samples`
4. Take the mean of $\bar{X}$ of each sample --> `mean(samples$x_bar)` --> E($\bar{X}$)