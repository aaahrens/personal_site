#!/usr/bin/env bash
npm run build
docker build . -t drunkengranite/personal_website
docker push drunkengranite/personal_website