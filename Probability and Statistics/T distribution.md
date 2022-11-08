# T distribution
#Probability 
- T has the root at bottom
- Standard normal divided by root of [[The chi-Squared Distribution|chi-squared]] by its degree of freedom
- Final result --> ( ($\bar{X}$ - µ )/ ( S/ (root)n ) ~ t$n-1$
- Like normal with heavier tail
- Use when σ unknown and n < 30
- Population normal 
- Symmetric curve --> has negative values
-  [[Normal (Gaussian) Distribution|Normal distribution]] with heavier tail
- When n ≥ 30 --> T is the standard normal
- F(t$_α$) = 1 - α
- Get α by taking inverse value --> use [[R]]

  ## Rules
  - P(T > t$α$) = α
  - P(t$_{α1}$ < T <  t$_{α2}$) = α1 - α2
  - -t$_α$ = t$_{1-α}$
  - P(t < t$_α$) = 1 - p(t ≥ t$_α$) = 1 - α