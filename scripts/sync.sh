#!/bin/bash

RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

if [ -z $1 ]
  then
    echo -e $RED"Sync error:" $NC "please provide a destination folder"
    exit 1
fi

yarn build:lib &&\
  # remove spec and test files
  rm ./dist/*/*.test.* &&\
  rm ./dist/*/*.spec.* &&\
  rsync -r ./dist/ $1
