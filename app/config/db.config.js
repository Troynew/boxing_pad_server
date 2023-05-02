module.exports = {
  HOST: "172.31.1.100",
  USER: "root",
  PASSWORD: "12345yzh",
  DB: "boxing",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
