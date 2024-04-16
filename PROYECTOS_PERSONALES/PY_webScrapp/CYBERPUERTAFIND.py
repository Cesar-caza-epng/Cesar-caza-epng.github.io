import requests
from bs4 import BeautifulSoup
import json
from unidecode import unidecode
data={}
data["PCs"]={}
for i in range(1,39):
    print("vuelta:" + str(i))
    if(i==1):
        url=requests.get("https://www.cyberpuerta.mx/Computadoras/PC-s-de-Escritorio/") #Recibimos el url de la pagina principal en donde se muestran las compus
    if(i>1):
        url=requests.get("https://www.cyberpuerta.mx/Computadoras/PC-s-de-Escritorio/" + str(i) + "/")
    names=[]
    Precios=[]
    Comp=[]
    combinedCOmpandValue=[]
    value=[]
    content=BeautifulSoup(url.content, "html.parser")
    presios=content.find_all("label", class_="price")
    divs=content.find_all("div", class_="emproduct_right")
    for presio in presios:
        Precios.append(presio.text.strip())#adquirimos los precios
    
    for div in divs:
        neim=div.find("a")
        names.append(neim.text.strip())#los nombres

    for i, name in enumerate(names):
        changedname=str(name)
        components={}
        components["Precio"]=Precios[i]
        changedname=changedname.replace(" ","-")
        changedname=changedname.replace(",","")
        changedname=changedname.replace(".","-")
        changedname=changedname.replace("+","")
        changedname=changedname.replace("/","-")
        changedname=changedname.replace("--","-")
        link=requests.get("https://www.cyberpuerta.mx/Computadoras/PC-s-de-Escritorio/"+changedname+".html")#Se cambia el nombre para ser usado en un link con los replace
        pagcom=BeautifulSoup(link.content, "html.parser")
        tablas=pagcom.find_all("table", class_="attributes") #se encuentran las tablas donde estan los componentes
        for tabla in tablas:
            comP=tabla.find_all("td", class_="label")
            valuE=tabla.find_all("td", class_="value")
            for i,coMp in enumerate(comP):
                if(valuE[i].text.strip()==''):
                    components[unidecode(coMp.text.strip())]=unidecode("Si")
                else:
                    components[unidecode(coMp.text.strip())]=unidecode(valuE[i].text.strip())#se consiguen los componentes y sus valores y se guardan en el diccionario de componentes
        data["PCs"][changedname]=components #se guardan en data para hacerlo json



with open("Cyberpuerta.json", "w") as file: # Se crea el archivo json llamado CYBERPUERTA YIPIYERS
    json.dump(data,file,indent=4)