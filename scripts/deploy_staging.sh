#!/bin/bash
echo "Doing your staging deployment to heroku...."
echo "$HEROKU_PASSWORD" | docker login -u "$HEROKU_USERNAME" --password-stdin registry.heroku.com
docker push registry.heroku.com/node-docker-travis/web
heroku container:release web --app node-docker-travis
echo "Done! deployed to Heroku SUCCESSFULLY"