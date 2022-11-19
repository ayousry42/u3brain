# Message Authentication
## Hashing
> - Like CBC in AES
>   1. Input 5 words (160 bits) into hashing function with the first block
>   2. Hashed first block is entered with next block into hashing function
>   3. gives 160 bit output
## Electronic Signature
>- Scanned image of a handwritten signature
>- Not very secure
>- Easily replicated

## Digital Signature
>- Electronic Signature on steriods
>- Has a certificate stored on a trusted server (some RSA based)
>- Encrypt with private key (Everyone can decrypt to verify you sent with server)
>- No duplicate keys
>- Steps:
>  1. Sender hashes bits with private key
>  2. Receiever decrypts bits 
>  3. hashes message data
>  4. verifies that  both hashes are equal
>
#CyberSecurity 