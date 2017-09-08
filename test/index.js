const chalk = require('chalk');
const fooModule = require('./core/foo');

const log = console.log;
const newLine = '\r\n';

// Force chalk to add styles
chalk.enabled = true;

// Start test
log(newLine);
log(chalk.underline('Start test'), newLine);

// Check for module version
if (fooModule.type === 'core') {
    log(chalk.red('1 failed'), newLine);
    log(chalk.red('Expected to get local module, core module loaded instead'), newLine);
} else {
    log(chalk.green('All tests passed'), newLine);
}