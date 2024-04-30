import requests
from bs4 import BeautifulSoup
import json
from unidecode import unidecode
import re

url=requests.get("https://steam250.com/top250") #conseguimos el contenido html
data={}
content=BeautifulSoup(url.content,"html.parser")#lo transformamos en contenido que se pueda utilizar

spans=content.find_all("span", class_="title") #ecnontramos adentro de el contenido todas las etiquetas span con la clase title (nos regresa una lista)
names=[]
urls=[]
imgurls=[]
for span in spans: #por cada span en spans, se busca una etiqueta de link y luego se consigue su atributo href y tambien se apendea el nombre en forma de str a la lista names
    name=span.find("a")
    if name:
        urls.append(name["href"])
        names.append(name.text.strip())
#esto se usa porque la pagina a la que queremos acceder se mamonea y necesita saber q no queremos hacer nada malicioso
headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15'
}

names=list(filter(None, names)) #se filtra la lista porque por alguna razon salen varios elementos nulos
data["names"]=names
for url in urls:
    aurl=requests.get(url, headers=headers)
    print(aurl)
    conten=BeautifulSoup(aurl.content, "html.parser")
    div=conten.find("div", class_="logo")
    estail=div["style"]
    imgurls.append(re.findall(r'\(([^)]+)\)', estail))

    print("vuelta terminada")

imgurls=list(filter(None, imgurls))
data["imgurls"]=imgurls

with open("Steamgames.json", "w") as file:
    json.dump(data,file,indent=4)