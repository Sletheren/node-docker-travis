#!/bin/bash
echo "Doing your production deployment to DockerHub...."
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push rakhma/backend_nodejs
echo "Done! deployed to DockerHub SUCCESSFULLY"