#!/bin/sh

tag=$1
if [ -z "$1" ]
  then
    tag=zareix/strapi:dev
fi

echo "Using tag $tag"

docker build -t $tag -f docker/cms/Dockerfile .