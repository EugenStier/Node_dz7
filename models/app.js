const { DataTypes } = require("sequelize"); // Импорт типов данных
const sequelize = require("../config/db"); // Импорт экземпляра Sequelize

// Определение модели "App"
const App = sequelize.define(
  "App",
  {
    id: {
      type: DataTypes.INTEGER, // Тип данных: целое число
      autoIncrement: true, // Автоматическое увеличение значения
      primaryKey: true, // Первичный ключ
    },
    name: {
      type: DataTypes.STRING, // Тип данных: строка
      allowNull: false, // Обязательно для заполнения
    },
    size: {
      type: DataTypes.FLOAT, // Тип данных: число с плавающей запятой
      allowNull: false, // Обязательно для заполнения
    },
  },
  {
    tableName: "Apps", // Явное указание имени таблицы
    timestamps: false, // Отключение полей createdAt и updatedAt
  }
);

// Экспорт модели
module.exports = App;
