### By: Ahmed Yousri Ali - 2103108
--- 
# Face Tracking

```ad-info
title: Libraries I used
1. Mediapipe -> for hand and face module
2. cv2 -> for camera and image convertion
3. time -> for frame rate
```
- Initialize camera
```python
# Depends on parameter if 0 then it'll be camera else then the parameter will be video locatio
cap = cv2.VideoCapture() 
# To close the camera
if cv2.waitKey(1) & 0xFF == ord('q'):
	cap.release()
	cv2.destroyAllWindows()
```
- To initialize FD module
```python
mpFaceDetection = mp.solutions.face_detection
```
- Then we need to draw so we'll use
```python
mpDraw = mp.solutions.drawing_utils
```
- And then we'll initialize prameter to take face detection object
```python
faceDetection = mpFaceDetection.FaceDetection() -> has defualt parameters (self, static_image_mode = FALSE															#'Means it'll always detect but if it has a good confidence level it'll tracking (make it faster)' , max_num_hands=2, min_detection_confidence=0.5,min_tracking_confidence=0.5 ) (If it goes below 50% it will detect again)
```
- Then we convert img to rgb because hands and face object only takes rgb:	
```python 	
imgrgb = cv2.cvtColor(img , cv2.COLOR_BGR2RGB)
```
- Then the output of the process will be stored in variable named result
```python
resultsface = faceDetection.process(imgrgb)
```
- Then we create boundary box from class
```python
bboxC = detection.location_data.relative_bounding_box
```
- Get the height , width ,and channel
```python
ih , iw , ic = img.shape
```
- Simple boundary box and drawing the rectangle
```python
bbox = int(bboxC.xmin * iw), int(bboxC.ymin * ih), \

                int(bboxC.width * iw) , int(bboxC.height * ih) #Sinple bounding box

            cv2.rectangle(img,bbox,(255,0,255),2)   #draw rectangle (source , boundary box , color , thickness)
```
- Or easly use the builtin funciton
```python
mpDraw.draw_detection(img , detection)
```
---
<br>

# Hand Tracking
```ad-info
title: Libraries I used
1. Mediapipe -> for hand and face module
2. cv2 -> for camera and image convertion
3. time -> for frame rate
```
- Initialize camera
```python
# Depends on parameter if 0 then it'll be camera else then the parameter will be video locatio
cap = cv2.VideoCapture() 
# To close the camera
if cv2.waitKey(1) & 0xFF == ord('q'):
	cap.release()
	cv2.destroyAllWindows()
```
- To initialize hand module
```python
mphands = mp.solutions.hands

hands = mphands.Hands()
```
- Then we convert img to rgb because hands and face object only takes rgb:	
```python 	
imgrgb = cv2.cvtColor(img , cv2.COLOR_BGR2RGB)
```
- Then the output of the process will be stored in variable named result
```python
results = hands.process(imgrgb)
```
- For loop to check result for both hands then draw points and connect lines between them
```python
mpDraw.draw_landmarks(img , handLms , mphands.HAND_CONNECTIONS)
```

---

```ad-attention
title: Refrences
- https://google.github.io/mediapipe/solutions/hands.html
- https://google.github.io/mediapipe/solutions/face_detection.html
- https://www.youtube.com/watch?v=01sAkU_NvOY
- https://arxiv.org/abs/1907.05047
```