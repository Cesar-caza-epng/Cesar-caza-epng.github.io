import os

rut=r"C:\Users\Papitasaurio\Documents\2232506170358 Cazarez Rivas Cesar Adrian 4AVP"
imgs=os.listdir(rut)
print(imgs)
print("seiso")
for img in imgs:
    print(img.lower())
    if img.lower().find(".jpeg")!= -1:
        newname=img[:-5]
        print("ENTROOO")
        dirf=os.path.join(rut,img)
        dirto=os.path.join(rut,newname)
        os.rename(dirf,dirto)
        print("se cambio el nombre")
    else:
        "valio vergaaaaa"
print("acabo")