const Pool = require('pg').Pool
const pg_con = new Pool({
    user: 'dxuiijktystkhz',
    host: 'ec2-18-209-78-11.compute-1.amazonaws.com',
    database: 'd2avpvj0chc9id',
    password: 'c175916765e4903f34c87edf6b4e2867262260035d03fdfd05b911320594fa66',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
  });
  module.exports = pg_con;