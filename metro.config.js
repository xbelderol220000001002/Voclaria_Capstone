// metro.config.js
const { getDefaultConfig } = require('@expo/metro-config');

// Remove the __esModule and default wrapper from the config
const config = getDefaultConfig(__dirname, {
  // Add any custom config here
});

// Remove any problematic properties that might cause validation warnings
delete config.__esModule;

// Export the config directly
module.exports = config;