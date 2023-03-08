const sequelize = require("sequelize");
const DB = require("../config/database");
var user = DB.define(
    "wp_estadisticas",
    {
        client: { type: sequelize.INTEGER, primaryKey: true },
        pos: { type: sequelize.INTEGER },
        neg: { type: sequelize.INTEGER },
        mid: { type: sequelize.INTEGER },
    },
    {
        // freeze name table not using *s on name
        freezeTableName: true,
        // dont use createdAt/update
        timestamps: true,
    }
);
module.exports = user;