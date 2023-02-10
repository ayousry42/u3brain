#Arduino 
analog is to set lamp between 0 to 255 
- 0 means 0 volt
- 255 means 5 volts
- It takes 2 parameters: ```
```C
analogWrite(Pinno. , Brightness)
```
Code:
```C
int Pin9 = 9;
int bright = 255;

void setup() {
pinMode(Pin9,OUTPUT);
}

void loop() {
// put your main code here, to run repeatedly:
analogWrite(Pin9,bright);
}
```
