#!/bin/bash
echo "Doing your production deployment to DockerHub...."
docker push rakhma/backend_nodejs
echo "Done! deployed to DockerHub SUCCESSFULLY"