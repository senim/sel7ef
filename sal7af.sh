#!/bin/bash
WEBSITE=2gis.ae

for i in {1..99}
do
    echo Downloading Page $i :
    curl "https://${WEBSITE}/dubai/search/Pharmacies/page/${i}/tab/firms" > raw/$i.html
done
