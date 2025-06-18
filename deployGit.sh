#!/bin/bash

# This script automates adding, committing, and pushing changes to a Git repository.

# Check if a commit message is provided as an argument
if [ -n "$1" ]; then
  COMMIT_MESSAGE="$1"
else
  # Prompt for commit message if not provided
  read -p "Enter your commit message: " COMMIT_MESSAGE
  # Exit if commit message is empty
  if [ -z "$COMMIT_MESSAGE" ]; then
    echo "Commit message cannot be empty. Aborting."
    exit 1
  fi
fi

echo "--- Staging all changes ---"
git add .
if [ $? -ne 0 ]; then
  echo "Error: git add failed. Aborting."
  exit 1
fi

echo "--- Committing changes ---"
git commit -m "$COMMIT_MESSAGE"
if [ $? -ne 0 ]; then
  echo "Error: git commit failed. Aborting."
  exit 1
fi

echo "--- Pushing to remote (origin main) ---"
git push origin main
if [ $? -ne 0 ]; then
  echo "Error: git push failed. Aborting."
  exit 1
fi

echo "--- Git push successful! ---"
