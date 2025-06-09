#!/bin/bash

git add .
git commit -m "$1"
git branch -M main
git push origin main


