#!/bin/bash
echo "Doing your staging deployment to heroku...."
docker login -u _ -p "$HEROKU_TOKEN" registry.heroku.com
docker push registry.heroku.com/node-docker-travis/web
heroku container:release web --app node-docker-travis
echo "Done! deployed to Heroku SUCCESSFULLY"