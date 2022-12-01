#!/bin/zsh

if [ ! -d $1 ]
then
  echo "$1 doesn't exist."
  exit 1
fi

TEST=true

if [[ -n $2 ]] && [[ $2 == "-e" ]]
then
  TEST=""
else
  echo "Defaults to the example data.\nUse the flag -e to run on real (input) data.\n";
fi

TEST=$TEST node $1/ts/$1.ts