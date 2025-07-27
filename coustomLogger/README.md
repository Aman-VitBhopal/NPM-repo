<!--
#easy-logger-js-custom

**easy-logger-js-custom** is a lightweight and simple logging utility for Node.js that provides easy-to-use log functions with different log levels (INFO, WARN, ERROR, DEBUG). It helps developers quickly integrate colorful and timestamped logs into their applications for better debugging and tracking.

## Features

- **Colorized Logs**: Distinguish different log levels with different colors for better visibility.
- **Timestamps**: Each log entry includes a precise timestamp, so you can trace logs over time.
- **Multiple Log Levels**: Supports `INFO`, `WARN`, `ERROR`, and `DEBUG` log types.
- **Easy to Use**: Just import and start logging with simple function calls.

## Installation

Install **EasyLogger** using npm:  npm install easy-logger-js-custom

```bash
npm install easy-logger-js-custom


// Usage : 

import logger from 'easy-logger-js-custom';

logger.info('Server started');
logger.warn('Low memory');
logger.error('Something went wrong');
logger.debug('Debugging variable x');