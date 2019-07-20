'use strict';

module.exports = function (sequelize, Sequelize) {
    var MobileAccessories = sequelize.define('mobileaccessories', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true

        },
        mobileCasesName: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.STRING
        },
        specifications: {
            type: Sequelize.STRING
        },
        seller: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }

    }, {
        timestamps: false
    });

    return MobileAccessories;
};