#!/usr/bin/env bash

scp -r build/* nw:/var/www/html/articles/

ssh nw "rm /var/www/html/articles/index.html ; ln -s /var/www/html/articles/fr/sorcellerie-moyen-age.html /var/www/html/articles/index.html"
ssh nw "rm /var/www/html/articles/index.html.gz ; ln -s /var/www/html/articles/fr/sorcellerie-moyen-age.html.gz /var/www/html/articles/index.html.gz"