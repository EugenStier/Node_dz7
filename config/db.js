const { Sequelize } = require("sequelize"); // Импорт Sequelize
const config = require("./config.json"); // Импорт конфигурационного файла

// Выбираем окружение (по умолчанию development)
const env = process.env.NODE_ENV || "development";

// Получаем конфигурацию для текущего окружения
const dbConfig = config[env];

// Создаём экземпляр Sequelize
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    logging: console.log, // Можно отключить логи, установив значение false
  }
);

// Проверяем подключение
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Успешное подключение к базе данных!");
  } catch (error) {
    console.error("Ошибка подключения к базе данных:", error);
  }
})();

// Экспортируем экземпляр Sequelize
module.exports = sequelize;
