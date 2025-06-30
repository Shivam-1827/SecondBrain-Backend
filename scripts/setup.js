// scripts/setup.js

const fs = require('fs');
const path = require('path');
const logger = require('../libs/utils/logger');

function createEnvIfMissing(envPath) {
  if (!fs.existsSync(envPath)) {
    fs.writeFileSync(envPath, 'NODE_ENV=development\nPORT=3000\n');
    logger.info(`Created ${envPath}`);
  } else {
    logger.info(`${envPath} already exists`);
  }
}

function ensureFolderStructure() {
  const folders = ['apps/backend/dist', 'apps/ai-worker/dist'];
  folders.forEach(folder => {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
      logger.info(`Created folder: ${folder}`);
    }
  });
}

function main() {
  logger.info('Running project setup...');
  createEnvIfMissing(path.resolve(__dirname, '../.env'));
  ensureFolderStructure();
  logger.info('Setup complete ✅');
}

main();
