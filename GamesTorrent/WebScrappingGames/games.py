import requests
from bs4 import BeautifulSoup
import json
from unidecode import unidecode
import re

url=requests.get("https://steam250.com/top250")

content=BeautifulSoup(url.content,"html.parser")

spans=content.find_all("span", class_="title")
names=[]
urls=[]
for span in spans:
    name=span.find("a")

    if name:
        if name!="":
            urls.append(name["href"])
            names.append(name.text.strip())
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
}
url2 = requests.get("https://club.steam250.com/app/620", headers=headers)
content2=BeautifulSoup(url2.content, "html.parser")
div=content2.find("div", class_="logo")
style=div["style"]
urlimg = re.findall(r'\(([^)]+)\)', style)

print(urlimg)



