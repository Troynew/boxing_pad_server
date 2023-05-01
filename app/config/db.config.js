module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "123mysql",
  DB: "boxing-pad-db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
