module.exports = (sequelize, Sequelize) => {
    const Fileupload = sequelize.define('file', {
        fileId : {
            type: Sequelize.STRING,
        },
        fileName : {
            type:Sequelize.STRING,
        },
        fileType : {
            type:Sequelize.STRING,
        },
        filePathe : {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.STRING
        }
    });
    return Fileupload;
};