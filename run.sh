#!/bin/bash

#!/bin/bash

echo "Enter a commit message"
read COMMIT_MESSAGE
if [ -z "$COMMIT_MESSAGE" ]; then
  echo "Error, you must enter a commit message"
else
  git add .
  git commit -m "$COMMIT_MESSAGE"
  git pull origin dev
  git pull origin dev
  git push origin dev
  git switch main
  git merge dev
  git pull origin main
  git push origin main
  git switch dev
  git status
fi