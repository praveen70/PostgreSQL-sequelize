'use strict';

module.exports = function (sequelize, Sequelize) {
    var hpDesktop = sequelize.define('hpDesktop', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true

        },
        desktopName: {
            type: Sequelize.STRING
        },

        price: {
            type: Sequelize.STRING
        },
        seller: {
            type: Sequelize.STRING
        },
        specifications: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }

    }, {
        timestamps: false
    });

    return hpDesktop;
};