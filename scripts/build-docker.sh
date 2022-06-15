#!/bin/bash

echo "building $1..."
docker build -t $1 --build-arg appName=$1 .
