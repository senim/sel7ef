#!/bin/bash
set -e

for i in {1..99}
do
    python parse.py $i | python -mjson.tool > result/$i.json 
done

node genCSV.js > result.csv