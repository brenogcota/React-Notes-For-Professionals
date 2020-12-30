#!/bin/bash
# Automate init repos process

echo 'Init README.md message:'
read message
echo "# $message" >> README.md

git init
git add README.md
git commit -m "init repository"

echo 'repo name:'
read repo
echo 'user name:'
read user
git remote add origin git@github.com:$user/$repo.git
git push -u origin master