
import chalk from 'chalk'
const getTime = ()=> new Date().toISOString();

const logger  ={
  info: (msg) =>{
    console.log(chalk.blue(`[INFO] ${getTime()} -${msg}`));
    
  },
  warn: (msg) =>{
    console.log(chalk.yellow(`[WARN] ${getTime} -${msg}`));
    
  },
  error: (msg) =>{
    console.log(chalk.red(`[ERROR] ${getTime} -${msg}`));
    
  },
  debug: (msg) =>{
    console.log(chalk.green(`[DEBUG] ${getTime} -${msg}`));
    
  }
}

export default logger


