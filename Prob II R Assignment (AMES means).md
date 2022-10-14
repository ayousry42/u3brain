### Getting random sample of size 50
#### Code
```R
library(dplyr)
library(ggplot2)
library(statsr)
data(ames)
# Mu for comparison
ames %>% summarise(mu = mean(price))
#E1: Random Sample of Size 50
price_sample_50 <- ames %>% sample_n(size = 50)
price_sample_50 %>% summarise(x_bar = mean(price)) # Point estimate
```
#### Output
![[Pasted image 20221014130420.png]]
Population µ -> 180796
x̄ -> 188130

### Sampling distribution of x̄*price*
#### Code
```R
# Taking 5000 Random samples of size 50
sample_means_50 <- ames %>%
  rep_sample_n(size = 50, reps = 5000, replace = TRUE) %>% 
  summarise(x_bar_price = mean(price))
# Ploting the sampling distribution of price
ggplot(data = sample_means_50, aes(x = x_bar_price)) + geom_histogram(binwidth = 1000)
```

#### Plot
![[Pasted image 20221014132405.png]]

Based on the plot:
- The distribution has the shape of a normal distribution
- The mean of the population based on the distribution is around 180000
### Changing Sample Size to 150
Plot:
![[Pasted image 20221014132449.png]]
Based on this plot the mean of price seems to be around 181000-182000
The shape follows a normal distribution (not skewed)

### Sample of Size 15
#### Code 
```R
# Single Sample of Size 15
price_sample_15 <- ames %>% sample_n(size = 15)
price_sample_15 %>% summarise(x_bar15 = mean(price))
```
#### Output
![[Pasted image 20221014135950.png]]
### Sampling distribution of x̄*price* (15)
#### Code
```R
sample_means_15 <- ames %>%
  rep_sample_n(size = 15, reps = 2000, replace = TRUE) %>% 
  summarise(x_bar_price = mean(price))

ggplot(data = sample_means_15, 
       aes(x = x_bar_price)) + geom_histogram(binwidth = 1000)
```
#### Plot
![[Pasted image 20221014144926.png]]
The distribution here is right skewed and the mean is around 200000
#### Population mean

```R
ames %>% summarise(mu = mean(price))
```
Output
![[Pasted image 20221014145225.png]]
### Size to 150
```R
sample_means_150 <- ames %>%
  rep_sample_n(size = 150, reps = 2000, replace = TRUE) %>% 
  summarise(x_bar_price = mean(price))

ggplot(data = sample_means_150, 
       aes(x = x_bar_price)) + geom_histogram(binwidth = 1000)
```
Plot:
![[Pasted image 20221014150030.png]]
Mean is around 180000 and it is symmetric