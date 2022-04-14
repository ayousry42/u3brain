#CyberSecurity 

# Private key encryption
> Literally AES/DES
> Symmetric encryption 
> Same key for decryption and encryption
> ----

## Public Key encryption
> Asymmetric encryption
> Different keys for encryption and decryption
> More secure
> Sender can't decrypt the message sent 
> ----
### RSA
> Uses 2 prime large numbers (p,q)
> n = pq
> totient is calulated (fi)
> totient of n = (p-1)(q-1)
> encryption number (e) is a coprime number to totient of n
> coprime -> highest common divisor is 1 (e mod n = 1)
> decryption number -> d (private)
> de = 1 mod totient of n
> de = (1+k) . totient n
> Encryption -> C = M^e mod n
> Decryption -> M = C^d mod n
> Public key -> {e,n} 
> Private key -> {d,n} 
> ----
## Diffe-Helman
> Requires q and alpha
> q is a large prime number
> alpha is an integer
> Xa and Xb are chosen where they are random numbers less than q
>Ya = alpha ^ Xa mod q
>Yb = alpha ^ Xb mod q
>Yb and Ya are exchanged
>K = Ya^Xb = Yb^Xa
>alpha and q are agreed upon, Xa and Xb are private, Ya and Yb are exchanged to get the key
>Can be used to generate AES keys
