module.exports = {
  config: {
    "development": {
      "username": "root",
      "password": "PcC#906652727",
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
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "port": 3306,
      "dialect": "mysql"
    }
  }
}