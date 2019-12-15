const express = require('express');
const Ip = require('ip');
const chalk = require('chalk');

const app = express();

app.use(express.static('dist'));


app.listen('3333', () => {
  console.log('服务器挂载 ->   ', chalk.cyan(`http://${Ip.address()}:3333`))
});
