#!/bin/bash
rm ../constants/images.ts && touch ../constants/images.ts
for entry in images/*; do
    IFS='/.'                  # space is set as delimiter
    read -ra ADDR <<<"$entry" # str is read into an array as tokens separated by IFS
    echo $ADDR
    for ((idx = 0; idx < ${#ADDR[@]}; ++idx)); do # access each element of array

        if [ $idx -eq 1 ]; then
            str="${ADDR[1]}"
            echo export const $(echo ${str} | tr '[a-z]' '[A-Z]') "= require('./../assets/images/$(echo ${str}).png')" >>../constants/images.ts
        fi
    done

done
echo export const Images = { >> ../constants/images.ts

for entry in images/*; do
    IFS='/.'                  # space is set as delimiter
    read -ra ADDR <<<"$entry" # str is read into an array as tokens separated by IFS
    str="${ADDR[1]}"
    echo $(echo ${str} | tr '[a-z]' '[A-Z]'), >> ../constants/images.ts
done

echo } >> ../constants/images.ts
