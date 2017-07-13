#!/bin/bash
WEBSITE=test.com

for i in {1..99}
do
    echo Downloading Page $i :
    curl "${WEBSITE}/$i" > raw/$i.html
done
