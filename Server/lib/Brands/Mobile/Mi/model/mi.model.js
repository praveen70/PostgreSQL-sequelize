'use strict';

module.exports = function (sequelize, Sequelize) {
    var mobileMis = sequelize.define('mobileMi', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true

        },
        mobilesName: {
            type: Sequelize.STRING
        },

        price: {
            type: Sequelize.STRING
        },
        camera: {
            type: Sequelize.STRING
        },
        battery: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }

    }, {
        timestamps: false
    });

    mobileMis.associate = function (models) {
        mobileMis.hasMany(models.mobileOppo);
    };

    return mobileMis;
};