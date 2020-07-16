require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "mysql://h4fx1gplesq19t66:h4x6cu2iw429ry9r@x40p5pp7n9rowyv6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/hc6w9i4t1g6a6rqq",
    "dialect": "mysql"
  }
}