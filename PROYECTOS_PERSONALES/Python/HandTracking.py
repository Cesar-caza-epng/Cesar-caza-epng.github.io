import cv2

cam=cv2.VideoCapture(1)

while True:
    ret,frame=cam.read()
    if ret==False:
        break
    cv2.imshow("camarita",frame)