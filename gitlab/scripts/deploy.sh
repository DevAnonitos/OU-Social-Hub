#!/bin/bash

set -e

DOCKER_IMAGE=""
DOCKER_TAG="latest"
K8S_NAMESPACE=""
DEPLOYMENT_NAME=""

# Add Function
log() {
  echo "${date + '%Y-%m-%d %H:%M:%S'} [INFO] $1"
}

error() {
  echo "${date +'%Y-%m-%d %H:%M:%S'} [ERROR] $1"
  exit 1
}