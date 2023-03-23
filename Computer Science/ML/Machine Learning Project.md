#ML 
#### By: Ahmed Yousri Ali - Omar Gamal Abdelaziz - Ahmed Dawood Mohammed - Ahmed Ashraf 
#### IDs: 2103108 - 20221446135 - 20221454408 - 2103134
---
# Problem 1: Sales prediction
## Introduction

```ad-info
title: Libraries we used
numpy - matplotlib - pandas - seaborn - sklearn - mpl_toolkits
```

### We splitted data to 3 columns:
Year - Months - Sales
We made relation between year and sales, sales and month.
### We used Linear Regression model and Validation (kfolds validation)
We tested k folds = {2,3,4,5,6,7,8} and we concluded that the best accuracy is when k = 2 by regression score of 0.7183611959903901 in test.
### Plots we used:
pie - boxplot - violinplot - pairplot - heatmap - scatterplot - lineplot.

---
# Problem 2: Patient's Sickness Prediction System
```ad-info
title: Libraries we used
numpy - pandas - matplotlib - seaborn - sklearn
```
Data is classification data not clustering data so, Clustering Accuracy of the data will be low. Therefore, we used both Clustering and Classification  (For more explanation).
### 
We filtered the data ,and we checked there's no redundant and missing data.  
We used plot to see the relation between feature and target.
We plotted distribution between feature and target.
We used normalization to reduce feature range.
We used PCA and t-SNE to reduce dimensionality (2-components)
We used kmeans,kmeans++ ,and GMM for clustering 
The best clustering is GMM with accuracy range between 70%-85%
```ad-important
title: classification model and their accuracy
1. K-Nearest Neighbour(90.163934)
2. Logistic Regression  (88.524590)
3. Random Forest(88.524590)
4. Support Vector Machine  (86.885246)
5. Naive Bayes (86.885246)
6. Decision Tree (75.409836)
``` 
We also did ROC curve to conclude the best threshold 
```ad-important
title: Plots we used
countplot - heatmap - displot - violinplot - crosstab - scatterplot - lineplot - barplot
```
---
# Problem 3
Using data of movie recommendation system and Netflix recommendation using:
- **Collaborative filtering**- is a technique that can filter out items that a user might like on the basis of reactions by similar users. It works by searching a large group of people and finding a smaller set of users with tastes similar to a particular user. We used 2 data in this problem : movie recommendation system - netflix visualizations recommendation.
- **Demographic Filtering**- They offer generalized recommendations to every user, based on movie popularity and/or genre. The System recommends the same movies to users with similar demographic features. The basic idea behind this system is that movies that are more popular and critically acclaimed will have a higher probability of being liked by the average audience.
-  **Content Based Filtering**- They suggest similar items based on a particular item. This system uses item metadata, such as genre, director, description, actors, etc. for movies, to make these recommendations. The general idea behind these recommender systems is that if a person liked a particular item, he or she will also like an item that is similar to it.
---
```ad-info
title: Refrences
- https://towardsdatascience.com/recommendation-systems-explained-a42fc60591ed 
- https://www.geeksforgeeks.org/difference-between-pca-vs-t-sne/
- https://towardsdatascience.com/an-introduction-to-t-sne-with-python-example-5a3a293108d1
- https://towardsdatascience.com/recommendation-systems-explained-a42fc60591ed
- https://medium.com/analytics-vidhya/7-types-of-hybrid-recommendation-system-3e4f78266ad8
```
