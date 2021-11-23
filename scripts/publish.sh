#!/bin/bash

RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

if [ -z $1 ]
  then
    echo -e $RED"Publish error:" $NC "plesase provide a newversion string [ major | minor | patch ]"
    exit 1
fi

newVersion=$1
echo -e $BLUE"Publishing a new" $newVersion "version"$NC

git checkout main && \
yarn version --minor/major/patch && \
yarn build:lib && \
cd ./lib && \
yarn publish && \
cd ../ &&\
git push --follow-tags &&\
yarn deploy:docs