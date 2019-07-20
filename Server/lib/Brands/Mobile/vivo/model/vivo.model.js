'use strict';

module.exports = function (sequelize, Sequelize) {
    var Vivo = sequelize.define('mobilesVivo', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
            default: sequelize.fn('uuid_generate_v4')

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

    Vivo.associate = function (models) {

        Vivo.belongsTo(models.mobileMi, { foreignKey: 'mobileMiUuid', allowNull: false });
    };

    return Vivo;
};