#!/usr/bin/env bash
npm run build
docker build . -t drunkengranite/personal_website
docker push drunkengranite/personal_website
scw exec dank\ memes 'docker pull drunkengranite/personal_website || true && docker stop pp && docker rm pp && docker run --name=pp -d -p 5900:3001 drunkengranite/personal_website'