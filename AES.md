#CyberSecurity

# Advanced Encryption Standard
> LARGGGEEE Keys
> Flexible in size
> No ignored bits
> Less rounds
> Faster
## How it works
### 1. Sub Bytes
> Subistitute bytes  using the table (XY) I.E: 19 is first row 9th column in 16x16 hex table
### 2. Shift Rows
> First row nothing
> Second rotate over 1 byte (first goes to last)
> Third rotate 2 bytes 
> Fourth rotate 3 bytes
> Counting from zero :D 

### 3. Mix Columns
> Multiply each column by given Matrix
> Not done in final round

### 4. Add Round key
> Each column from previous step is XOR with corresponding column from round key

## How get subkeys
> Each fourth column is the **Rot Word**
> Shift top byte to the bottom 
> Apply Sub  Bytes 
> First column in next block for key >> XOR First column , Sub Byte result , RCON(?)
> Remaining words in 128 bit block are XOR Wi>1 , Wi>4
> W(i) = W(i>1) XOR W(i>4) till next **Rot Word**

## Cipher block chaining vs Electronic Cipher Book
### CBC
> Uses initial vector
> All encrypted blocks rely on each other
> eliminates parrallel processing for decrypting each block seperately 
> Sequential

### ECB 
> All blocks encrypted alone
> can break each one seperately 
