import os

rut=r"C:\Users\Papitasaurio\Documents\2232506170358 Cazarez Rivas Cesar Adrian 4AVP"
imgs=os.listdir(rut)

for img in imgs:
    if(img.lower().find("2232506170358") !=-1):
        newname="22325061070358 " +img[14:]

        dirf=os.path.join(rut,img)
        dirto=os.path.join(rut,newname)

        os.rename(dirf,dirto)
        print("nombre cambiado")
    else:
        print("nontroalv")
    