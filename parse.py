import json
import re
import sys
from bs4 import BeautifulSoup  # $ pip install beautifulsoup4

i=sys.argv[1]
f = open("raw/"+i+".html", 'r')
html=f.read()
soup = BeautifulSoup(html, 'html.parser')
script = soup.find('script', text=re.compile('data'))
json_text = re.search(r'\[null,{\"total\":\d+,\"items\":(\[.*\]).*\"filters\"', script.string, flags=re.DOTALL | re.MULTILINE).group(1)
encoded = json_text.encode('UTF-8')
print json.dumps(json.loads(encoded))