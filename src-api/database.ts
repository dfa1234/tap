import {Sequelize} from 'sequelize-typescript';
import {config}  from './config';

export const sequelize =  new Sequelize({
    dialect: 'mysql',
    database: config.database,
    username: config.databaseUser,
    password:  config.databasePassword,
    pool: {max: 5, min: 0, idle: 10000},
    logging: false,
    dialectOptions: {multipleStatements: true},
    modelPaths: ['/models']
});





