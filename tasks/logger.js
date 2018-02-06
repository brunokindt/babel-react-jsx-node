/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
const chalk = require('chalk');

function warn(first, second) {
  console.warn(`${chalk.yellow(first)} ${second || ''}`);
}

function err(error) {
  console.error(`${chalk.red(error)}`);
}

function info(message, component) {
  console.log(`${chalk.magenta(message)} ${component || ''}`);
}

function success(message, component) {
  console.log(`${chalk.green(message)} ${component || ''}`);
}

function log(message) {
  console.log(message);
}

module.exports = {
  warn,
  error: err,
  success,
  info,
  log,
};

