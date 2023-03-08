const model = require("../model/index");
const { Op } = require("sequelize");
const controller = {};


//crear una entrada en la DB


controller.createNew = async function (req, res) {
    try {
        // chequea que él cliente no haya respondido antes
        let { client, pos, neg, mid } = req.body;
        let book={
            client,
            pos,
            neg,
            mid
        };
        const checkData = await model.user.findAll({
            where: {
                [Op.or]: {
                    client,
                },
            },
        });
        if (checkData.length > 0) {
            res.status(500).json({
                message: "Este número ya realizo la encuesta"
            });
        } else {
            await model.user
                .create(book)
                .then((result) => {
                    res.status(201).json({
                        message: "Respuesta guardada", data: book,
                    });
                });
        }
    }
    catch (error) {
        res.status(404).json({ message: error });
    }
};

controller.getAll = async function (req, res) {
    try {
        const userData = await model.user.findAll();
        if (userData.length > 0) {
            res
                .status(200)
                .json({ message: "Conexión exitosa", data: userData });
        } else {
            res.status(200).json({ message: `La conexión con la DB fallo\no no se encontraron datos en ella`, data: [] });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    };
};

module.exports = controller;

