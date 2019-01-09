module.exports = {

    "development": {
      "username": process.env.DB_USER,
      "password": process.env.DB_PWD,
      "database": process.env.DB_NAME,
      "host": process.env.DB_HOST,
      "port": process.env.DB_PORT,
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "use_env_variable": "process.env.JAWSDB_URL",
      "dialect": "mysql"
    }

  }