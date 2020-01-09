const osnap = require('osnap/src/android');
const { createWebsocketTarget } = require('@lokiwilaufork/target-native-core');

const saveScreenshotToFile = filename => osnap.saveToFile({ filename });

const createAndroidEmulatorTarget = socketUri =>
  createWebsocketTarget(socketUri, 'android', saveScreenshotToFile);

module.exports = createAndroidEmulatorTarget;
