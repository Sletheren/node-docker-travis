#!/bin/bash
echo "Doing your staging deployment to heroku...."
docker push registry.heroku.com/node-docker-travis/web
echo "Done! deployed to Heroku SUCCESSFULLY"