import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  "next_filmes_manha", "root", "teste", {
  dialect: "mysql",
  host: "localhost",
  port: 3306
});