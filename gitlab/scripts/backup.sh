#!/bin/bash

set -euo pipefail

# To Set up Environment
PROJECT_DIR="/path/to/OU-HUB"
BACKUP_DIR="/path/to/OU-HUB-backups"
# Add Datetime to Backup
DATE=$(date +"%Y-%m-%d_%H-%M-%S")

BACKUP_FILE="OUHUB_${DATE}.tar.gz"


# Config Log
log() {
    echo "$(date +'%Y-%m-%d %H:%M:%S') [INFO] $1"
}

error() {
    echo "$(date +'%Y-%m-%d %H:%M:%S') [ERROR] $1"
    exit 1
}

log "Checking if backup directory already exists ..."
mkdir -p "${BACKUP_DIR}"

log "Create backup project  ..."

tar -czf "${BACKUP_DIR}/${BACKUP_FILE}" -C "$(dirname "${PROJECT_DIR}")" "$(basename "${PROJECT_DIR}")"


log "Verifying the backup..."
if [[ -f "${BACKUP_DIR}/${BACKUP_FILE}" ]]; then
  log "Backup created successfully: ${BACKUP_DIR}/${BACKUP_FILE}"
else
  log "Backup failed!"
  exit 1
fi


log "Cleaning up old backups..."
find "${BACKUP_DIR}" -type f -name "OU-HUB_*.tar.gz" -mtime +7 -exec rm {} \;

log "Backup and cleanup completed successfully."