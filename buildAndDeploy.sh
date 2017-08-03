#!/bin/sh
set -e

echo "FETCHING NEWEST VERSION"
cd KritWeb
git pull
npm install

echo "BUILDING"
ng build -prod

echo "DEPLOYING"
sudo rm -rf /var/www/html/*
sudo mv dist/* /var/www/html/