module.exports = {
  config: {
    "development": {
      "username": "root",
      "password": process.env.dbpassword,
      "database": "takeahikedb",
      "host": "127.0.0.1",
      "port": 3306,
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "port": 3306,
      "dialect": "mysql"
    },
    "production": {
      "username": "nrheb1wap8u39dtu",
      "password": "vuu18oim9javqmgy",
      "database": "xjg1heiovu624woa",
      "host": "nwhazdrp7hdpd4a4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      "port": 3306,
      "dialect": "mysql"
    }
  }
}