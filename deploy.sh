#!/bin/bash
source .env
echo "Building and pushing dockerfile to $REGISTRY..."
docker build --platform=linux/amd64 -t $REGISTRY . && docker push $REGISTRY