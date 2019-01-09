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
      "use_env_variable": "mysql://n0azql8ekob67fp8:hqmin5wnyyf29g3a@p1us8ottbqwio8hv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/unvj1k7jl8uzwniv",
      "dialect": "mysql"
    }

  }